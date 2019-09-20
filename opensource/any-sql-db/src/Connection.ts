export abstract class Connection {
	protected conn:any;
	public abstract open(config:any):void;
	public abstract close():void;
	public abstract async transaction( callback:()=>void):Promise<void>;
	public abstract async execute(sql:string, params?:any[]):Promise<{rowAffected:number, rows:any[]}>;
};