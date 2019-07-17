export interface IBookLibrary {
  getBook (bookName: string) :string;
}

class MyImpl implements IBookLibrary {
  public constructor() {
    console.debug("MyImpl.constructor");
  }
   public getBook (bookName: string) :string {
     console.debug(bookName);
    return "1";
    
  }
}

class MyProxy implements ProxyHandler<any> {
 /* construct? (target: IBookLibrary, argArray: any, newTarget?: any): object{
    console.debug('construct');
    var impl = new MyImpl();
    return new Proxy(impl, this);
  }

  apply? (target: IBookLibrary, thisArg: any, argArray?: any): any{
      console.debug('apply');
    // expected output: "Calculate sum: 1,2"

    return target.getBook("d");
  }*/
  getPrototypeOf? (target: any): object {
    var rt = Object.getPrototypeOf(target);
    console.debug(`getPrototypeOf ${rt}`);
    return rt;
  }
  setPrototypeOf? (target: any, v: any): boolean {
    console.debug('setPrototypeOf');
    return null;
  }
  isExtensible? (target: any): boolean {
    console.debug('isExtensible');
    return null;
  }
  preventExtensions? (target: any): boolean {
    console.debug('preventExtensions');
    return null;
  }
  getOwnPropertyDescriptor? (target: any, p: PropertyKey): PropertyDescriptor | undefined {
    console.debug(`getOwnPropertyDescriptor ${p.toString()}`);
    return Object.getOwnPropertyDescriptor(target, p);
  }
  has? (target: any, p: PropertyKey): boolean {
    console.debug('has');
    return null;
  }
  get? (target: any, p: PropertyKey, receiver: any): any {
    console.debug(`get ${p.toString()}`);
    var a:any = target;
    return a[p];
  }
  set? (target: any, p: PropertyKey, value: any, receiver: any): boolean {
    console.debug('set');
    return null;
  }
  deleteProperty? (target: any, p: PropertyKey): boolean {
    console.debug(`deleteProperty ${p.toString()}`);
    var a:any = target;
    return delete a[p];
  }
  defineProperty? (target: any, p: PropertyKey, attributes: PropertyDescriptor): boolean {
    console.debug('defineProperty');
    return null;
  }
  //Never Here
  enumerate? (target: any): PropertyKey[] {
    console.debug('enumerate');
    return null;
  }
  ownKeys? (target: any): PropertyKey[] {
    var rt = Reflect.ownKeys(target);
    console.debug(`ownKeys ${rt}`);
    return rt
  }
  apply? (target: any, thisArg: any, argArray?: any): any {
    console.debug('apply');
    return null;
  }
  construct? (target: any, argArray: any, newTarget?: any): object {
    console.debug('construct');
    return new target(...argArray);
  }
}


function monster1(disposition:any) {
  this.disposition = disposition;
}

var face:any = {} as IBookLibrary;


face['getBook'] = function () {};


var a:any = new IBookLibrary();


//var impl = new IBookLibrary();
/*var proxy = new MyProxy();

var p:IBookLibrary = new Proxy(face, proxy);

p.getBook("12#");*/
//console.debug(p);

//var a:any = p;
//delete a.a;


