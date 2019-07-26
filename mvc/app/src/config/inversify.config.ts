import { Container,interfaces } from "inversify";
import { TYPES } from "./types";
import { OCRDService } from "../service/OCRDService";
import { OCRDRepository } from "../repository/OCRDRepository";
import { RepositoryFactory, RepositoryHandler } from "next-core";
import { makeLoggerMiddleware } from 'inversify-logger-middleware';

var repoClass = {OCRDRepository};

/*function repositoryFactory(context: interfaces.Context) {
    return (name: string) => {
        var repo = RepositoryFactory.newRepository(repoClass[name]);
        return repo;
    };
}*/
class RepoHandlerImpl implements RepositoryHandler {
    execute(sql: string, ...params: any): Promise<any> {
        throw "Should be mocked";
    }
}

let repoHandlerImpl = new RepoHandlerImpl();

const container = new Container();
container.bind<OCRDService>(TYPES.OCRDService).to(OCRDService);
container.bind<OCRDRepository>(TYPES.OCRDRepository).to(OCRDRepository).onActivation( 
    (context, repo) => {
        var proxyRepo = RepositoryFactory.newRepository(OCRDRepository, repoHandlerImpl);
        return proxyRepo;
    }
);
//container.bind<interfaces.Factory<OCRDRepository>>("Factory<OCRDRepository>").toFactory<OCRDRepository>(repositoryFactory);


//let logger = makeLoggerMiddleware();
//container.applyMiddleware(logger);
export { container };