import { StockService } from "./StockService";

export class OrderService {
    stockService: StockService;
    public constructor() {
        this.stockService = new StockService();
    }
    public create():void {
        this.stockService.isItemExists(100);
    }
}