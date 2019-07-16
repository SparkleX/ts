export interface Connection {
    execute(sql:string, params?:any[]):Promise<void>
    select(sql:string, params?:any[]):Promise<any[]>
    open():Promise<void>;
    close():Promise<void>;
    select(sql: string, params?: any[]): Promise<any>;
    execute(sql: string, params?: any[]): Promise<void>;
    setAutoCommit(on:boolean): Promise<void>;
    commit(): Promise<void>;
    rollback(): Promise<void>;
}