import React, { Component } from 'react';
import classnames from 'classnames'
import './chart.scss'
import {YEAR_START} from '../../constants/ActionTypes.js'
import _ from 'lodash'

export class Chart extends Component {
	render() {

		const {decade, years} = this.props
		const yearList = []
		
		const total = _.sum(decade)
		const max = _.max(decade)
		
		
		


		let index = 0;
		for(var i=YEAR_START;i<10+YEAR_START;i++){
			let percent = decade[index]/max * 100 + "%"
			let css = classnames('year');
			if(years !== "ALL"){
				css = classnames(css, {selected:i===years})
			}else{
				css = classnames(css, {selected:true})
			}


			yearList.push(
				<div key={i} className={css}>
					<div className="label">{i}</div>
					<div className="bar" style={{width:percent}}></div>
				</div>
			)	

			index++;		
		}

		return (
			<div className="chart">
				<p className="description">{this.props.children}</p>
				<div className="chart-years">
					{yearList}
				</div>				
			</div>
		);
	}
}


export default Chart