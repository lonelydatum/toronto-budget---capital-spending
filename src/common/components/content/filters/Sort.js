import React from 'react';
import classnames from 'classnames'

import ShowHide from '../../common/ShowHide'
import RadioBtn from '../../common/RadioBtn'
import {Analytics} from '../../../util/GA'

if (process.env.BROWSER){
	require('./sort.scss')	
}



export class Sort extends React.Component {
	constructor(){
		super()
	}

	onSort(id){		
		Analytics('sort', id)
		this.props.dispatchSort( id )
	}

	
	render() {
		const {filter, sortBy} = this.props
		
		
		const optionList = []
		
		const onSortHandler = this.onSort.bind(this)
		
		return (
			<div className="sort">
				<p className="options-title">SORT BY:</p>
				<div className="buttons">
					<div className="ward-id">
						<RadioBtn 
							id="WARD_NAME" 
							onClicked={onSortHandler} 
							cssClass={classnames('name', 'btn', {selected:sortBy==='WARD_NAME'})}
						>
							WARD NAME
						</RadioBtn>

						<RadioBtn 
							id="WARD_ID" 
							onClicked={onSortHandler} 
							cssClass={classnames('id', 'btn', {selected:sortBy==='WARD_ID'})}
						>
							WARD ID
						</RadioBtn>
						
						
					</div>
					<RadioBtn 
							id="MONEY" 
							onClicked={onSortHandler} 
							cssClass={classnames('money', 'btn', {selected:sortBy==='MONEY'})}
						>
							MONEY
						</RadioBtn>
				</div>
			</div>
			
		);
	}
}


export default Sort

