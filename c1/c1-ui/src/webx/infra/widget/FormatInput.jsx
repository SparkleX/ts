import React from "react";

export class FormatInput extends React.Component {
	constructor(props) {
		super(props);
	}
	
  	render() {
		let uid = this.props.uid;
		let root = this.props.dataRoot;
		let bind = this.props.dataBind;
		return  <input id={uid} name={uid} defaultValue={root.state[bind]} onBlur={this.onBlur.bind(this)} />;

	}
	onBlur() {
		var data = {};
		data[this.props.dataBind] = event.target.value;
		this.props.dataRoot.setState(data);
	}
}
