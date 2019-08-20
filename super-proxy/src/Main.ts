import {Express, RequestHandler} from 'express'
import * as express from 'express'
import * as morgan from 'morgan'
import * as compression from 'compression'
import * as proxy from 'http-proxy-middleware'
import * as session from 'express-session'
import {ProxyNode} from './ProxyNode'

let app:Express = express();

app.use(session({ secret: 'keyboard cat'}))
app.use(morgan("dev"));
app.use(compression());

let proxies:ProxyNode[] = [];

for(let port:number = 3001;port<=3002;port++) {
	let proxyHandler:RequestHandler = proxy({ target: `http://localhost:${port}`, changeOrigin: true,  onProxyRes: onProxyRes, onProxyReq: onProxyReq});
	let proxyNode = new ProxyNode();
	proxyNode.proxy = proxyHandler;
	proxyNode.refCount = 0;
	proxies.push(proxyNode);

}
var i = 0;
app.use('/', function (req, res, next) {
    i++;
	let proxyNode = proxies[i%2];
    res.on ('finish', function () {
        console.debug('end');
        proxyNode.refCount--;
     });
	proxyNode.refCount++;
	proxyNode.proxy(req, res, next);
    console.debug(proxyNode.refCount);
});

function onProxyReq(proxyReq, req, res) {
	/*if(req.session.jwt) {
		proxyReq.setHeader('authorization', req.session.jwt);
	}*/
  }
function onProxyRes(proxyRes, req, res) {
	/*const jwtHeader = 'y-authorization';
	let auth = proxyRes.headers[jwtHeader];
	delete proxyRes.headers[jwtHeader];
	if(auth) {
		req.session.jwt = auth;
	}*/
  }
  app.listen(3000);

