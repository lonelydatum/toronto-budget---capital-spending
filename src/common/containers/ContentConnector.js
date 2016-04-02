import {connect} from 'react-redux'
import _ from 'lodash'
import Content from '../components/content/Content'
import {hideAll, showAll} from '../actions/index'
import {YEAR_START, SHOW_ALL, HIDE_ALL} from '../constants/ActionTypes'
import {getTotalByYear} from '../util/commonUtil.js'


const getCityDecade = (wards)=>{
	const total = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	wards.forEach( (w) => {
		w.totals.forEach( (t, index) => {
			total[index] += t;
		} )
	})
	return total
}



const mapStateToProps = (state)=>{	
	
	const list = getCityDecade( state.wards )
	return {
		decadeList: list,		
		wards: state.wards,
		showHideAll: state.showHideAll,
		grandtotal: getTotalByYear(state.wards, state.years),
		years:state.years
	}
}

const mapDispatchToProps = (dispatch)=>{

	return {
		dispatchHideAll: () => {
			dispatch( hideAll() )
		},
		dispatchShowAll: () => {
			dispatch( showAll() )
		}		
	}
}

const ContentConnector = connect(
	mapStateToProps,
	mapDispatchToProps
)(Content)

export default ContentConnector