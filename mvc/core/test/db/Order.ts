import { Table,Column } from "../../src/db/Metadata";

@Table("[Order]")
export class Order {
    @Column("[id]")
    public id:Number;
}