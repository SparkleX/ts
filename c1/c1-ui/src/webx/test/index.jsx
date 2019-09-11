import React from "react";
import ReactDOM from "react-dom";
import {LabelInput} from "../infra/widget/LabelInput.jsx"
import {Button} from "../infra/widget/Button.jsx"
import {DetailView, BaseView} from "../infra/controller/Detail.view.jsx"
import {SampleController} from "./index.controller"



  
class Sample extends DetailView{//React.Component {
	
	constructor(props) {
		super(props);
		this.state = { CardCode: "C001", CardName:"BP1" };
		this.controller = new SampleController();
		this.handleChange = this.handleChange.bind(this);
	}
	
	onClickAdd() {
		alert(JSON.stringify(this.state));
		this.controller.onAdd(this.state);
	}
	render2() {
		return <div>123</div>
	}
	handleChange(event) {
		this.setState({"CardCode": event.target.value});
	}
	renderContent() {
		return <div><LabelInput uid="id1" label="Business Partner Code" dataFormat="OCRD.CardCode" value={this.state.CardCode} root={this}/>
				<LabelInput uid="id2" label="Business Partner Name" dataFormat="OCRD.CardName" value={this.state.CardName} root={this}/>
				<Button label = "Save" onClick={this.onClickAdd.bind(this)}></Button>
				<Button label = "SetValue" onClick={this.onSetValue.bind(this)}></Button>
				<Button label = "GetValue" onClick={this.onGetValue.bind(this)}></Button>

				</div>;
	}
	onSetValue() {
		this.setState({CardCode: "100"});
	}	
	onGetValue() {
		alert(this.state.CardCode);
	}	
	/*render() {
		var child = super.renderContent();
		return <DetailView>
				{child}
				<LabelInput uid="id1" label="Business Partner Code" dataFormat="OCRD.CardCode" dataRoot={this} dataBind="CardCode"/>
				<LabelInput uid="id2" label="Business Partner Name" dataFormat="OCRD.CardName" dataRoot={this} dataBind="CardName"/>
				<input value={this.state.CardCode} />				
				<input onBlur={this.onBlur.bind(this)} 
                   defaultValue={this.state.CardCode} />				
				<Button label = "Save" onClick={this.onClickAdd.bind(this)}></Button>
			</DetailView>;
	}	*/
	onBlur() {
		this.setState({CardCode: event.target.value});
	}

	/*render() {
		if (this.state.liked) {
			return 'You liked this.';
		}
		//return <button onClick={this.buttonClicked.bind(this)} >Like</button>;
		
	}	*/
}

const domContainer = document.querySelector('#container');
ReactDOM.render(<Sample/>, domContainer);