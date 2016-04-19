import React, { Component } from 'react';

// if (process.env.BROWSER) {
// 	require('./exploreBtn.scss')
// }

export default class ExploreBtn extends Component {
	render() {
		return (
			<div 
				className={'btn selected explore'}
				onClick={this.props.onExplore}
				>
				<div className="highlight"></div>
				<div className="label">START EXPLORING</div>						
			</div>
		);
	}
}
