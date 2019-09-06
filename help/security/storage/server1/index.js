const express = require('express');
const morgan = require("morgan");
const session = require('express-session')


var app = express()

app.use(session({ secret: 'keyboard cat'}))
app.use(morgan("dev"));
app.use(express.static('public'));

app.post("/test", function(req, res) {
	console.debug("/test post");
});
app.get("/test", function(req, res) {
	console.debug("/test get");
	res.send('{"id":1}');
});
app.listen(3001);