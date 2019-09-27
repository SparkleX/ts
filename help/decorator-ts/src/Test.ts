import {Table, Column} from './Decorator'

@Table()
export class DoOCRD {
    @Column()
    id: number;
    @Column()
    code: string;
    @Column()
	name: string;
	
	public test(a:number):void {

	}
}