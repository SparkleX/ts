import {DataSource, Connection, MySqlDataSource} from "any-sql-db";
//import {DdlUtil} from "any-sql-crud";
import * as express from "express"

console.debug = function(){};
//app.use(express.static('dist'));

init();
async function init() {
	var config  ={
		connectionLimit : 64,
		host            : 'localhost',
		user            : 'root',
		password        : 'password',
		database        : 'test'
	  };
	var dataSource:DataSource = new MySqlDataSource(config);	
	//await DdlUtil.createTables();
	var app = express();

	app.get('/', function (req, res) {
		dataSource.pool(async function (conn:Connection) {
			conn.transaction(async ()=>{ 
				
				var data = await conn.execute("select * from test");
				res.send(JSON.stringify(data.rows))
			});
		})	
	})	
	app.listen(3000);
	console.info("Server running on port:3000");	
}