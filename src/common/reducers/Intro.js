import * as types from '../constants/ActionTypes'


const Intro = (state = {closeCount:0}, action) => {
  
  switch (action.type) {
    case types.INTRO_CLOSED:
      return {
      	closeCount: state.closeCount + 1,
      	isOpen: false,
      }
    default:
      return state
  }
}

export default Intro
