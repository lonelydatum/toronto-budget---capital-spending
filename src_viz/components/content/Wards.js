import React from 'react';
import WardItemConnector from '../../containers/WardItemConnector'
import './wards.scss'

export class WardContent extends React.Component {
	render() {
		
		const {wards, grandtotal} = this.props
		
		return (
			<div className={'ward-list'}>
				<ul>
					{
						wards.map( (w, index)=>{														
							return <WardItemConnector 
								key={w.id} 
								index={index}
								grandtotal={grandtotal}								
								ward={w} />
						} )
					}
				</ul>
			</div>
		);
	}
}


export default WardContent