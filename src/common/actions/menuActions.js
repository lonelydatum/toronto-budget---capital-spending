import * as type from '../constants/ActionTypes'

export function menuToggle() {
  return {
    type: type.MENU_TOGGLE 
  }
}


export function pageSelected(page) {
  return {
    type: type.PAGE_SELECTED,
    page: page
  }
}

