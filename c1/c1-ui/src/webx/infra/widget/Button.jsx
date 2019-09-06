import React from "react";
import ReactDOM from "react-dom";

export class Button extends React.Component {
	constructor(props) {
		super(props);
	}
  	render() {
		var onClick = this.props.onClick;
		var label = this.props.label
		return <button onClick={onClick} >{label}</button>;
	}
}
