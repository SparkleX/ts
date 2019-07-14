interface IBookLibrary {
  getBook (bookName: string) :string;
}

class MyImpl implements IBookLibrary {
   public getBook (bookName: string) :string {
     console.debug(bookName);
    return "1";
    
  }
}

class MyProxy implements ProxyHandler<IBookLibrary> {
  construct? (target: IBookLibrary, argArray: any, newTarget?: any): object{
    console.debug('construct');
    var impl = new MyImpl();
    return new Proxy(impl, this);
  }

  apply? (target: IBookLibrary, thisArg: any, argArray?: any): any{
      console.debug('apply');
    // expected output: "Calculate sum: 1,2"

    return target.getBook("d");
  }
}
var impl = new MyImpl();
var proxy = new MyProxy();
var p = new Proxy(impl, proxy);
p.getBook("123");

