import {Connection} from '../../src/Connection'
import {MySqlConnection} from '../../src/mysql/MySqlConnection'
import { expect,assert} from 'chai'
//import { suite, test, slow, timeout } from "mocha";
import {} from 'mocha';

var config = {
	host     : 'localhost',
	user     : 'root',
	password : 'password',
	database : 'mysql'
}

describe('Main Test', () => {
    before(async function() {
		var conn = new MySqlConnection();
		conn.open(config);
		await conn.execute('drop database if exists test');
		await conn.execute('create database test');
		await conn.execute('use test');
		await conn.execute('create table test(a int not null,b varchar(50) not null, primary key(a))');
		config.database = 'test';
		conn.close();
    });

    describe('Test1', () => {
		var conn = new MySqlConnection();
		before(function() {
			conn.open(config);		
		});		
        it('Query', async() => {
			const {rowAffected, rows} = await conn.execute('select * from test');
		});
        it('Query Fail',  async () =>{
			try {
				await conn.execute('select *1 from test');
			 	assert(false);
			}catch(err) {
				expect(err).to.be.an('error');
			}
		});	
		after(function() {
			conn.close();
		});			
	});

    describe('Test Transaction', () => {
		var conn = new MySqlConnection();
		before(function() {
			const config = {
				host     : 'localhost',
				user     : 'root',
				password : 'password',
				database : 'test'
			  }
			conn.open(config);		
		});			
        it('Success Transaction', async() => {
			await conn.transaction(async function() {
				await conn.execute('insert into test(a,b) values(?,?)', [1,'a'] );
			});   
			var rows = await conn.execute('select * from test'); 
			assert(rows.rows.length==1);
		});
        it('Failed Transaction', async() => {
	
			await conn.execute('delete from test');
			try {
				await conn.transaction(async function() {
					await conn.execute('insert into test(a,b) values(?,?)', [1,'a'] );
					await conn.execute('insert into test(a,b) values(?,?)', [2,'b'] );
					throw new Error();
				});
			}catch(err) {

			}
			var rows = await conn.execute('select * from test');
			assert(rows.rows.length==0);
		});
      /*  it('Failed Commit', async() => {
			try {
				await conn.transaction(async function() {
					await conn.execute('commit');
					assert(false);
				});
			}catch(err) {
				console.debug(err);
			}
		});*/
		after(function() {
			conn.close();
		});			
	});		

});

