import {Column} from '../core/metadata/Column'
import {Table} from '../core/metadata/Table'

@Table
export class DoOCRD {
    @Column
    id: number;
    @Column
    bpCode: string;
    @Column
    bpName: string;
}