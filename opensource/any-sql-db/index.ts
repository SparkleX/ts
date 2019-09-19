import * as mysql from 'mysql';
/*
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'test'
});

connection.connect();


connection.beginTransaction(function(err) {
	if (err) { 
		throw err; 
	}
	connection.query('select * from test', function (error, results, fields) {
		if (error){
			 throw error;
		}
		console.log('The solution is: ', results);
		connection.commit(function(err) {
			if (err) {
			  return connection.rollback(function() {
				throw err;
			  });
			}
			console.log('success!');
			connection.end();
		  });		
	});

});*/

//connection.end();