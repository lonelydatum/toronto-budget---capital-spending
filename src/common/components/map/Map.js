import React, {Component} from 'react'
import wardGeojson from './map.json'
import MapLibrary from './MapLeaflet'

if (process.env.BROWSER) {
	require('./Mapper.scss')
}




let mapper;

class Map extends Component{

	constructor(){
		super()
	}

	componentDidMount() {
		this.map = new MapLibrary( wardGeojson, this.props.onClickPolygon )
		this.map.load().then( (n)=>{
			
		} )
	}

	render(){
		if(this.map){
			// 
			if(this.props.showIntro){
				this.map.intro()
			}else{
				this.map.toggle(this.props.wards_all)
			}

			if(this.props.selectedID>=1)	{
				this.map.selected( this.props.selectedID )
			}

			if(!this.props.moreInfo.open){
				this.map.panCenter()				
			}

		}


		
		return(
			<div 
				id="map"
				moreinfo={this.props.moreInfo}
				ref={(node)=>{mapper=node}}				
			></div>
		)
	}
}


export default Map


