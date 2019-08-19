const Koa = require('koa');
const Router = require('koa-router');
const proxy = require('http-proxy-middleware')
const logger = require('koa-logger')
const c2k = require('koa2-connect')
const session = require('koa-session');
const session = require('express-session')

const CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    autoCommit: true, 
    overwrite: true, 
    httpOnly: true, 
    signed: true, 
    rolling: false, 
    renew: false
  };
  


const app = new Koa();
const router = new Router();
app.use(session(CONFIG, app));

app.use(logger());
router.all('/test/*', c2k(
    proxy({ target: 'http://localhost:8080', changeOrigin: true , 
    onProxyRes: onProxyRes,
    onProxyReq: onProxyReq
})
    ));


/*app.use(ctx => {
  ctx.body = 'Hello Koa';
});*/
function onProxyReq(proxyReq, req, res) {
	/*if(req.session.jwt) {
		proxyReq.setHeader('authorization', req.session.jwt);
    }*/
    proxyReq.setHeader('authorization', "----------");

  }
function onProxyRes(proxyRes, req, res) {
	const jwtHeader = 'y-authorization';
    let auth = proxyRes.headers[jwtHeader];
    console.debug(auth);
	delete proxyRes.headers[jwtHeader];
	if(auth) {
		req.session.jwt = auth;
    }
  }
app.use(router.routes());

app.listen(3000);
