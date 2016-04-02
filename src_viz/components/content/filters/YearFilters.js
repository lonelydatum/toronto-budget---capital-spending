import React from 'react';
import RadioBtn from '../../common/RadioBtn'

import classnames from 'classnames'
import './yearFilters.scss'

import {Analytics} from '../../../util/GA'

export class YearFilters extends React.Component {
	constructor(){
		super()
		this.yearStarting = 2014
	}

	onSelectedYear(id){
		Analytics('filter', id)
		this.props.dispatchFilter( id, this.props.wards )
	}

	render() {
		const {filter, wards} = this.props		
		const optionList = []
		
		for(var i=this.yearStarting; i<this.yearStarting+10; i++){
			optionList.push(
				<RadioBtn 
					key={i}
					id={i} 
					onClicked={this.onSelectedYear.bind(this)} 
					cssClass={classnames('name', 'btn', {selected:filter===i})}
				>
					{i}
				</RadioBtn>)

				
		}

		optionList.push(<RadioBtn 
					key={'ALL'}
					id='ALL' 
					onClicked={this.onSelectedYear.bind(this)} 
					cssClass={classnames('name', 'btn', {selected:filter==='ALL'})}
				>
					ALL
				</RadioBtn>)
		
		return (
			<div className="years">
				<p className="options-title">
					FILTER BY:
				</p>
				<div className="list">
					{optionList}
				</div>
				
			</div>
		);
	}
}


export default YearFilters

// <form className="years">
// 				<label>Years: </label>
// 				<select ref={(n)=>{this.select=n} } onChange={this.onSelectedYear.bind(this)}>
// 				  	{
// 				  		optionList
// 				  	}
// 				</select>
// 			</form>

// <option  key={i} value={i}>{i}</option>)