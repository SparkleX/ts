/*import {HttpServer} from './server/HttpServer';



const mainServer = new HttpServer();
mainServer.start(3000);*/


import * as bodyParser from 'body-parser';
import { Container } from 'inversify';
import "reflect-metadata";
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';

import {container} from "./config/inversify.config";
import "./controller/OCRDController";

// set up container
/*let container = new Container();

// set up bindings
container.bind<FooService>('FooService').to(FooService);*/

// create server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000);