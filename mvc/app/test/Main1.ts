import { RepositoryFactory } from "./RepositoryFactory";
import { OrderRepository } from "./OrderRepository";

var repo = RepositoryFactory.newRepository(OrderRepository);

console.debug(repo);
