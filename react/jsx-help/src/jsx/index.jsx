import React from "react";
import ReactDOM from "react-dom";
class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { liked: false };
	}
  	render() {
		if (this.state.liked) {
			return 'You liked this.';
		}
		return <button onClick={this.buttonClicked.bind(this)} >Like</button>;
	}
	buttonClicked() {
		console.debug("123");
		this.setState({ liked: true });
	}
}

const domContainer = document.querySelector('#container');
ReactDOM.render(<LikeButton/>, domContainer);