import {IMain, IDatabase} from 'pg-promise';

import * as pgPromise from 'pg-promise';
import {SqlAccess} from './SqlAccess';

/////////////////
import {Client, Pool} from 'pg';
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database:'test',
    max:20
  });
//const client = new Client();


const cn:string = 'postgres://postgres:1234@localhost:5432/postgres';



/*const schema = 'test';

const initOptions = {
   // poolSize: 50,
    connect: (client:any, dc:any, isFresh:any) => {
        //if(isFresh) {
            client.query(`SET search_path TO ${schema}`);
        //}
    }
};

const pgp:IMain = pgPromise(initOptions);*/

export class PgSql implements SqlAccess{
    public constructor() {
       // this.conn = pgp(cn);
       
    }
    conn : IDatabase<any>;
    public async select(sql: string, p?:any[]):Promise<any[]>  {
        var client = await pool.connect();
        let rt = await client.query(sql, [1]);
       // let rt = await this.conn.task(t=>this.select1(t, sql,p));
        client.release();
        return rt.rows;
    }
    public async select1(tx: any, sql: string, p?:any):Promise<any[]>  {
        let data = await tx.any(sql, p);
        return data;
    }

    public insert(data: any) {
    }
    public update(data: any) {
    }
    public delete(table: string, id: any) {
    }
    public async close():Promise<void>  {
       // await this.conn.$pool.end();
    }
}