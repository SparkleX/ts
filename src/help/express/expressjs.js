var express = require('express');
var bodyParser = require('body-parser');
 
var port = 8080
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/service/pushservice/api/v1/usage', api_push);
app.post('/service/{servicename}/api/v1/usage', api_push);
 
app.listen(port, '0.0.0.0',  function() { console.log('Server started on %d', port); })
 
function api_push(req, res) {
    console.log("===================================");
    // console.log("query: " + JSON.stringify(req.query, null, 4));
    // console.log("body : " + JSON.stringify(req.body, null, 4));
 
    // Get query parameter
    var pushId = req.query.pushId;
    console.log("pushId: " + pushId);
 
    // Get path parameternpm
    var servicename = req.params.servicename;
    console.log("servicename: " + servicename);
 
    // Get body parameter if body is a json map
    var accountId = req.body.accountId;
    var timestamp = req.body.timestamp;
    console.log("servicename: " + servicename);
 
    // Response
    res.status(200).end()
    // res.status(202).send({"result": "accept"});
    // res.status(400).send({
    //    "errorCode"     : "ERR1001",
    //    "errorMessage"  : "I meet a problem, thanks"
    // })
}