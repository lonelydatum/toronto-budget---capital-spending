import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'
var path = require('path');
import Comp from '../common/commponents/Counter.js'

const app = express()

// app.use( express.static( 'stat') )

app.use(express.static(path.join(__dirname, '../dist')));

var port  = process.env.PORT || 2222


app.get('/', function(req, res){	
  
	const html = renderToString(<Comp/>)
  
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
        <title>Universal</title>
        <style>
          body{
            opacity:0;
          }
        </style>
      </head>
      <body>
        <div id="app">${html}</div>       
        <script src="bundle.js"></script>
      </body>
    </html>
    `
}


