import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../common/reducers'
import App from '../common/components/App'
import {getRawData} from '../common/actions'

// import './helpers/convertBudget'



import '../common/util/Numbers'





let store = createStore(todoApp)
const state = store.getState()
store.dispatch( getRawData(state.sortBy, state.years) )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)



