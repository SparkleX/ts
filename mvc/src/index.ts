import {HttpServer} from './server/HttpServer';

const mainServer = new HttpServer();
mainServer.start(3000);