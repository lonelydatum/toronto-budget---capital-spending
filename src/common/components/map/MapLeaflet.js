import {LONG, LAT} from '../../constants/ActionTypes'
import WardItem from './WardItem'
import _ from 'lodash'




// import './leaflet.scss'
// import './leaflet.label.js'

// const tile = {
// 	url: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw',
// 	options: {
// 		maxZoom: 18,			
// 		id: 'mapbox.light'
// 	}
// }

// const tile2 = {
// 	url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
// 	options:  {
// 			attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
// 	}
// }

// const tile3 = {
// 	url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
// 	options:  {
// 			attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
// 	}
// }



class MapLeaflet {
	constructor(onClickPolygon){
		// this.wardGeojson = wardGeojson
		this.onClickPolygon = onClickPolygon
		this.polyList = []
	}

	load(){
		L.mapbox.accessToken = 'pk.eyJ1IjoibG9uZWx5ZGF0dW0iLCJhIjoid3lTeDFGZyJ9.UeyA15GlHrIH04r93f-2GA';
		this.map = L.mapbox.map('map').addLayer(L.mapbox.tileLayer('mapbox.light'));



		this.map.scrollWheelZoom.disable()
		this.map.zoomControl.setPosition('bottomright');
		

		this.promise = new Promise((resolve, reject) => {			
			this.map.on('load', ()=>{
				resolve()
				this.geoJson()
				// this.panCenter()
			})			
		})
		this.map.setView([43.653226+.05, -79.383184-.31], 11)
		return this.promise
	}

	

	

	geoJson(){				
		
		let wardGeojson = require( '../../data/ward-geojson.json' )				
		const poly = L.geoJson(wardGeojson, {			
			onEachFeature: (feature, layer)=>{
				const wardItem = new WardItem(feature.ward.id, layer, this.onClickPolygon)
				this.polyList.push(wardItem)				
			}
		}).addTo(this.map);
	}

	toggle(wards_list){
		wards_list.forEach((showItem, index)=>{
			const r = this.polyList.filter((polyItem)=>{
				return (polyItem.id === showItem.id)
			})

			if(r.length>0){
				r[0].toggle(showItem.show)
			}
		})
	}

	selected( id ){
		const layer = _.find(this.polyList, {id:id})
		layer.selected()
		const center = layer.layer.getBounds().getCenter()
		center.lng -= .29
		// const b = layer.layer.getBounds()
		this.map.panTo(center)
		
	}

	panCenter() {
		const layer = _.find(this.polyList, {id:26})
		const center = layer.layer.getBounds().getCenter()

		center.lng -= .2
		this.map.panTo(center)
		
	}

	intro(){		
		const tl = new TimelineMax()
		const list = _.orderBy(this.polyList, 'id')		
		list.forEach( (item) => {	
			item.intro( tl )
		} )

		

		

		
		
	}


	



}

export default MapLeaflet
