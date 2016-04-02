import * as types from '../constants/ActionTypes'



const moreInfo = (state = {open:false, hasOpen:false}, action) => {  
  
  switch (action.type) {
    case types.MORE_INFO_TOGGLE:
      
      	const r = {          
      		id: action.id,
          hasOpen: true,
      		open: action.open          
      	}
        return r    
    
        
    default:
      	return state
  }
}

export default moreInfo
