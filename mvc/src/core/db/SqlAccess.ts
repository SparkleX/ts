export interface SqlAccess {
    select(sql:string, p?:any):any;
    insert(data:any):void;
    update(data:any):void;
    delete(table:string, id:any):void;

}