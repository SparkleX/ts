import {Connection} from "./Connection"

export abstract class DataSource {
	 public abstract getConnection():Connection;
}