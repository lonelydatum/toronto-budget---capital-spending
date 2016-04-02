
import {YEAR_START} from '../constants/ActionTypes'
import * as types from '../constants/ActionTypes'


const updateProjectTotal = (project,year)=>{
	
	if(year==="ALL"){			
		return {
					...project,
					total: project.decade.reduce(function(pv, cv) { return pv + cv; }, 0)
				}		
	}else{
		return {
					...project,
					total: project.decade[ year - YEAR_START ]
				}
	}
}

const getTotal = (ward, year)=>{	
	const projectList = ward.projects.map((p)=>{
		return updateProjectTotal(p, year)
	})

	if(year==="ALL"){				
		const sum = ward.totals.reduce(function(pv, cv) { return pv + cv; }, 0);		
		return Object.assign({}, ward, {total:sum, projects:projectList})
	}else{
		return Object.assign({}, ward, {total:ward.totals[ year - YEAR_START ], projects:projectList})
	}		
}

const showItem = (ward, show) =>{
	return Object.assign({}, ward, {show:show})
}

const wardItem = (state=[], action) => {
	switch(action.type){
		case types.WARD_ITEM_TOGGLE:
			if(state.id !== action.id){
				return state
			}			
			return showItem(state, !state.show)
		case types.WARD_ITEM_SHOW:
			if(state.id !== action.id){
				return state
			}
			return showItem(state, true)

		default:
      		return state
	}		
}

const changeShow = (wards, isShow) => {
	return wards.map( (w)=> showItem(w, isShow) )
}


const wards = (state=[], action) => {	
	switch(action.type){
		case types.WARD_ITEM_TOGGLE:
			return state.map(w => wardItem(w, action))
		
		case types.WARD_ITEM_SHOW:
			return state.map(w => wardItem(w, action))
		
		case types.GET_ALL_WARDS:
			const c = action.wards.map((w) => {
				return getTotal(w, action.years)				
			})
			return c
		
		case types.SET_YEARS_FILTER:
			return action.wards.map((w) => {
				return getTotal(w, action.filter)				
			})

		case types.HIDE_ALL:			
			return changeShow(state, false)

		case types.SHOW_ALL:			
			return changeShow(state, true)
			

			
			

		default:
			return state
	}
}


export default wards