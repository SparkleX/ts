import {DbUtil} from "../../../core"
import {Request} from "express"
import { injectable, inject } from "inversify";
import "reflect-metadata";
import {BaseRepository} from "../../../core"
import {container} from "../config/inversify.config";

@injectable()
export class BaseService<T, REPO extends BaseRepository<T, Number>> {

    repo:REPO;
    constructor(){
        var repoName = this.getTableName() + "Repository";
        //this.repo = container.get<REPO>(serviceName);
        var factory = container.get<REPO>(`Factory<${repoName}>`);
        this.repo = factory(repoName); 
    }
    public async get(req: Request): Promise<T[]> {
        var db = DbUtil.getConnection(req);
        var table = this.getTableName();
        var data:T[] = await db.select(`SELECT * FROM ${table} WHERE id = $1`, [req.params.id]);
        return data;
    }

    protected getTableName() {
        return this.constructor.name.substr(0,4);        
    }
}