import React from "react";
import {FormatInput} from "./FormatInput"

export class LabelInput extends React.Component {
	constructor(props) {
		super(props);
		
	}

  	render() {
		let uid = this.props.uid;
		let label = this.props.label;
		return  <div>
				<label htmlFor={uid}>{label}</label>
				<br/>
				<FormatInput id={uid} name={uid} value={this.props.value} root={this.props.root}></FormatInput></div>;
				/*dataRoot={this.props.dataRoot}
				dataBind={this.props.dataBind}/>*/

	}

}
