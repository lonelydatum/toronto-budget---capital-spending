


// import data from '../data/budget_clean.json'

import * as type from '../constants/ActionTypes'

let data = []
if (process.env.BROWSER) {
  data = budget_data  
  console.log("browser");
}else{
  data = require('../data/budget_clean.json')
  console.log("server");
}





export function getRawData(sortyBy, years) {
  return {
    type: type.GET_ALL_WARDS,
    wards: data,
    sortBy: sortBy,
    years, years
  }
}



export function toggleWard( id ) {
  return {
    type: type.WARD_ITEM_TOGGLE,
    id: parseFloat(id)
  }
}
export function showWard( ward ) {
  return {
    type: type.WARD_ITEM_SHOW,
    id: ward.id
  }
}



export function getYear( year, wards ) {
  return {
    type: type.SET_YEARS_FILTER,
    wards: wards,
    filter: year
  }
}


export function toggleMoreInfo( open, id  ) {
  return {
    type: type.MORE_INFO_TOGGLE,
    id: id,
    open: open
  }
}


export function sortBy( filter ) {  
  return {
    type: type.SORT_BY,
    filter: filter
  }
}


export function hideAll( ) {   
  return {
    type: type.HIDE_ALL
  }
}

export function showAll( ) {   
  return {
    type: type.SHOW_ALL
  }
}

export function introClose() {
  return {
    type: type.INTRO_CLOSED
  }
}