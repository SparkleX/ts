import {Client, Pool} from 'pg';

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database:'postgres',
    max:20
  });

const cn:string = 'postgres://postgres:1234@localhost:5432/postgres';

 async function select(sql: string, p?:any[]):Promise<any[]>  {
    var client = await pool.connect();
    let rt = await client.query(sql, p);
    client.release();
    return rt.rows;
}

async function test()
{
    var data = await select("select * from test");
    console.debug(data);
}

test();