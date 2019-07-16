import {Connection} from '../db/Connection'
import {PoolClient, Client, Pool} from 'pg';
import { PgConnection } from './PgConnection';


export class PgConnectionPool {
    pool:Pool;
    public constructor(){
        this.pool = new Pool({
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: '1234',
            database:'postgres',
            max:20
          });
    }

    public async getConnection() :Promise<Connection> {
        var conn = new PgConnection();
        await conn.open();
        return conn;
    }
}