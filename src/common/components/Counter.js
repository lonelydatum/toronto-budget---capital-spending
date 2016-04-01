import React, { Component } from 'react'


if (process.env.BROWSER) {
  require('./Counter.scss');
}

class comp extends Component {
	constructor(){
		super()
	}

	onClicked(){		
		this.props.up()
	}

	render() {
		return (
			<div className="counter">
				<h1>{this.props.counter}</h1>
				<button onClick={this.onClicked.bind(this)}>Increase Counter+</button>
			</div>
		);
	}
}

export default comp