import { container } from "../src/InversifyConfig";
import { Types } from "../src/Types";
import {mock, instance,verify } from "ts-mockito"
import {OrderService} from '../src/OrderService'
import {StockService} from '../src/StockService'
//import { StockInterface } from "../src/StockInterface";


let mockedStock:StockService = mock(StockService);
let stockService:StockService = instance(mockedStock);

container.rebind<StockService>(Types.StockInterface).toConstantValue(stockService);
const order = container.get<OrderService>(Types.OrderInterface);

order.create();

verify(mockedStock.isItemExists(100)).called();


//https://www.toptal.com/typescript/dependency-injection-discord-bot-tutorial