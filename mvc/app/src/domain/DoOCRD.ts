import {Table, Column} from '../../../core'

@Table
export class DoOCRD {
    @Column
    id: number;
    @Column
    code: string;
    @Column
    name: string;
}