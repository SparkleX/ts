import { Request, Response } from 'express'
import { Connection, PgConnection,ConnectionPool, PgConnectionPool, DbUtil} from '../../../core'


export var pool = new PgConnectionPool();


export class BaseController<T> {
    
    constructor() {
    }

    protected async get(req: Request, res: Response): Promise<void> {
        var db = DbUtil.getConnection(req);
        var table = this.getTableName();
        var data:T[] = await db.select(`SELECT * FROM ${table} WHERE id = $1`, [req.params.id]);
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