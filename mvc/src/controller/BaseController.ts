import { Request, Response, NextFunction } from 'express'
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { PgSql} from '../core/db/PgSql'


export class BaseController {
    db:PgSql;
    constructor() {
        this.db = new PgSql();
    }

    protected async get(req: Request, res: Response): Promise<void> {
        try {
        var table = this.getTableName();
        var data = await this.db.select(`SELECT * FROM ${table} WHERE id = $1`, req.params.id);
        res.status(200).json(data);
        }catch(error) {
            res.status(500).end(error.message);
            console.debug(error);
        }
    }

    protected async search(req: Request, res: Response): Promise<void> {
        var data = await this.db.select("SELECT * from test.test");
        res.status(200).json(data);
    }
 
    protected async create(req: Request, res: Response): Promise<void> {
        res.status(200).json({msg: 'add_called'});
    }
 
    protected async update(req: Request, res: Response): Promise<void> {
        res.status(200).json({msg: 'update_called'});
    }
 
    protected async delete(req: Request, res: Response): Promise<void> {
        try {
        var table = this.getTableName();
        await this.db.delete(table, req.params.id );
        res.status(200).end();
        }
        catch(error) {
            res.status(500).end(error.message);
            console.debug(error);
        }
    }    

    protected getTableName() {
        return this.constructor.name.substr(0,4);        
    }
}