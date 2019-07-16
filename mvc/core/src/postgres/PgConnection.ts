import {Connection} from '../db/Connection'
import {PoolClient, Client, Pool} from 'pg';

var pool:Pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database:'test',
    max:20
  });

export class PgConnection implements Connection {
    conn: PoolClient;
    public constructor() {
    }
    public async open(): Promise<void> {
        this.conn = await pool.connect();
    }
    public async close(): Promise<void> {
        await this.conn.release();
    }
    public async select(sql: string, params?: any[]): Promise<any> {
        let rt = await this.conn.query(sql, params);
        return rt.rows;
       // let rt = await this.conn.task(t=>this.select1(t, sql,p));
    }
    public async query(sql: string, params?: any[]): Promise<any> {
        let rt = await this.conn.query(sql, params);
        return rt;
    }    
    public async execute(sql: string, params?: any[]): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async setAutoCommit(on:boolean): Promise<void> {
        await this.query('begin');
    }
    public async commit(): Promise<void> {
        await this.query('commit');
    }
    public async rollback(): Promise<void> {
        await this.query('rollback');
    }

}