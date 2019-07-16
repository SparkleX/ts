import { BaseRepository } from "./BaseRepository";
import {getRepositoryMetadata} from "./Sql";
import { Connection } from "../db/Connection";

export class RepositoryFactory {

    public static newRepository<REPO extends BaseRepository<any,any>>(c: new () => REPO): REPO {
        var face:REPO = new c();
        var proxyHandler = new MyProxy();
        var p = new Proxy(face, proxyHandler);

        return p;

    }

} 


class MyProxy implements ProxyHandler<any> {
    get? (target: any, propKey:PropertyKey, receiver: any): any{
        console.log(`Reading property "${propKey.toString()}"`);
        console.debug(target.constructor.name);
        var clazz = target.constructor.name;
        var func = propKey.toString();
        var sql = getRepositoryMetadata(clazz, func);
        //return target[propKey]
        //this.__func = target[propKey];
        //this.__target = target;
        return this.proxyFunction.bind(sql);
    }
    async proxyFunction (conn:Connection, params?:any[]):Promise<any[]> {
        console.debug("called");
        console.debug(this);
        var sql = this.toString();
        var data = await conn.select(sql, params);
        return data;
    }
}