import * as Actions from '../constants/ActionTypes'



export default function counter(state = false, action) {
  switch (action.type) {
    case Actions.MENU_TOGGLE:
      return !state
    default:
      return state
  }
}
