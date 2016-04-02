
import {connect} from 'react-redux'
import WardItem from '../components/content/WardItem'
import {toggleWard, toggleMoreInfo, showWard} from '../actions/index'
import {YEAR_START} from '../constants/ActionTypes'

import _ from 'lodash'

const getWardById = (wards, id) =>{
	_.find(wards, {id:id})
}

const getTotal = (ward, year)=>{
	if(year==="ALL"){
		return ward.total
	}else{
		return ward.totals[ year - YEAR_START ]
	}		
}

const isOpen = (moreInfo, wardID) => {
	// console.log(moreInfo);
	if(moreInfo.id){
		return (moreInfo.ward.id === wardID) ? moreInfo.toggle : "CLOSE"	
	}else{
		return moreInfo.toggle
	}	
}


const mapStateToProps = (state, ownProp)=>{
	let isActive = false

	if(state.moreInfo.id !== 'undefined'){
		isActive = (state.moreInfo.id === ownProp.ward.id && state.moreInfo.open)
	}


	
	const total = getTotal(ownProp.ward, state.years)	
	return {
		hasOpen: state.moreInfo.hasOpen,
		isActive: isActive,
		total: total,
		moreInfo: state.moreInfo,		
		percent: ownProp.ward.show ? total/ownProp.grandtotal : 0
	}
}

const mapDispatchToProps = (dispatch, ownProp)=>{
	
	return {
		dispatchToggle:()=>{
			dispatch( toggleWard(ownProp.ward.id) )
		},

		dispatchShow:()=>{
			dispatch( showWard(ownProp.ward) )
		},

		dispatchMoreInfo: (open) => {			
			dispatch(toggleMoreInfo(open, ownProp.ward.id))
		}
	}
}

const WardItemConnector = connect(
	mapStateToProps,
	mapDispatchToProps
)(WardItem)

export default WardItemConnector