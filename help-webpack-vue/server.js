const express = require('express');
var app = express()
app.use(express.static('dist'));
app.listen(3000);
console.info("Server running on port:3000");