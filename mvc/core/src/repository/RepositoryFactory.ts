import { BaseRepository } from "./BaseRepository";
import {getRepositoryMetadata} from "./Sql";
import { Connection } from "../db/Connection";
import {DbContext} from '../db/DbContext'


/*export interface RepositoryHandler {
    execute(sql:string, params?:any[]):Promise<any>;
}*/

export interface  RepositoryHandler {
     execute(sql:string, ...params:any):Promise<any>;
}

export class RepositoryFactory {
    public static newRepository<REPO extends BaseRepository<any,any>>(c: new () => REPO,  callback:RepositoryHandler): REPO {
        var face:REPO = new c();
        var proxyHandler = new MyProxy(callback);
        var p = new Proxy(face, proxyHandler);
        return p;
    }
} 

class RepositoryData {
    handler: RepositoryHandler;
    sql:string;
    constructor(sql:string, handler:RepositoryHandler) {
        this.sql = sql;
        this.handler = handler
    }
}

class MyProxy implements ProxyHandler<any> {
    private handler: RepositoryHandler;
    constructor(handler:RepositoryHandler) {
        this.handler = handler
    }
    get? (target: any, propKey:PropertyKey, receiver: any): any{
        //console.log(`Reading property "${propKey.toString()}"`);
        //console.debug(target.constructor.name);
        var clazz = target.constructor.name;
        var func = propKey.toString();
        var sql = getRepositoryMetadata(clazz, func);
        //return target[propKey]
        //this.__func = target[propKey];
        //this.__target = target;
        var repoData = new RepositoryData(sql, this.handler);
        return proxyFunction.bind(repoData);
    } 
}
async function proxyFunction (...params:any):Promise<any[]> {
    var data = await this.handler.execute(this.sql,params);
    return data;
}