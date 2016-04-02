import { combineReducers } from 'redux'

import wards from './wards'
import years from './years'
import sortBy from './sortBy'
import moreInfo from './moreInfoReducer'
import showHideAll from './showHideAll'
import intro from './Intro'



const todoApp = combineReducers({
	intro,
	showHideAll,
	sortBy,
	years,
  	wards,
  	moreInfo
})


export default todoApp
