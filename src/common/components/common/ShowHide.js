import React, { Component } from 'react';
import classnames from 'classnames'

if (process.env.BROWSER) {
	require('./btn.scss')
}

export class ShowHideComp extends Component {


	render() {

		const { dispatchToggle, on, off } = this.props
		const css = classnames( 'btn' )
		const label = this.props.defaultstate ? this.props.off : this.props.on
		return (
			<div 
				className={css}
				onClick={dispatchToggle}
				>
				<div className="highlight"></div>
				<div className="label">{label}</div>
				
			</div>
		);
	}
}


export default ShowHideComp