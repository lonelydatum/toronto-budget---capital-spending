import {connect} from 'react-redux'
import Wards from '../components/content/Wards'
import {toggleWard} from '../actions/index'
import _ from 'lodash'

const sortBy = (wards, filter) => {
	switch(filter){
		case "WARD_NAME":
			return _.sortBy(wards, 'name')

		case "WARD_ID":
			return _.sortBy(wards, 'id')

		case "MONEY":
			const total = _.orderBy(wards, 'total')
			return total.reverse()
		default:
		return wards
	}
	
}

const showHideAll = (wards, isShow) => {
	
	return wards.map((w) => {
		return {...w, show:isShow}
	})
}

const mapStateToProps = (state)=>{	
	
	const wardsSorted = sortBy(state.wards, state.sortBy)	

	// const wardsShowHide = showHideAll(wardsSorted, state.showHideAll)
	return {
		 wards: wardsSorted
	}
}

const mapDispatchToProps = (dispatch)=>{

	return {
		dispatchToggleWard:(id)=>{			
			dispatch( toggleWard(id) )
		}
	}
}

const WardContentConnector = connect(
	mapStateToProps,
	mapDispatchToProps
)(Wards)

export default WardContentConnector