import * as types from '../constants/ActionTypes'


const showHideAll = (state = true, action) => {
	
  switch (action.type) {
    case types.HIDE_ALL:			
			return false
		case types.SHOW_ALL:			
			return true

    default:
      return state
  }
}

export default showHideAll
