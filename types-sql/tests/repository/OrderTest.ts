import { OrderRepository } from "./OrderRepository";
import { RepositoryContext } from "../../src/repository/RepositoryContext";
import { Order } from "./Order";
import { Connection } from "../../src/repository/Connection";



var conn = new Connection();
var context:RepositoryContext = new RepositoryContext(conn);
var orderRepo = context.newRepository(OrderRepository);
orderRepo.findByKey(1);
orderRepo.findByCode("123");