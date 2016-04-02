import React from 'react';

import './moreInfo.scss'
import Project from './Project'
import classnames from 'classnames'
import Chart from '../common/Chart.js'
import {Analytics} from '../../util/GA'

export class MoreInfo extends React.Component {

	onClose(id){
		this.props.dispatchCloseWard(id)
		Analytics('moreinfo', 'close')
	}

	render() {
		
		const {open, ward, year, projects, header, dispatchCloseWard} = this.props
		const moreinfoCSS = classnames('panel', {open:open})
		
		if(!ward){
			return (<div id="more-info" className={moreinfoCSS}></div>)
		}


		let title = `${ward.name} will spend $${ward.total.money()} `

		if(year==='ALL'){
			title += ` over the next decade on capital projects.`
		}else{
			title += ` in ${year} on capital projects.`
		}
		
		return (
			<div id="more-info" className={moreinfoCSS}>
				<p className="close btn" onClick={()=>{this.onClose(ward.id)}}>X</p>
				<h1 className="title">{ward.name}</h1>
				<Chart years={year} decade={ward.totals}>{title}</Chart>
				<ul>
					{
						projects.map((p, index) => {
							return <Project key={index} project={p}/>
						})
					}
				</ul>
			</div>
		);
	}
}


export default MoreInfo