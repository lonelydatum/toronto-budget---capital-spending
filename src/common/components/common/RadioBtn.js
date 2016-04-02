import React, { Component } from 'react';
import classnames from 'classnames'

export class RadioBtn extends Component {
	render() {
		
		const {onClicked, cssClass, id} = this.props
		return (
			<div  className={cssClass} onClick={()=>{onClicked(id)}}>
				<div className="highlight"></div>
				<div className="label">{this.props.children}</div>
			</div>
		);
	}
}


export default RadioBtn