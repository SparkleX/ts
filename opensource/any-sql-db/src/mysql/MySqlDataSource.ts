import {DataSource} from '../DataSource'
import {Connection} from '../Connection'
import {MySqlConnection} from './MySqlConnection'
import * as mysql from 'mysql'

export class MySqlDataSource extends DataSource{
	poolHandle:any;
	public constructor(config:any) {
		super();
		this.poolHandle  = mysql.createPool(config);
	}
	public async pool( callback: (conn:Connection) => void): Promise<void> {
		var conn = await this.getConnection();
		callback(conn);
		conn.close();
	}
	private async getConnection():Promise<Connection> {
		var conn = await new Promise((resolve, reject) => {
			this.poolHandle.getConnection(function(err, connection) {
				if (err) throw err;
				resolve(connection);
			});
		});
		return new MySqlConnection(conn);
	}

}