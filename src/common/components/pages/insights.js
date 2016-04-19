


import React, { Component } from 'react';



if (process.env.BROWSER) {
	require('./insights.scss')
}



export default class PageFun extends Component {
	render() {
		return (
			<div id="page-fun" className="page">
				
				<div className="fact-list">
					<div className="fact-item">
						<h2>Capital spending for Rosedale in 2014</h2>
						<img src="fun/story1/rosedale__other.jpg" />
						<div className="description">
							<p className="description-half">
								ROSEDALE (ward 28) recieved $31,785,500 during 2014.
							</p>													
							<p className="description-half">
								The following 28 wards recieved $30,381,000 during 2014.					
							</p>
						</div>					
					</div>
					<div className="fact-item">
						<h2>Taxes collected for Rosedale in 2014</h2>
						<img src="fun/story1/rosedale_taxes.jpg" />
						<div className="description">
							<p className="description-half">
								ROSEDALE (ward 28) pays $76 million in resisential taxes
							</p>													
							<p className="description-half">
								ROSEDALE (ward 28) pays $289 million in comercial taxes
							</p>
						</div>		
						<a target="_blank" href="http://www.metronews.ca/news/toronto/2015/04/20/whos-paying-for-toronto-a-ward-by-ward-breakdown-of-property-taxes-in-toronto.html">souce from metronews.ca</a>
					</div>
				</div>

				<footer>If you have any insights that you'd like to share, please <a href="mailto:gar@lonelydatum.com">email</a> me the images or videos and a short description and I'll post them here.</footer>
				
			</div>
		);
	}
}
