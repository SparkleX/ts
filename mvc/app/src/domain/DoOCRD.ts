import {Table, Column} from 'next-core'

@Table()
export class DoOCRD {
    @Column()
    id: number;
    @Column()
    code: string;
    @Column()
    name: string;
}