import {LONG, LAT} from '../../constants/ActionTypes'
import WardItem from './WardItem'
import _ from 'lodash'



var wardlabels = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                                                                                
"features": [
{ "type": "Feature", "properties": { "ward": 41 }, "geometry": { "type": "Point", "coordinates": [ -79.269174622592729, 43.807907496488852 ] } },
{ "type": "Feature", "properties": { "ward": 44 }, "geometry": { "type": "Point", "coordinates": [ -79.160042744734156, 43.786029480820361 ] } },
{ "type": "Feature", "properties": { "ward": 42 }, "geometry": { "type": "Point", "coordinates": [ -79.205387460211355, 43.82088715366605 ] } },
{ "type": "Feature", "properties": { "ward": 39 }, "geometry": { "type": "Point", "coordinates": [ -79.312444269551406, 43.805879044790771 ] } },
{ "type": "Feature", "properties": { "ward": 24 }, "geometry": { "type": "Point", "coordinates": [ -79.378513813833521-.01, 43.792389159953338 ] } },
{ "type": "Feature", "properties": { "ward": 40 }, "geometry": { "type": "Point", "coordinates": [ -79.30500710414556, 43.777781969508936 ] } },
{ "type": "Feature", "properties": { "ward": 33 }, "geometry": { "type": "Point", "coordinates": [ -79.347171124205445, 43.781515671384199 ] } },
{ "type": "Feature", "properties": { "ward": 23 }, "geometry": { "type": "Point", "coordinates": [ -79.41818241252264, 43.772435964164714 ] } },
{ "type": "Feature", "properties": { "ward": 8 }, "geometry": { "type": "Point", "coordinates": [ -79.496745760780414, 43.766027490350147 ] } },
{ "type": "Feature", "properties": { "ward": 38 }, "geometry": { "type": "Point", "coordinates": [ -79.238549090519413, 43.764016034842541 ] } },
{ "type": "Feature", "properties": { "ward": 7 }, "geometry": { "type": "Point", "coordinates": [ -79.540843956953438, 43.744899052433176 ] } },
{ "type": "Feature", "properties": { "ward": 34 }, "geometry": { "type": "Point", "coordinates": [ -79.329098365668457, 43.745243534954668 ] } },
{ "type": "Feature", "properties": { "ward": 25 }, "geometry": { "type": "Point", "coordinates": [ -79.376729628325833, 43.738812914159951 ] } },
{ "type": "Feature", "properties": { "ward": 43 }, "geometry": { "type": "Point", "coordinates": [ -79.202999919089734, 43.765501960543084 ] } },
{ "type": "Feature", "properties": { "ward": 10 }, "geometry": { "type": "Point", "coordinates": [ -79.448095856170141-.007, 43.761562582954909+.005 ] } },
{ "type": "Feature", "properties": { "ward": 9 }, "geometry": { "type": "Point", "coordinates": [ -79.484393789540604, 43.736901739982635 ] } },
{ "type": "Feature", "properties": { "ward": 36 }, "geometry": { "type": "Point", "coordinates": [ -79.243858148709634, 43.714231720702394 ] } },
{ "type": "Feature", "properties": { "ward": 37 }, "geometry": { "type": "Point", "coordinates": [ -79.281233649573096, 43.749152821907174 ] } },
{ "type": "Feature", "properties": { "ward": 1 }, "geometry": { "type": "Point", "coordinates": [ -79.595697895720363, 43.741800184095673 ] } },
{ "type": "Feature", "properties": { "ward": 15 }, "geometry": { "type": "Point", "coordinates": [ -79.44967343049494, 43.712038028257439 ] } },
{ "type": "Feature", "properties": { "ward": 35 }, "geometry": { "type": "Point", "coordinates": [ -79.273984098640582, 43.715760926838854 ] } },
{ "type": "Feature", "properties": { "ward": 26 }, "geometry": { "type": "Point", "coordinates": [ -79.349677469087865, 43.712061637674196 ] } },
{ "type": "Feature", "properties": { "ward": 11 }, "geometry": { "type": "Point", "coordinates": [ -79.501370101632631, 43.687287044835024 ] } },
{ "type": "Feature", "properties": { "ward": 2 }, "geometry": { "type": "Point", "coordinates": [ -79.574862316282648, 43.706927809593978 ] } },
{ "type": "Feature", "properties": { "ward": 29 }, "geometry": { "type": "Point", "coordinates": [ -79.347606755135075, 43.689476851124716 ] } },
{ "type": "Feature", "properties": { "ward": 12 }, "geometry": { "type": "Point", "coordinates": [ -79.484960455986737, 43.703476782704698 ] } },
{ "type": "Feature", "properties": { "ward": 32 }, "geometry": { "type": "Point", "coordinates": [ -79.30609094434827, 43.673146294092668 ] } },
{ "type": "Feature", "properties": { "ward": 31 }, "geometry": { "type": "Point", "coordinates": [ -79.311057994136121, 43.700396574040077 ] } },
{ "type": "Feature", "properties": { "ward": 22 }, "geometry": { "type": "Point", "coordinates": [ -79.396200465691123, 43.696033229069705 ] } },
{ "type": "Feature", "properties": { "ward": 21 }, "geometry": { "type": "Point", "coordinates": [ -79.424773987767466, 43.68931580762856 ] } },
{ "type": "Feature", "properties": { "ward": 30 }, "geometry": { "type": "Point", "coordinates": [ -79.339555440592733, 43.65701183602053 ] } },
{ "type": "Feature", "properties": { "ward": 4 }, "geometry": { "type": "Point", "coordinates": [ -79.538827701459695, 43.676371511480589 ] } },
{ "type": "Feature", "properties": { "ward": 27 }, "geometry": { "type": "Point", "coordinates": [ -79.380716834252226, 43.673855160423209 ] } },
{ "type": "Feature", "properties": { "ward": 18 }, "geometry": { "type": "Point", "coordinates": [ -79.438233512577781, 43.657136364953452 ] } },
{ "type": "Feature", "properties": { "ward": 3 }, "geometry": { "type": "Point", "coordinates": [ -79.571561512064122, 43.65279782585845 ] } },
{ "type": "Feature", "properties": { "ward": 28 }, "geometry": { "type": "Point", "coordinates": [ -79.372078155150007, 43.639081406660232 ] } },
{ "type": "Feature", "properties": { "ward": 20 }, "geometry": { "type": "Point", "coordinates": [ -79.398789868154296, 43.654605579328226 ] } },
{ "type": "Feature", "properties": { "ward": 5 }, "geometry": { "type": "Point", "coordinates": [ -79.52544144427884, 43.634387567640871 ] } },
{ "type": "Feature", "properties": { "ward": 6 }, "geometry": { "type": "Point", "coordinates": [ -79.518153510981989, 43.606797108163789 ] } },
{ "type": "Feature", "properties": { "ward": 16 }, "geometry": { "type": "Point", "coordinates": [ -79.415812233996334, 43.724921458603504 ] } },
{ "type": "Feature", "properties": { "ward": 14 }, "geometry": { "type": "Point", "coordinates": [ -79.444339865047155, 43.64543621114013 ] } },
{ "type": "Feature", "properties": { "ward": 13 }, "geometry": { "type": "Point", "coordinates": [ -79.477821983854042, 43.652130294652387 ] } },
{ "type": "Feature", "properties": { "ward": 19 }, "geometry": { "type": "Point", "coordinates": [ -79.41657654478874, 43.648856437402252 ] } },
{ "type": "Feature", "properties": { "ward": 17 }, "geometry": { "type": "Point", "coordinates": [ -79.45023433019729, 43.679248081192888 ] } }
]
}


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
		// let wardGeojson = require( '../../data/ward-geojson.json' )				
		const poly = L.geoJson(wardGeojson, {			
			onEachFeature: (feature, layer)=>{
				const wardItem = new WardItem(feature.ward.id, layer, this.onClickPolygon)
				this.polyList.push(wardItem)				
			}
		}).addTo(this.map);


		const wlabels = L.geoJson(wardlabels, {
		    pointToLayer: function(feature, ll) {
		      return L.marker(ll, {
		        icon: L.divIcon({
		        	
		          	className: 'leaflet-ward-label '+'ward'+feature.properties.ward,
		          	html: feature.properties.ward,
		          	iconSize: [50, 50],
		          	iconAnchor: [6,6]
		        })
		      });
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
