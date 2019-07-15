import { injectable, inject } from "inversify";
//import { StockInterface } from "./StockInterface";

@injectable()
export class StockService /*implements StockInterface*/ {
 
    public isItemExists(itemId:Number):boolean {
        console.log("should not be here")
        return false;
    }    
}