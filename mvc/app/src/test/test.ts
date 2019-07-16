import {Foo} from './Foo'
import {mock, instance,verify }from "ts-mockito"

let mockedFoo:Foo = mock(Foo);

// Getting instance from mock
let foo:Foo = instance(mockedFoo);

// Using instance in source code
foo.getBar(3);
foo.getBar(5);

// Explicit, readable verification
verify(mockedFoo.getBar(2)).called();
verify(mockedFoo.getBar(5)).called();