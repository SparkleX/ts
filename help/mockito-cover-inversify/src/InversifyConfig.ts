import { Container } from "inversify";
import "reflect-metadata";
import { Types } from "./Types";
import { StockService } from "./StockService";
import { OrderService } from "./OrderService";


const container = new Container();
container.bind<StockService>(Types.StockInterface).to(StockService);
container.bind<OrderService>(Types.OrderInterface).to(OrderService);

export { container };