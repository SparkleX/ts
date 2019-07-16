import {createNamespace, getNamespace, Namespace} from 'cls-hooked';
import {Connection} from './Connection'

var session = createNamespace('session-namespace');
var sessionRead = getNamespace('session-namespace');
  
export class DbContext{
    public static getConnection():Connection {
        return sessionRead.get("db");
    }
    public static getSessionWrite():Namespace {
        return session;
    }
}
