import {Sql} from "../../src/db/Metadata";
import { BaseRepository } from "../../src/repository/BaseRepository";
import {Order} from "./Order"

export class OrderRepository extends BaseRepository<Order, Number>{
    @Sql("select * from Order where code = ?")
    public async findByCode(code:string):Promise<Order[]> {return null};
}