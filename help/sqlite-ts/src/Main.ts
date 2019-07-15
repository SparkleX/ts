import * as sqlite  from "sqlite3"
import {Database, sqlite3}  from "sqlite3"
import {SqliteConnection} from "./SqliteConnection"

var sqlite3:sqlite3 = sqlite.verbose();
var db:Database = new sqlite3.Database(':memory:');

var conn = new SqliteConnection();
conn.connect();

async function test() {
  await conn.execute("CREATE TABLE lorem (info TEXT)");

  for (var i = 0; i < 10; i++) {
      await conn.execute('INSERT INTO lorem(info) VALUES (?)',[i]);
  }
  var data = await conn.select("SELECT rowid AS id, info FROM lorem");
  console.log(data);

}
test();
/*db.run("CREATE TABLE lorem (info TEXT)", (result, err)=>{
    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});*/


/*db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");
 
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});
 
db.close();*/