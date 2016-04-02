import React, { Component } from 'react'


if (process.env.BROWSER) {
  require('./Counter.scss');
}

class comp extends Component {
	constructor(){
		super()
	}

	onClicked1(){		
		this.props.increment()
	}

	onClicked2(){		
		this.props.decrement()
	}

	render() {
		return (
			<div className="counter">
				<h1>{this.props.counter}</h1>
				<button onClick={this.onClicked1.bind(this)}>+</button>  
				<button onClick={this.onClicked2.bind(this)}>-</button>
			</div>
		);
	}
}

export default comp