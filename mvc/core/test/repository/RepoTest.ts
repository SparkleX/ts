import {RepositoryFactory, RepositoryHandler} from "../../src/repository/RepositoryFactory"
import {expect} from 'chai';
import {mock, instance,verify,deepEqual} from "ts-mockito"

import {OrderRepository} from "./OrderRepository"
import { circularDependencyToException } from "inversify/dts/utils/serialization";

class RepoHandlerImpl implements RepositoryHandler {
    execute(sql: string, ...params: any): Promise<any> {
        throw "Should be mocked";
    }
}

describe('Main Test', () => {
   /* before(function() {
    });
    after(function() {
    });
    beforeEach(function() {
    });
    afterEach(function() {
    });   */ 
    it('Success Sample', () => {

        let mockedHandler:RepoHandlerImpl = mock(RepoHandlerImpl);
        let mockInstance:RepoHandlerImpl = instance(mockedHandler);

        var orderRepository = RepositoryFactory.newRepository(OrderRepository, mockInstance);
        orderRepository.findByCode("1");
        verify(mockedHandler.execute("select * from Order where code = ?",deepEqual(["1"]))).called();
    });
    it('Success Sample', () => {

        let mockedHandler:RepoHandlerImpl = mock(RepoHandlerImpl);
        let mockInstance:RepoHandlerImpl = instance(mockedHandler);

        var orderRepository = RepositoryFactory.newRepository(OrderRepository, mockInstance);
        orderRepository.findByCode("1");
        verify(mockedHandler.execute("select * from Order where code = ?",deepEqual(["1"]))).called();
    });
});