var Validator = require('jsonschema').Validator;
var fs = require('fs');

var v = new Validator();


 
var schema = fs.readFileSync('table-schema.json', 'utf8');
var content = fs.readFileSync('ORDR.json', 'utf8');

console.log(v.validate(JSON.parse(content), JSON.parse(schema)).errors);