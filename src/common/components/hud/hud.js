import React, { Component } from 'react';

if (process.env.BROWSER) {
	require('./hud.scss')
}

export class HUD extends Component {
	render() {
		const {grandtotal} = this.props

		return (
			<div id="hud">
				<p className="grand-total">${grandtotal.money()}</p>
			</div>
		);
	}
}


export default HUD