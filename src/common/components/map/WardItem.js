import {Analytics} from '../../util/GA'

class WardItem {
	constructor(id, layer, onClickPolygon){
		this.id = id
		this.layer = layer
		this.onClickPolygon = onClickPolygon
		

		const col = {
			watercolor:'#fae4d7',
			green: '#d8f092',
			darkblue: '#142736',
			yellow: '#EED714',
			orange: '#ef4f34',
			salmon: 'rgba(250, 128, 114, 1)'
		}
		
		this.style = {
			show: {fillOpacity:.8},
			hide: {fillOpacity:.2, fillColor:'#ef4f34'},
			selected: {fillColor:col.darkblue, weight:2},
			common: {weight:1.5, fillColor:'#ef4f34', color:'brown'}
		}

		
		this.toggle(false)

		this.layer.on("click", this.onClicked.bind(this))
	}

	onClicked(e){
		this.onClickPolygon( this.id )
		Analytics('map-toggle', `${this.id}: ${this.layer.feature.ward.name}` )
	}

	toggle(showHide){
		const sh = showHide ? this.style.show : this.style.hide;
		const newOBJ = {...this.style.common, ...sh}
		this.layer.setStyle( newOBJ )

		const el = document.querySelector('.leaflet-marker-icon.leaflet-ward-label.ward'+this.id)
		if(!el){
			return;
		}
		if(!showHide){			
			el.style.color = 'salmon';			
		}else{
			el.style.color = 'rgba(255,255,255,.4)';
		}
	}

	selected(){
		this.layer.setStyle( {...this.style.common, ...this.style.selected} )
		this.layer.bringToFront()
	}

	intro(tl){
		const obj = {...this.style.hide}
		tl.to(obj, .3, {			
			fillOpacity:this.style.show.fillOpacity, 
			onUpdate:()=>{
				this.layer.setStyle( obj )				
			}
		}, "-=.25")


	}

	
}

export default WardItem