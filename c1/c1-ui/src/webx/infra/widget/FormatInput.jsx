import React from "react";

export class FormatInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(props.root);
	}
	
  	render() {
		return  <input id={this.props.uid} 
			name={this.props.uid} 
			value={this.props.value} 
			onChange={this.handleChange} 
			/>;

	}

	handleChange(event) {
		this.setState({"CardCode": event.target.value});
	}
	/*onBlur={this.onBlur.bind(this)} 
	onBlur() {
		var data = {};
		data[this.props.dataBind] = event.target.value;
		this.props.dataRoot.setState(data);
	}*/
}
