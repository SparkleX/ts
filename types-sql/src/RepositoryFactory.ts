import {getRepositoryMetadata} from "./Sql";

export class RepositoryFactory {

    public static   newRepository<REPO >(c: new () => REPO): REPO {
        var face:REPO = new c();
        var proxyHandler = new MyProxy();
        var p = new Proxy(face, proxyHandler);

        return p;

    }

} 


class MyProxy implements ProxyHandler<any> {
    get? (target: any, propKey:PropertyKey, receiver: any): any{
        console.log(`Reading property "${propKey.toString()}"`);
        console.debug(target.constructor.name);
        var clazz = target.constructor.name;
        var func = propKey.toString();
        var sql = getRepositoryMetadata(clazz, func);
        //return target[propKey]
        //this.__func = target[propKey];
        //this.__target = target;
        return this.proxyFunction.bind(sql);
    }
    proxyFunction ():any {
        console.debug("called");
        console.debug(this);

        return null;
    }
}