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
  
  console.log(html);
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
  <intercept-url pattern="/favicon.ico" access="ROLE_ANONYMOUS" />
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300,800' rel='stylesheet' type='text/css'>
  <script src='https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.js'></script>
  <link href='https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.css' rel='stylesheet' />
  <title>Redux Universal Example</title>
</head>
<body>
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


<script src="bundle.js"></script>
</body>
</html>
    `
}


