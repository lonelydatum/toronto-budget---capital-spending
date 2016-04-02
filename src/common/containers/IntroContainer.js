import {connect} from 'react-redux'
import Intro from '../components/intro/Intro'
import * as action from '../actions/index'
import {getTotalByYear} from '../util/commonUtil.js'



const mapStateToProps = (state)=>{	
	return {
		
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		dispatchClose:()=>{
			dispatch(action.introClose())
		}
	}
}

const IntroConnector = connect(
	mapStateToProps,
	mapDispatchToProps
)(Intro)

export default IntroConnector


