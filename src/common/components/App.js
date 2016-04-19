import React, {Component} from 'react'
import MapConnector from '../containers/MapConnector'
import HudConnector from '../containers/HudConnector'
import ContentConnector from '../containers/ContentConnector'
import MoreInfoConnector from '../containers/MoreInfoConnector'
// import IntroContainer from '../containers/IntroContainer'
import Menu from '../containers/Menu'
import Page from '../containers/Page'



if (process.env.BROWSER) {
	require('./reset.scss')
	require('./app.scss')
}




class App extends Component {
	render(){
		// return(<div></div>)
		return(
			<div id="app">
			
		<MapConnector />
				
				<div id="panels">
					<MoreInfoConnector />
					<ContentConnector />					
				</div>

				
				<Menu/>
				<Page/>
				
			</div>
			)
	}
}


export default App




		// 		