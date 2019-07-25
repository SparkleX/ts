const express = require('express');
const morgan = require("morgan");
const compression = require("compression");
const proxy = require('http-proxy-middleware')
const session = require('express-session')

var app = express()

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(morgan("dev"));
app.use(compression());
app.use(express.static('public'));

app.use('/auth', proxy({ target: 'http://localhost:9901', changeOrigin: true , onProxyRes: onProxyRes}));
app.use('/tcli', proxy({ target: 'http://localhost:9902', changeOrigin: true , onProxyReq: onProxyReq}));
app.use('/webx', proxy({ target: 'http://localhost:8080', changeOrigin: true }));

app.listen(3000);
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
