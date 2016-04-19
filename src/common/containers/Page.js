import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../components/pages/Page'
import * as Actions from '../actions/menuActions'


let historyCurr = null
let historyPrev = null

function mapStateToProps(state) {
	historyPrev = historyCurr
	historyCurr = state.menu
	 
	// console.log(state);
	return {
		historyPrev: historyPrev, 
		historyCurr: historyCurr, 
		historyDiff: historyPrev !== historyCurr,
		page: state.page,
		isOpen: state.menu
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
