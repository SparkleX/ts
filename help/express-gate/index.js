const express = require('express');
const morgan = require("morgan");
const compression = require("compression");
const proxy = require('http-proxy-middleware')
const session = require('express-session')
const spdy = require('spdy')
const path = require('path')
const fs = require('fs')

var app = express()

app.use(session({ secret: 'keyboard cat'}))
app.use(morgan("dev"));
app.use(compression());
app.use(express.static('public'));

app.use('/auth', proxy({ target: 'http://localhost:9901', changeOrigin: true , onProxyRes: onProxyRes}));
app.use('/tcli', proxy({ target: 'http://localhost:9902', changeOrigin: true , onProxyReq: onProxyReq}));
app.use('/webx', proxy({ target: 'http://localhost:8080', changeOrigin: true }));

//app.listen(3000);
function onProxyReq(proxyReq, req, res) {
	if(req.session.jwt) {
		proxyReq.setHeader('authorization', req.session.jwt);
	}
  }
function onProxyRes(proxyRes, req, res) {
	const jwtHeader = 'y-authorization';
	let auth = proxyRes.headers[jwtHeader];
	delete proxyRes.headers[jwtHeader];
	if(auth) {
		req.session.jwt = auth;
	}
  }



const options = {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert:  fs.readFileSync(__dirname + '/server.crt')
};
const port = 3000;
spdy.createServer(options, app)
	.listen(port, (error) => {
	if (error) {
		console.error(error);
		return process.exit(1);
    } else {
		console.log('Listening on port: ' + port + '.');
    }
  });