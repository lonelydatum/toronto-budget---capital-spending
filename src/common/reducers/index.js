import { combineReducers } from 'redux'
import counter from './counter'


import wards from './wards'
import years from './years'
import sortBy from './sortBy'
import moreInfo from './moreInfoReducer'
import showHideAll from './showHideAll'
import intro from './Intro'
import menu from './menu'
import page from './page'

const rootReducer = combineReducers({
	page,
	intro,
	menu,
	counter,
	showHideAll,
	sortBy,
	years,
	wards,
	moreInfo
})

export default rootReducer
