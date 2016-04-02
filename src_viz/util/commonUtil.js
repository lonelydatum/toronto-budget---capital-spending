import {YEAR_START} from '../constants/ActionTypes'

const filterByShow = (wards) => {
	return wards.filter( w => w.show )
}


const getTotalBy_ALL = (wardsShow) => {
	let total = 0
	wardsShow.forEach( w => {
		total += w.total
	} )
	return total
}

const getTotalBy_item = (wardsShow, year) => {
	const indexYear = year - YEAR_START
	let total = 0
	wardsShow.forEach( w => {
		total += w.totals[indexYear]
	} )	
	return total
}



export function getTotalByYear(wards, year){
	
	const wardsShow = filterByShow(wards)
	
	if(year==="ALL"){
		return getTotalBy_ALL( wardsShow )
	}else{
		return getTotalBy_item( wardsShow, year )		
	}	
}



