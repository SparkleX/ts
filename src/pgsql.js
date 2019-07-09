var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://postgres:1234@localhost:5432/postgres')

db.any('SELECT * from test.test')
.then(function (data) {
  console.log(data)
})
.catch(function (error) {
  console.log('ERROR:', error)
})