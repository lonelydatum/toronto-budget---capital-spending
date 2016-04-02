import React, { Component } from 'react';
import classnames from 'classnames'
import ShowHide from '../common/ShowHide'
// import twitterImage from './social-twitter.svg'
// import fbImage from './social-fb.svg'
import {Analytics} from '../../util/GA.js'

if (process.env.BROWSER) {
	require('./intro.scss')
}

export class Intro extends Component {

	constructor(){
		super()
		this.state = {isOpen:true}
	}

	onClose(){
		Analytics('intro', 'close');
		this.setState({isOpen:false})
		this.props.dispatchClose()
	}

	onOpen(){
		this.setState({isOpen:true})
		Analytics('intro', 'open');		
	}

	onClickDataset(){		
		Analytics('intro', 'dataset');
	}

	onClickBy(){
		Analytics('intro', 'nby');
	}

	render() {
		const css = classnames({open:this.state.isOpen, close:!this.state.isOpen})
		return (
			<div id="intro" className={css}>
				<div className="content-opened">
					<section>
					<h1 className="title">Toronto Capital Budget <span className="year"></span></h1>
					<div className="description">
						<p>
							During 2014-2023, the city of Toronto will spend approximately $3.2 billion on capital projects. 
						This interactive visualization breaks down the total spendings into the 44 wards, years, and projects.
						</p>
						<p className="learnmore">
							Learn more about your neighborhood!
						</p>

					</div>




					

					<div 
						className={'btn selected'}
						onClick={this.onClose.bind(this)}
						>
						<div className="highlight"></div>
						<div className="label">START EXPLORING</div>
						
					</div>
					</section>

					<footer>
						
						<div className="social">
							<div className="social-item twitter">
								<a href="https://twitter.com/share" className="real twitter-share-button" data-text="A visualization of Toronto's Capital Budget spending" data-via="lonelydatum">									
									
								</a>			
								<img />					
							</div>
							<div className="social-item fb">
								<div className="real fb-share-button" 
								    data-href="http://toronto-capital-budget.lonelydatum.com" 
								    data-layout="button">
								</div>
								<img />								
							</div>
						</div>

						<div>
							<p className="by">
								Made by: Gar Liu of <a onClick={this.onClickBy} href="http://lonelydatum.com">Lonely Datum</a>							
							</p>
							<p>
								Dataset: <a onClick={this.onClickDataset} href="http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=7daf4d8e69770310VgnVCM1000003dd60f89RCRD" target="_blank">Toronto.ca</a>
							</p>
						</div>
					</footer>
					
				</div>
				<div className="content-closed">
					<p className="open-btn" onClick={this.onOpen.bind(this)}>ABOUT</p>
				</div>
			</div>
		);
	}
}


export default Intro