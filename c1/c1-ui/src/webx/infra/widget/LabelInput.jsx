import React from "react";
import {FormatInput} from "./FormatInput"

export class LabelInput extends React.Component {
	constructor(props) {
		super(props);
	}
	
  	render() {
		let uid = this.props.uid;
		let label = this.props.label;
		let value = this.props.value;
		return  <div>
				<label htmlFor={uid}>{label}</label>
				<br/>
				<FormatInput id={uid} name={uid} 
				dataRoot={this.props.dataRoot}
				dataBind={this.props.dataBind}/></div>;

	}

}
