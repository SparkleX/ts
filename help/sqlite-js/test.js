var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {
  db.run('CREATE TABLE "AppleStore" (info TEXT)');
 
  var stmt = db.prepare('INSERT INTO applestore VALUES (?)');
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  db.each('SELECT * FROM Applestore', function(err, row) {
      console.log(row);
  });
});
 
db.close();