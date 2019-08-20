const express = require('express');
const morgan = require("morgan");
const compression = require("compression");
const proxy = require('http-proxy-middleware')
const session = require('express-session')

var app = express();

app.use(session({ secret: 'keyboard cat'}))
app.use(morgan("dev"));
app.use(compression());

//app.use('/auth', proxy({ target: 'http://localhost:9901', changeOrigin: true , onProxyRes: onProxyRes}));
//app.use('/tcli', proxy({ target: 'http://localhost:9902', changeOrigin: true , onProxyReq: onProxyReq}));
//app.use('/webx', proxy({ target: 'http://localhost:8080', changeOrigin: true }));

var proxy1 = proxy({ target: 'http://localhost:3001', changeOrigin: true});
var proxy2 = proxy({ target: 'http://localhost:3002', changeOrigin: true});

var proxies = [proxy1, proxy2, proxy2];
var proxyCount = [0, 0, 0];

var endProxy = function(chunk, encoding) {
    this(chunk, encoding);
    console.log('end');
}
var i = 0;
app.use('/', function (req, res, next) {
    //res.end = endProxy.bind(res);
    res.on ('finish', function () {
        console.debug('end');
        proxyCount[i]--;
     });
    i++;
    i=i%3;
    proxyProc = proxies[i];
    proxyCount[i]++;
    proxyProc(req, res, next);
    console.debug(proxyCount[i]);
});

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
  app.listen(3000);

