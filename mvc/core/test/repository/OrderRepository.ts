import {Sql} from "../../src/repository/Sql";
import { BaseRepository } from "../../src/repository/BaseRepository";
import {Order} from "./Order"

export class OrderRepository extends BaseRepository<Order, Number>{
    @Sql("select * from Order where code = ?")
    public findByCode(code:string):Promise<Order[]> {return null};
}