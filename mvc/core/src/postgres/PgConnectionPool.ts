import {Connection} from '../db/Connection'
import {PoolClient, Client, Pool} from 'pg';
import { ConnectionPool } from '../db/ConnectionPool';
import { PgConnection } from './PgConnection';


export class PgConnectionPool implements ConnectionPool {
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
        var conn = new PgConnection();
        await conn.open();
        return conn;
    }

    public getMiddleware()
    {
        return async function middleware(req, res, next) {
            var conn:Connection = await this.getConnection();
            req["__connection"] = conn;
            try{
                conn.setAutoCommit(false);
                next();
                conn.commit();
            }catch(err){
                console.error(err);
                conn.rollback();
            }
            finally{
                conn.close();
            }
        }.bind(this);
    }
}