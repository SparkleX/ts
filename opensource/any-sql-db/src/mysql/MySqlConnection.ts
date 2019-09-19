import {Connection} from '../Connection'
import * as mysql from 'mysql'

export class MySqlConnection extends Connection{
	public beginTrans(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	public commit(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	public rollback(): Promise<void> {
		throw new Error("Method not implemented.");
	}
	public open(config:any): void {
		this.connection = mysql.createConnection(config);
	}
	public close(): void {
		this.connection.end();
	}
	public async execute(sql:string, params?:[]):Promise<{rowAffected:number, rows:[]}>{
		return new Promise((resolve, reject) => {
			this.connection.query(sql, function (error, results, fields) {
				if (error){
					reject(error);
					return;
				}
				resolve({rowAffected:0, rows:results});
				//console.log('The solution is: ', results[0].solution);
			});		
		});
	}
}