import {Connection} from '../db/Connection'
import {Pool} from 'pg';
import {PgConnection} from './PgConnection';


export class PgConnectionPool {
    pool:Pool;
    public constructor(){
        this.pool = new Pool({
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: '1234',
            database:'test',
            max:20
          });
    }

    public async getConnection() :Promise<Connection> {
        var rawConn = await this.pool.connect();
        var conn = new PgConnection(rawConn);
        return conn;
    }
}