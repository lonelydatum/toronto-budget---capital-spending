import * as Actions from '../constants/ActionTypes'



export default function counter(state = "ABOUT", action) {
  switch (action.type) {    
    case Actions.PAGE_SELECTED:
      return action.page
    default:
      return state
  }
}
