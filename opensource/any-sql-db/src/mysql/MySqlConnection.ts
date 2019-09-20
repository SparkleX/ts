import {Connection} from '../Connection'
import * as mysql from 'mysql'

export class MySqlConnection extends Connection{

	public constructor(conn?:any) {
		super();
		this.conn = conn;
	}
	public async transaction( callback:()=>void):Promise<void>{
		try {
			await this.beginTransaction();
			await callback();
			await this.commit();
		}catch(err) {
			await this.rollback();
		}
	}
	public open(config:any): void {
		this.conn = mysql.createConnection(config);
	}
	public close(): void {
		if(this.conn.release) {
			this.conn.release();
			return;
		}
		this.conn.end();
	}
	private async beginTransaction():Promise<void> {
		return new Promise((resolve, reject) => {
			this.conn.beginTransaction(function(err) {
				/* istanbul ignore if */
				if (err) {
					reject(err);
					return;
				}
				resolve();
			});
		});		
	}	
	private async commit():Promise<void> {
		return new Promise((resolve, reject) => {
			this.conn.commit(function(err) {
				/* istanbul ignore if */
				if (err) {
					reject(err);
					return;
				}
				resolve();
			});
		});		
	}
	private async rollback():Promise<void> {
		return new Promise((resolve, reject) => {
			this.conn.rollback(function() {
				resolve();
			});
		});
	}	
	public async execute(sql:string, params?:any[]):Promise<{rowAffected:number, rows:any[]}>{
		console.debug(`SQL : ${sql}`);
		return new Promise((resolve, reject) => {
			this.conn.query(sql, params, function (error, results, fields) {
				if (error){
					reject(error);
					return;
				}
				resolve({rowAffected:0, rows:results});
			});		
		});
	}
}