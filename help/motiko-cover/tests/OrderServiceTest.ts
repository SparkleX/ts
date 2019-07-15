import {mock, instance,verify } from "ts-mockito"
import {OrderService} from '../src/OrderService'
import {StockService} from '../src/StockService'

let mockedStock:StockService = mock(StockService);

// Getting instance from mock
let stockService:StockService = instance(mockedStock);

var orderService:OrderService = new OrderService();
orderService.stockService = stockService;

orderService.create();

// Explicit, readable verification
verify(mockedStock.isItemExists(100)).called();



var  test:StockService = new StockService();
test.isItemExists(1);