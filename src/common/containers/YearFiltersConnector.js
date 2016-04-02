import {connect} from 'react-redux'
import YearFilters from '../components/content/filters/YearFilters'

import {getYear} from '../actions/index'




const mapStateToProps = (state)=>{
	
	return {		
		wards: state.wards,
		filter: state.years
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		dispatchFilter:(year, wards)=>{		
			dispatch( getYear(year, wards) )
		}
	}
}

const YearFiltersConnector = connect(
	mapStateToProps,
	mapDispatchToProps
)(YearFilters)

export default YearFiltersConnector