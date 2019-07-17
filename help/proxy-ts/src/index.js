
require('ts-node').register();
require('./Main');

/*var ClassImpl = function (){
     this.test = function()  {
        console.debug("test");
    }
  }
  
var ProxyHandler =   function (){
    
    this.get=function(target, propKey) {
        console.log(`Reading property "${propKey}"`)
        //return target[propKey]
        this.__func = target[propKey];
        this.__target = target;
        return this.proxyTest.bind(this);
    }
    this.test= function ()
    {
      console.debug();
    }
    this.proxyTest=function() {
        this.__target.test();
    }
  };
  
  var proxy1 = new Proxy(new ClassImpl(), new ProxyHandler());
  
proxy1.test();  */