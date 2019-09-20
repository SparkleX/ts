import {Connection} from "./Connection"

export abstract class DataSource {
	 public abstract async pool( callback:(conn:Connection)=>void):Promise<void>;
}