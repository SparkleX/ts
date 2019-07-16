import {HttpServer} from './server/HttpServer';
/*import {ClassB,ClassA} from '../../core';

var classA = new ClassA();
classA.test();

console.debug(ClassB);*/


const mainServer = new HttpServer();
mainServer.start(3000);