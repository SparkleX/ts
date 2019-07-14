import {BaseRepository, Sql} from "../../src/repository";
import { Order } from "./Order";

export class OrderRepository extends BaseRepository<Order, Number>{
    @Sql("select * from Order where code = ?")
    public findByCode(code:string):Order[] {return null};
}