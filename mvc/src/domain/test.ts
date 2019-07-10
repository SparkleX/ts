
import {DoOCRD} from './DoOCRD'


var a = new DoOCRD();
a.id = 100;
a['test'] = 202;
var b = new DoOCRD();
b.id = 199;
console.debug(a['test']);