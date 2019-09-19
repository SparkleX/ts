export abstract class Connection {
	protected connection:any;
	public abstract open(config:any):void;
	public abstract close():void;
	public abstract async beginTrans():Promise<void>;
	public abstract async commit():Promise<void>;
	public abstract async rollback():Promise<void>;
	public abstract async execute(sql:string, params:[]):Promise<{rowAffected:number, rows:[]}>;
}