import { Request, Response } from 'express'
import { PgConnectionPool} from 'next-core'
import { BaseService } from '../service/BaseService';
import { injectable, inject } from "inversify";
import { TYPES } from '../config/types';
import {controller, httpGet, BaseHttpController, HttpResponseMessage, StringContent} from "inversify-express-utils";

export var pool = new PgConnectionPool();
import {container} from "../config/inversify.config";
import { Transaction } from '../config/Middleware';

@injectable()
export class BaseController<T, SERVICE extends BaseService<T, any>>  extends BaseHttpController{
    
   service:SERVICE;
   public constructor() {
       super();
       var serviceName = this.getTableName() + "Service";
       this.service = container.get<SERVICE>(serviceName);
   }
   
    @httpGet("/:id", Transaction)
    protected async get(req: Request, res: Response): Promise<void> {
        var data:T[] = await this.service.get(req);
        res.status(200).json(data);
    }

    protected async search(req: Request, res: Response): Promise<void> {
        //var data = await db.select("SELECT * from test.test");
        //res.status(200).json(data);
    }
 
    protected async create(req: Request, res: Response): Promise<void> {
        //res.status(200).json({msg: 'add_called'});
    }
 
    protected async update(req: Request, res: Response): Promise<void> {
       // res.status(200).json({msg: 'update_called'});
    }
 
    protected async delete(req: Request, res: Response): Promise<void> {
       /* try {
        var table = this.getTableName();
        await this.db.delete(table, req.params.id );
        res.status(200).end();
        }
        catch(error) {
            res.status(500).end(error.message);
            console.debug(error);
        }*/
    }    

    protected getTableName() {
        return this.constructor.name.substr(0,4);        
    }
}