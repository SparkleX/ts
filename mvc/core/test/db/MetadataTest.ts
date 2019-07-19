import {describe,it} from "mocha"
import {expect} from 'chai';
import {mock, instance,verify,deepEqual, when} from "ts-mockito"
import { Order } from "./Order";

describe('Main Test', () => {
     it('Simple', async () => {
         var a = new Order ();
         expect("[id]").to.equal(Reflect.getMetadata("column:name", a,"id"));
         expect("[Order]").to.equal(Reflect.getMetadata("table:name", a));
         
        
    })
});