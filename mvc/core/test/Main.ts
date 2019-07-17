import { OrderRepository } from "./OrderRepository";
import { RepositoryFactory } from "./RepositoryFactory";

var orderRepo = RepositoryFactory.newRepository(OrderRepository);
//orderRepo.findByKey(1);
orderRepo.findByCode("123");