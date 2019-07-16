import {Sql} from "./Sql";

export class OrderRepository{
    @Sql("select * from Order where code = ?")
    public findByCode(code:string):any[] {return null};
}