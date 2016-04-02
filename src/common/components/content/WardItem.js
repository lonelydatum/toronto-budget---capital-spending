import React from 'react';
import classnames from 'classnames'

import ShowHide from '../common/ShowHide'
import {ABC} from '../../util/GA'

if (process.env.BROWSER) {
	require('./wardItem.scss')
}

export class WardItemContent extends React.Component {

	constructor(){
		super()
		this.state = {open:false}
	}

	

	componentDidUpdate(p, s) {		
		if(!this.props.isActive && this.state.open){
			this.setState({open:false})
		}
	}

	onClickMoreInfo(){
		this.setState({open:!this.state.open})
		this.props.dispatchMoreInfo(!this.state.open)
		this.props.dispatchShow()
		ABC('ward-item-moreinfo', this.props.ward.name, this.props.ward.id)
	}

	

	render() {
		
		const {ward, dispatchToggle, percent, isActive} = this.props
		const wardStyle = classnames({wardItem:true, hide:!ward.show, selected:isActive})
		const percentCSS = percent * 98
		let moreInfoLabel = this.state.open ? "-" : "+"
		
		return (
			<li 
				className={wardStyle}
				style={{order:this.props.index}}
			>	
				
				<div 
					className="more-info" 					
					onClick={this.onClickMoreInfo.bind(this)}>										
					<div className="bar" style={{width:percentCSS+'%'}}></div>
					<div className="text">
						<div className="ward-name-id">
							<div className="name">{ward.name}</div>
							<div className="id">WARD {ward.id}</div>
						</div>											
						<div className="money"> {this.props.total.money()}</div>
					</div>
				</div>		
				
				<ShowHide defaultstate={ward.show} dispatchToggle={dispatchToggle} on="SHOW" off="HIDE" />		
				

				<div className="selected"></div>
			</li>
		);
	}
}


export default WardItemContent

