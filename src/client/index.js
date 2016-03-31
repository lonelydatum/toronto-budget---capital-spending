import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Comp from '../common/commponents/Counter.js'


const rootElement = document.getElementById('app')

render(
  <Comp/>,
  rootElement
)

