import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions'
// import {increment, decrement} from '../actions'

function mapStateToProps(state) {
	return {
		counter: state.counter
	}
}

function mapDispatchToProps(dispatch) {
	// return {
	// 	up: () => {
	// 		dispatch( increment() )
	// 	},
	// 	down: () => {
	// 		dispatch( decrement() )
	// 	}
	// }
	return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
