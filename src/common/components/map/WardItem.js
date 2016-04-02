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
			hide: {fillOpacity:.3},
			selected: {fillColor:col.darkblue, weight:2},
			common: {weight:1.5, fillColor:'#ef4f34', color:'brown'}
		}

		
		this.toggle(false)

		this.layer.on("click", this.onClicked.bind(this))
	}

	onClicked(e){
		this.onClickPolygon( this.id )
		Analytics('map-toggle', this.id )
	}

	toggle(showHide){
		const sh = showHide ? this.style.show : this.style.hide;
		this.layer.setStyle( {...this.style.common, ...sh} )
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