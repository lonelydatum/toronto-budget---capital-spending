// export const SET_COUNTER = 'SET_COUNTER'
// export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
// export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

// export function set(value) {
//   return {
//     type: SET_COUNTER,
//     payload: value
//   }
// }

// export function increment() {
//   return {
//     type: INCREMENT_COUNTER
//   }
// }

// export function decrement() {
//   return {
//     type: DECREMENT_COUNTER
//   }
// }

// export function incrementIfOdd() {
//   return (dispatch, getState) => {
//     const { counter } = getState()

//     if (counter % 2 === 0) {
//       return
//     }

//     dispatch(increment())
//   }
// }

// export function incrementAsync(delay = 1000) {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(increment())
//     }, delay)
//   }
// }







// import data from '../data/budget_clean.json'

import * as type from '../constants/ActionTypes'

let data = []
if (process.env.BROWSER) {
  data = budget_data  
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