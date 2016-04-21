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
		let yesNoMobile


		
		const notMobile = (
		<div id="app">				
				<MapConnector />				
				<div id="panels">
					<MoreInfoConnector />
					<ContentConnector />					
				</div>
				<Menu/>
				<Page/>				
			</div>)


		const isMobile = (
		<div id="app">				
				
				<div id="panels">
					<MoreInfoConnector />
					<ContentConnector />					
				</div>
				<Menu/>
				<Page/>				
			</div>)


		let width = 0;
		if (process.env.BROWSER) {
			width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
			
		}


		if(width>700){
			yesNoMobile = notMobile
		}else{
			yesNoMobile = isMobile
		}



		// const yesNoMobile = (isMobile) ? isMobile : notMobile

		console.log("__________ ",width);

		return(
			yesNoMobile
			)
	}
}


export default App




		// 		