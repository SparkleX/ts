var express = require("express");
var redis = require("redis");
var session = require("express-session");
var redisStore = require("connect-redis")(session);
//var bodyParser = require('body-parser');
var client = redis.createClient();

var app = express();
//app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);

app.use(
  session({
    secret: "top",
    // create new redis store.
    store: new redisStore({
      host: "localhost",
      port: 6379,
      client: client,
      ttl: 260
    }),
    saveUninitialized: false,
    resave: false
  })
);
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
app.get("/newSession", function(req, res) {
  console.log("1");
  req.session.key = "test";
  console.log("2");
  res.end("done");
});
app.get("/getSession", function(req, res) {
  res.end(req.session.key);
});
app.get("/delSession", function(req, res) {
  req.session.destroy(function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.end("session deleted");
});

app.listen(3000, function() {
  console.log("App Started on PORT 3000");
});
