import {IMain, IDatabase} from 'pg-promise';

import * as pgPromise from 'pg-promise';
import {SqlAccess} from './SqlAccess';



const pgp:IMain = pgPromise({
    // Initialization Options
});

const cn:string = 'postgres://postgres:1234@localhost:5432/postgres';
const db:IDatabase<any> = pgp(cn);

export class PgSql implements SqlAccess{
    public async select(sql: string) {
        let data = await db.any(sql).catch(function (error) {
            console.log('ERROR:', error)
          });
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