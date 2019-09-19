import {Connection} from '../../src/Connection'
import {MySqlConnection} from '../../src/mysql/MySqlConnection'
//import * as chai from 'chai'
import { expect } from 'chai'
//import * as chaiAsPromised from "chai-as-promised"
//chai.use(chaiAsPromised);
//import { suite, test, slow, timeout } from "mocha";
import {} from 'mocha';
//var expect = chai.expect;
describe('Main Test', () => {
    before(function() {
        console.log('before');
    });
    after(function() {
        console.log('after');
    });
    beforeEach(function() {
        console.log('beforeEach');
    });
    afterEach(function() {
        console.log('afterEach');
    });    
    describe('Test1', () => {
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
        it('Success Sample', async() => {
			const {rowAffected, rows} = await conn.execute('select * from test');
			console.info(JSON.stringify(rows));
		});
        it('Query Fail', async() => {
			await expect(conn.execute('select *1 from test')).to.be.rejected;
		/*	try {
				await conn.execute('select *1 from test');
			  } catch (err) {
			  }		*/	
			
		});	
		after(function() {
			conn.close();
		});			
	});

    describe('Test Transaction', () => {
        it('Success Sample', async() => {
			var conn = new MySqlConnection();
			expect(() => conn.beginTrans()).to.throw();
          
        });
	});	
       describe('Test Transaction', () => {
        it('Success Sample', async() => {
			var conn = new MySqlConnection();
			expect(() => conn.commit()).to.throw();
        });
    });	
	describe('Test Transaction', () => {
		it('Success Sample', async() => {
			var conn = new MySqlConnection();
			expect(() => conn.rollback()).to.throw();
				
		});
	});	

});