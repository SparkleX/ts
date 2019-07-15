import * as sqlite  from "sqlite3"
import {Database, sqlite3}  from "sqlite3"

var sqlite3:sqlite3 = sqlite.verbose();

export class SqliteConnection {
    db:Database;
    public constructor () {
    }
    public connect() {
        this.db = new sqlite3.Database(':memory:');
    }

    public async execute(sql:string, param?:any[]):Promise<any> {
        console.log(sql);
        var that = this;
        var promise:Promise<any> = new Promise<any>((resolve, reject)=>{
           that.db.run(sql, param, (err:Error,result:sqlite.RunResult) => {
               if(err) {
                   console.error(err);
               }
               console.log(result);
                resolve(result);
           });
        });
        return promise;
    }

    public async select(sql:string, param?:any[]):Promise<any> {
        console.log(sql);
        var that = this;
        var promise:Promise<any> = new Promise<any>((resolve, reject)=>{
           that.db.all(sql, param, (err:Error, rows:any[]) => {
               if(err) {
                   console.error(err);
               }
                resolve(rows);
           });
        });
        return promise;
    }
}