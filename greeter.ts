class ClassA {
    name :string ;
    constructor(name: string) { 
        this.name = name; 
    }
    test() {
        console.debug(this.name);
    }
}

class ClassB extends ClassA {
    id: number;
    constructor(id: number, name: string) { 
        super(name);
        this.id = id;
        
    }
    test() {
        super.test();
        console.debug("ClassB Test");
    }
}


var a = new ClassB(1, "Mike");
a.test();