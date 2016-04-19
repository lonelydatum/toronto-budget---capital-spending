import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Menu from '../components/menu/Menu'
import * as Actions from '../actions/menuActions'


function mapStateToProps(state) {
	
	return {
		isOpen: state.menu
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
