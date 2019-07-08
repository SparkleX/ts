import {IMain, IDatabase} from 'pg-promise';
import * as pgPromise from 'pg-promise';



const pgp:IMain = pgPromise({
    // Initialization Options
});

const cn:string = 'postgres://postgres:1234@localhost:5432/postgres';
const db:IDatabase<any> = pgp(cn);

async function test() {
  let data1 = await db.any('SELECT * from test.test').catch(function (error) {
    console.log('ERROR:', error)
  });
  console.log(data1);
}

test();



/*db.any('SELECT * from test.test').then(function (data) {
    console.log(data)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })*/
