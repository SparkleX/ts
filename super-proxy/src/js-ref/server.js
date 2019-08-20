const express = require('express');
const morgan = require("morgan");

var app1 = express();
app1.use(morgan("dev"));
app1.get('/', function (req, res) {
    var buf = '';
   /* for(var i = 0;i<10000000;i++) {
        buf+=i;
    }*/
    res.send('Server 3001' + buf);
 });
app1.listen(3001);


var app2 = express();
app2.use(morgan("dev"));
app2.get('/', function (req, res) {
    res.send('Server 3002');
 });
app2.listen(3002);