import {connect} from 'react-redux'
import Sort from '../components/content/filters/Sort'
import {sortBy} from '../actions/index'






const mapStateToProps = (state)=>{	
	
	return {
		sortBy: state.sortBy
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		dispatchSort:(id)=>{

			dispatch( sortBy(id) )
		}
	}
}

const SortConnector = connect(
	mapStateToProps,
	mapDispatchToProps
)(Sort)

export default SortConnector