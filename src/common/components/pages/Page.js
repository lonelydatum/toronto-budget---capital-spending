import React, { Component } from 'react';
import classnames from 'classnames'
import PageAbout from './about'
import PageFun from './insights'
import PageContact from './contact'
import {Analytics} from '../../util/GA.js'


if (process.env.BROWSER) {
	require('./page.scss')
}

let isMounted = false;

export default class Page extends Component {

	componenentDidUpdate(){
		console.log(this.props.page);
	}

	wh(){
		if (process.env.BROWSER) {
			const width = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
			const height = window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0;
			return {w:width, h:height}			
		}

		return {w:0,h:0}
		
	}

	componentDidMount(){
		isMounted = true;
		const r = `rect(0px, ${this.wh().w}px, ${this.wh().h}px, ${this.wh().w}px)`;
		TweenMax.set("#page", {clip:r, display:'block'})

		

		TweenMax.delayedCall( 1.3, this.props.menuToggle )
		// this.checkOpenClose()
	}

	onClickAbout(){
		Analytics('pages', 'nav-ABOUT');
		this.props.pageSelected('ABOUT')
	}

	onClickFun(){
		Analytics('pages', 'nav-INSIGHTS');
		this.props.pageSelected('INSIGHTS')		
	}

	onClickContact(){
		Analytics('pages', 'nav-CONTACT');
		this.props.pageSelected('CONTACT')
	}

	onClosePage(){
		
		this.props.menuToggle()
		
		
	}

	closePage(){		
		
		const r = `rect(0px, ${this.wh().w}px, ${this.wh().h}px, ${this.wh().w}px)`;		
		TweenMax.set("#page", {clip:`rect(0px, ${this.wh().w}px, ${this.wh().h}px, 0px)`})
		TweenMax.to("#page", 1, {ease:Quad.easeOut, clip:r, onComplete:()=>{
			TweenMax.set("#page", {display:'none'})
		}})
	}

	openPage(){
		

		const r = `rect(0px, ${this.wh().w}px, ${this.wh().h}px, ${this.wh().w}px)`;
		TweenMax.set("#page", {clip:r, display:'block'})
		TweenMax.to("#page", 1, {ease:Quad.easeOut, clip:`rect(0px, ${this.wh().w}px, ${this.wh().h}px, 0px)`, onComplete:()=>{
			// TweenMax.to("#page",1, {clip:'auto'})
			document.getElementById('page').style.clip = 'auto';
			// if(this.refs.page){
			// 	this.refs.page.style.clip = 'auto';
			// }
		}})
	}

	checkOpenClose(){
		
		const {historyDiff, isOpen} = this.props

		if(isOpen){
			if(historyDiff){
				if(isMounted){
					this.openPage()
				}
				
			}
		}else{
			if(historyDiff){
				if(isMounted){
					this.closePage()
				}
			}
		}
	}

	


	render() {
		
		this.checkOpenClose()
		
		
		
		const cssPage = classnames({isOpen:this.props.isOpen})
		const cssNavAbout = classnames({navItemSelected:this.props.page==='ABOUT'})
		const cssNavInsights = classnames({navItemSelected:this.props.page==='INSIGHTS'})
		const cssNavContact = classnames({navItemSelected:this.props.page==='CONTACT'})

		let Page;
		if(this.props.page==="ABOUT"){
			Page = PageAbout
		}else if(this.props.page==="INSIGHTS"){
			Page = PageFun
		}else if(this.props.page==="CONTACT"){
			Page = PageContact
		}


		return (
			<div id="page" className={cssPage}>
				<nav>
					<p className={cssNavAbout} onClick={this.onClickAbout.bind(this)}>ABOUT</p>
					<p className={cssNavInsights} onClick={this.onClickFun.bind(this)}>INSIGHTS</p>
					<p className={cssNavContact} onClick={this.onClickContact.bind(this)}>CONTACT</p>
				</nav>
				<div className="page-main">
					<Page onClosePage={this.onClosePage.bind(this)}/>
				</div>
			</div>
		);
	}
}
