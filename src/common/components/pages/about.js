import React, { Component } from 'react';
import ExploreButton from './ExploreBtn'
import {Analytics} from '../../util/GA.js'

let twitterImage;
let fbImage;
let gitImage;



if (process.env.BROWSER) {
	require('./about.scss')
	require('./page.scss')
	const tw = require('./social-twitter.png')
	const fb = require('./social-fb.png')
	const git = require('./social-git.png')
	twitterImage = (<img src={tw} />);
	fbImage = (<img src={fb}/>);
	gitImage = (<img src={git}/>);
}

export default class PageAbout extends Component {



	onExplore(){		
		Analytics('pages', 'about-explore');
		this.props.onClosePage()
	}

	onClickTwitter(){
		Analytics('pages', 'about-social-twitter');
	}

	onClickFB(){
		Analytics('pages', 'about-social-fb');
	}

	onClickGit(){
		Analytics('pages', 'about-social-git');
	}

	

	render() {
		return (
			<div id="page-about" className="page">
				
					<section>
					
					<div className="description">
						<p>
							From 2014-2023, the city of Toronto will spend approximately $3.2 billion on capital projects. 
						This interactive visualization breaks down the total spendings into the 44 wards, years, and projects.
						</p>

						
						<p className="learnmore">
							Learn more about your neighborhood!
						</p>

					</div>




					
					<ExploreButton onExplore={this.onExplore.bind(this)}/>
					
					</section>

					<footer>
						
						<div className="social">
							<div className="social-item twitter">	

								<a 
									onClick={this.onClickTwitter}
									target="_blank" 
									href="https://twitter.com/share?text=How do you break up $3.2B?  Visualization of Toronto's Capital Budget, 2014-2023 @lonelydatum" 
									>{twitterImage}</a>
							</div>

							<div className="social-item fb">
								<a onClick={this.onClickFB} href="javascript:fbShare('http://toronto-capital-budget.lonelydatum.com', 'Fb Share', 'Facebook share popup', 'social-fb.png', 520, 350)">{fbImage}</a>
							</div>

							<div className="social-item git">
								<a onClick={this.onClickGit} href="https://github.com/lonelydatum/toronto-budget---capital-spending" target="_blank">{gitImage}</a>
							</div>
						</div>

						<p className="foot-notes">
							DATASET: <a target="_blank" href="http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=7daf4d8e69770310VgnVCM1000003dd60f89RCRD"> toronto.ca</a>
						</p>
					</footer>
				
			</div>
		);
	}
}
