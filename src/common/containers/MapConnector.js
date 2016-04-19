import {connect} from 'react-redux'
import Map from '../components/map/Map'
import {toggleWard} from '../actions/index'


// let introOnce = true
let menuFalseCounter = 0

const show = (wards) => {
	return wards.filter((w) => {
		return w.show
	})
}

const mapStateToProps = (state)=>{
	
	let selectedID = -1
	if(state.moreInfo.open){
		if(state.moreInfo.id >= 1){
			selectedID = state.moreInfo.id
		}	
	}

	// let showIntro = false

	
	if(!state.menu){
		menuFalseCounter++
	}

	
	
	
	return {
		menu: state.menu,
		menuFalseCounter: menuFalseCounter,
		moreInfo: state.moreInfo,
		selectedID: selectedID,
		wards_show: show(state.wards),
		wards_all: state.wards
	}
}

const mapDispatchToProps = (dispatch)=>{

	return {
		onClickPolygon:(id)=>{		
			dispatch( toggleWard(id) )
		}
	}
}

const MapConnector = connect(
	mapStateToProps,
	mapDispatchToProps
)(Map)

export default MapConnector