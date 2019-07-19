import hello from './hello';
import { expect } from 'chai';
//import { suite, test, slow, timeout } from "mocha";

// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Main Test', () => {
    before(function() {
        console.log('before');
    });
    after(function() {
        console.log('after');
    });
    beforeEach(function() {
        console.log('beforeEach');
    });
    afterEach(function() {
        console.log('afterEach');
    });    
    describe('Test1', () => {
        it('Success Sample', () => {
            const result = hello();
            expect(result).to.equal('Hello World!');
            
        });
    });
    describe('Test2', () => {
        it('Fail Sample', () => {
            const result = hello();
            expect(result).not.equal('Hello World!');
        });
    });
});