import {connect} from 'react-redux'
import MoreInfo from '../components/moreInfo/MoreInfo'
import {toggleMoreInfo} from '../actions/index'
import _ from 'lodash'



const mapStateToProps = (state)=>{	


	const ward = _.find(state.wards, {id:state.moreInfo.id})

	
	if(!ward){
		return{}
	}
	
	let header = `In ${state.years} `
	const footer = `${ward.name} will spend $${ward.total.money()}`
	if(state.years==='ALL'){
		header = `Between 2014-2023 `
	}

	return {		
		header: header+footer,
		open: state.moreInfo.open,
		year: state.years,
		projects: ward ? _.sortBy(ward.projects, 'total').reverse() : null,
		ward: ward
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		dispatchCloseWard:(id)=>{			
			console.log(id);
			dispatch( toggleMoreInfo(id, false) )
		}
	}
}

const MoreInfoConnector = connect(
	mapStateToProps,
	mapDispatchToProps
)(MoreInfo)

export default MoreInfoConnector