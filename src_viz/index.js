import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import {getRawData} from './actions'

// import './helpers/convertBudget'



import './util/Numbers'





let store = createStore(todoApp)
const state = store.getState()
store.dispatch( getRawData(state.sortBy, state.years) )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)



