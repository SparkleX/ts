import React,{ Component } from "react";
import {Button} from "../../infra/widget/Button.jsx"
//import PropTypes from 'prop-types';

/*export function DetailView(props) {
	return (<div>
	<div>
	{props.children}
	</div>
	<Button label = "OK" ></Button>
	<Button label = "Cancel"></Button>
	</div>);
}*/

export class BaseView extends Component {
	renderContent() {
		return this.render2();
	}
	render2() {
		return "";
	}
}

export class DetailView extends Component {
	/*static propTypes = {
		children: PropTypes.node,
//		onClick: PropTypes.func,
//		onShake: PropTypes.func
	  }	*/
	constructor(props) {
		super(props);
		this.state = { liked: false };
	}

	onClickAdd() {
		alert('a');
	}
	renderContent() {

	}
	render() {
			//{this.props.children}
		return <div>
				{this.renderContent()}
				<Button label = "OK" onClick={this.onClickAdd.bind(this)}></Button>
				<Button label = "Cancel"></Button>
			</div>;
	}	
}
