import * as types from '../constants/ActionTypes'


const years = (state = 'ALL', action) => {
  
  switch (action.type) {
    case types.SET_YEARS_FILTER:
      return action.filter
    default:
      return state
  }
}

export default years
