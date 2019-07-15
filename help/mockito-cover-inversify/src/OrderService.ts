import { StockService } from "./StockService";
import { Types } from "./Types";
import { injectable, inject } from "inversify";



@injectable()
export class OrderService{
    stockService: StockService;
    public constructor(
	    @inject(Types.StockInterface) stockService: StockService
    ) {
        this.stockService = stockService;
    }
    
    public create():void {
        this.stockService.isItemExists(100);
    }
}