var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {
  db.run('CREATE TABLE "lorem" (info TEXT)');
 
  var stmt = db.prepare('INSERT INTO "lOrem" VALUES (?)');
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  db.each("SELECT * FROM lorem", function(err, row) {
      console.log(row);
  });
});
 
db.close();