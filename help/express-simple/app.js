const express = require('express');
const morgan = require("morgan");

var app = express();
app.use(morgan("dev"));

app.get('/test/**', function (req, res) {
    console.debug(req.headers);
    res.setHeader('y-authorization', "8888888888");
    res.send('Hello World');
  })
app.listen(8080);
