import {DetailController} from "../infra/controller/Detail.controller.js"

export class SampleController  extends DetailController {
	constructor() {
		super();
	}

	onAdd(data) {
		//super.onAdd();
		alert('SampleController.Add');
		alert(JSON.stringify(data));
	}
};