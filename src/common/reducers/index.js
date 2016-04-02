import { combineReducers } from 'redux'
import counter from './counter'


import wards from './wards'
import years from './years'
import sortBy from './sortBy'
import moreInfo from './moreInfoReducer'
import showHideAll from './showHideAll'
import intro from './Intro'

const rootReducer = combineReducers({
	counter,
	showHideAll,
	sortBy,
	years,
	wards,
	moreInfo
})

export default rootReducer
