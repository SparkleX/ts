const express = require('express');
const morgan = require("morgan");


var app = express()

app.use(morgan("dev"));
app.use(express.static('public'));

app.listen(3002);