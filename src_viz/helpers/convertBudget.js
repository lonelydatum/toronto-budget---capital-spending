
import is from 'is_js'
import budget from './budget_raw.json'
const budgetPolish = []


const re = (accumulator, row) => {
	if(row && true){

		if(is.number(row["Row Labels"])){
			
			const ward_project_number = row["Ward/Project Number"]
			const last_dash = ward_project_number.lastIndexOf("-");			
			const ward_id = ward_project_number.substr(last_dash+1)
			const ward_name = ward_project_number.substr(0,last_dash)
			

			const wardItem = {
				id:parseInt(ward_id), 
				name:ward_name,
				show:true,		
				total:0,		
				totals: [0,0,0,0,0,0,0,0,0,0],
				projects:[]
			}


			budgetPolish.push(wardItem)
		}else{
			//is a project
			if(row["Ward/Project Number"].indexOf("Total")<0){
				
				const thisWard = budgetPolish[budgetPolish.length-1]
				const project = {}
				project.decade = []
				project.total = 0


				for(const key in row){
					if(is.number(parseInt(key))){										
						const dollarAmount = is.number(row[key]) ? row[key] : parseFloat(row[key].replace(",", ""))					
						
						thisWard.totals[project.decade.length] += dollarAmount
						project.decade.push( dollarAmount )	
						// project.total += dollarAmount

					}else{
						project[key] = row[key]
					}

					
				}

				thisWard.projects.push( project )	
				// thisWard.total += project.total
			}		
		}
	}
	
		
}

const b = budget.reduce(re, budgetPolish)


console.log(" --- ",budgetPolish);



const loopWards = (wards) => {
	budgetPolish.forEach(eachWardItem)
}
const eachWardItem = (wardItem) => {
	wardItem.projects.forEach( eachProject )
}


const eachProject = (projectItem) => {
	projectItem.decade.forEach( eachDecadeItem )
}

const eachDecadeItem = (decadeItem) => {
	console.log(decadeItem);
}

const test = {
	loopWards, eachWardItem, eachProject, eachDecadeItem
}

re()






// const clean = () => {

// 	budget.forEach((row)=>{	
// 		if(is.number(row["Row Labels"])){

			

// 			const ward_project_number = row["Ward/Project Number"]

// 			const last_dash = ward_project_number.lastIndexOf("-");
			
// 			const ward_id = ward_project_number.substr(last_dash+1)
// 			const ward_name = ward_project_number.substr(0,last_dash)
			

// 			const wardItem = {
// 				id:parseInt(ward_id), 
// 				name:ward_name,
// 				show:true,		
// 				total:0,		
// 				projects:[]
// 			}


// 			budgetPolish.push(wardItem)
// 		}else{
// 			//is a project
// 			if(row["Ward/Project Number"].indexOf("Total")<0){
				
// 				const project = {}
// 				project.decade = []
// 				project.total = 0

// 				for(const key in row){
// 					if(is.number(parseInt(key))){										
// 						const dollarAmount = is.number(row[key]) ? row[key] : parseFloat(row[key].replace(",", ""))					
// 						project.decade.push( dollarAmount )	
// 						project.total += dollarAmount
// 					}else{
// 						project[key] = row[key]
// 					}

					
// 				}

// 				budgetPolish[budgetPolish.length-1].projects.push( project )	
// 			}		
// 		}
// 	})
// 	console.log(budgetPolish);
// }