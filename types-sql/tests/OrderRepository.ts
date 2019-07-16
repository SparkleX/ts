import {Sql} from "../src/Sql";

export class OrderRepository{
    @Sql("select * from Order where code = ?")
    public findByCode(code:string):any[] {return null};
}