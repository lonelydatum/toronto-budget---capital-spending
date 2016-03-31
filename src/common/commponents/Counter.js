import React, { Component } from 'react'


if (process.env.BROWSER) {
  require('./Counter.scss');
}

class comp extends Component {
	constructor(){
		super()
		this.state = {counter:0}
	}

	onClicked(){
		this.setState({counter:this.state.counter+1})
	}

	render() {
		return (
			<div className="counter">
				<h1>{this.state.counter}</h1>
				<button onClick={this.onClicked.bind(this)}>Increase Counter++</button>
			</div>
		);
	}
}

export default comp