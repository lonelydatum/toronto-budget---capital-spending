import React, {Component} from 'react'
import './content.scss'
import classnames from 'classnames'
import SortConnector from '../../containers/SortConnector'
import WardContentConnector from '../../containers/WardContentConnector'
import YearFiltersConnector from '../../containers/YearFiltersConnector'
import TotalConnector from '../../containers/TotalConnector'

import ShowHide from '../common/ShowHide'
import Chart from '../common/Chart.js'
import {Analytics} from '../../util/GA'



class Content extends Component{

	constructor() {
		super()
		this.state = {show:true, showHideAll:true}
	}

	componentDidMount() {
		
	}

	onOpenClose() {
		this.setState({show:!this.state.show})
	}

	onShowHideAll() {
		this.setState({showHideAll:!this.state.showHideAll})
		if(this.state.showHideAll){
			Analytics('visibility', 'show-all')
			this.props.dispatchHideAll()
		}else{
			Analytics('visibility', 'hide-all')
			this.props.dispatchShowAll()
		}		
	}

	render(){
		const {years, grandtotal, wards, decadeList, decadeTotal} = this.props
		const showHideText = this.state.show ? "HIDE" : "SHOW"
		const contentClass = classnames('panel', {hide:!this.state.show})
		
		let title = `Toronto will spend $${grandtotal.money()} `

		if(years==='ALL'){
			title += ` over the next decade on capital projects.`
		}else{
			title += ` in ${years} on capital projects.`
		}

		
		
		
		return(
			<div 
				id='content'
				className={contentClass}
				>
				<h1 className="title">Toronto Capital Budget</h1>
				
				<Chart years={years} decade={decadeList} >
					{title}
				</Chart>

				<div className="button-options">					
					<YearFiltersConnector />
					<div className="sort-hide">
						<SortConnector />
						<ShowHide defaultstate={this.props.showHideAll} on="SHOW ALL" off="HIDE ALL" dispatchToggle={this.onShowHideAll.bind(this)} />
					</div>
				</div>

				<WardContentConnector grandtotal={grandtotal}/>
			</div>)
	}
}


export default Content
// 