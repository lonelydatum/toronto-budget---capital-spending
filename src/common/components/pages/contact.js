import React, { Component } from 'react';

import ExploreButton from './ExploreBtn'

if (process.env.BROWSER) {
	require('./contact.scss')
}

export default class PageContact extends Component {

	onExplore(){		
		this.props.onClosePage()
	}


	render() {
		return (
			<div id="page-contact" className="page">
				<section>
				<div className="description">
				Please reach out to Gar Liu if you have any comments or questions. 
				This is an ongoing project, and feedback from the public is very much welcome and appreciated! 

				You can help by sharing any insights that you have gathered from exploring the data and 
				should you wish build off of this you can grab the code from <a target="_blank" href="https://github.com/lonelydatum/toronto-budget---capital-spending">github</a>.



					



				
				</div>
				<ExploreButton onExplore={this.onExplore.bind(this)}/>
				</section>

				<footer>
					<div className="foot-notes">
						<div>EMAIL: <a href="mailto:gar@lonelydatum.com">gar@lonelydatum.com</a></div>
						<div>TWITTER: <a href="http://twitter.com/lonelydatum">@lonelydatum</a>.</div>
						 
					</div>
					
				</footer>
			</div>
		);
	}
}
