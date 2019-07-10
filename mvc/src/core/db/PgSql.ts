import {IMain, IDatabase} from 'pg-promise';

import * as pgPromise from 'pg-promise';
import {SqlAccess} from './SqlAccess';



const cn:string = 'postgres://postgres:1234@localhost:5432/postgres';



const schema = 'test';

const initOptions = {
    connect: (client:any, dc:any, isFresh:any) => {
        //if(isFresh) {
            client.query(`SET search_path TO ${schema}`);
        //}
    }
};

const pgp:IMain = pgPromise(initOptions);

const db:IDatabase<any> = pgp(cn);

export class PgSql implements SqlAccess{
    public async select(sql: string, p?:any) {
        let data = await db.any(sql, p);
        /*.catch(function (error) {
          //  console.log('ERROR:', error)
            throw error;
          });*/
        return data;
    }
    public insert(data: any): void {
        throw new Error("Method not implemented.");
    }
    public update(data: any): void {
        throw new Error("Method not implemented.");
    }
    public delete(table: string, id: any): void {
        throw new Error("Method not implemented.");
    }
}