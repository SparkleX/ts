import { Request, Response, NextFunction } from 'express'
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core'
import { PgSql} from '../core/db/PgSql'


export class BaseController {
    db:PgSql;
    constructor() {
        this.db = new PgSql();
    }
    protected async get(req: Request, res: Response): Promise<void> {
        var data = await this.db.select("SELECT * from test.test");
        res.status(200).json(data);
    }
}