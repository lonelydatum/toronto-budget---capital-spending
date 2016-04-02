import * as types from '../constants/ActionTypes'


const sortBy = (state = 'WARD_ID', action) => {
  switch (action.type) {
    case types.SORT_BY:
      return action.filter
    default:
      return state
  }
}

export default sortBy
