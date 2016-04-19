import React, { Component } from 'react';
import classnames from 'classnames'
import {Analytics} from '../../util/GA.js'

if (process.env.BROWSER) {
	require('./menu.scss')
}


export default class Menu extends Component {


	onClickMenu(){
		this.props.menuToggle()
		Analytics('pages', 'menu-toggle');
	}

	
	render() {
		
		const {isOpen} = this.props;
		const cssIsOpen = classnames({isOpen:isOpen})

		
		const content = isOpen ? "close" : "open";
		return (
			<div id="menu">
				<p className="menu-title menu-btn" onClick={this.onClickMenu.bind(this)}>{content}</p>
				
			</div>
		);
	}
}
