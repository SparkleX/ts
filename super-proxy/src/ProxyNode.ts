import {Express, RequestHandler} from 'express'

export class ProxyNode {
	constructor() {
		
	}
	refCount:number;
	proxy:RequestHandler ;
}