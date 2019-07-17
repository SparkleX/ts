import {Pretend} from "pretend"
import {MyInterface} from "./MyInterface"
var global:any = {};
global['Headers'] = require("isomorphic-fetch");

async function call() {
    var config =Pretend
                    .builder()
                    /*.interceptor(async (chain, request) => {
                        console.log('interceptor 1: request');
                        const response = await chain(request);
                        console.log('interceptor 1: response');
                        return response;
                      });*/
    const client =  config.target(MyInterface, 'https://services.odata.org');
    
    //var result = await client.get();
    const result = await client.get();
    console.debug(result);
  }

  call();