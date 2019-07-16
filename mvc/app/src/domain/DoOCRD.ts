import {Table, Column} from '../../../core'

@Table
export class DoOCRD {
    @Column
    id: number;
    @Column
    bpCode: string;
    @Column
    bpName: string;
}