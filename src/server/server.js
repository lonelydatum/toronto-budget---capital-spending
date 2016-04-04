delete process.env.BROWSER;

import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../common/components/App.js'
import configureStore from '../common/store/configureStore'
import { Provider } from 'react-redux'
import {getRawData} from '../common/actions'
import '../common/util/Numbers'

const app = express()
var path = require('path');

app.use(express.static(path.join(__dirname, '../dist')));

var port  = process.env.PORT || 2222


app.get('/', function(req, res){	
  
	// const html = renderToString(<Comp/>)

  const store = configureStore()


  const state = store.getState()
  store.dispatch( getRawData(state.sortBy, state.years) )

   const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )
  
  // console.log(html);
  res.send(renderFullPage(html))
})


app.listen(port, function(){
	console.log("running on server port "+port);
})


function renderFullPage(html, initialState) {
  return `
    <!doctype html>
<html>
 <head>
    <title>Toronto Capital Budget</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta property="og:url"           content="http://toronto-capital-budget.lonelydatum.com" />
    <meta property="og:type"          content="website" />
    <meta property="og:title"         content="A visualization of Toronto's Capital Budget" />
    <meta property="og:description"   content="A visualization of Toronto's Capital Budget" />
    <meta property="og:image"         content="http://toronto-capital-budget.lonelydatum.com/toronto-capital-budget.png" />
  
  <style>    
    body{
      opacity: 0;
    }
  </style>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300,800' rel='stylesheet' type='text/css'>
    <script src='https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.js'></script>
    <link href='https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.css' rel='stylesheet' />    
  </head>
<body>
  <!-- <div id="fb-root"></div> -->
  <script>
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=223656951010357";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>

  
  
  <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>



  <div id="root">${html}</div>

  <!-- Google Analytics -->
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-67785952-1', 'auto');
    ga('send', 'pageview');
  </script>
  <!-- End Google Analytics -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.15.0-alpha.1/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TimelineMax.min.js"></script>
<script src="./bundle.js"></script>

<script>
document.body.style.opacity = 1
</script>
</body>
</html>
    `
}


