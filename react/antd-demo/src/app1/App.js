import React, {Component} from 'react';
import './App.css';
import {Button, Input, InputNumber, Table, Divider, Tag} from 'antd';




class App extends Component{
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeText = this.handleChangeText.bind(this);
		this.handleChangeAge = this.handleChangeAge.bind(this);

		
		this.state = {
			value1 : "text",
			value2 : 12345.2,
			lines : [
				{
				  name: 'John Brown',
				  age: 32,
				},
				{
					name: 'John Brown123',
				  age: 42,
				},
				{
				  name: 'Joe Black',
				  age: 32,
				},
			  ]
		};
	}
	render() {
		return (
			<div>
				Name: <Input type="text" value={this.state.value1} onChange={this.handleChangeText} />
				Price: <InputNumber precision={2} value={this.state.value2} onChange={this.handleChange}/>
				<Button onClick={this.handleClick}>Button</Button>
				<Button id="button2">Test</Button>
				<Table columns={[{
									title: 'Name',
									dataIndex: 'name',
									key: 'name',
									render: text => <Input value={text} />,
								},
								{
									title: 'Age',
									dataIndex: 'age',
									key: 'age',
									render: text => <Input value={text} onChange={this.handleChangeAge}/>,
								}
								]} dataSource={this.state.lines} />
			</div>
		);
	}
	handleClick(e) {
		document.getElementById("button2").textContent="123";
		console.debug(this.state);
	}
	handleChange(e) { 
		this.setState({value2: e});
	  }
	handleChangeText(e) { 
		this.setState({value1: e.target.value});
	 }	  
	handleChangeAge(e) { 
		console.debug(e.target);
		//this.setState({age: e.target.value});
		this.state.lines.push({
			name: 'Joe Black',
			age: 32,
		  });
		this.setState({lines: this.state.lines})		  
	 }	  
}

export default App;
