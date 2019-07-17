import {Connection} from '../db/Connection'
import {PoolClient, Client, Pool} from 'pg';

export class PgConnection implements Connection {
    conn: PoolClient;
    public constructor(conn:PoolClient) {
        this.conn = conn;
    }
    public async close(): Promise<void> {
        await this.conn.release();
    }
    public async select(sql: string, params?: any[]): Promise<any[]> {
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