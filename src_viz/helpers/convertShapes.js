import wardGeojson from '../sample-geojson.json'


var w = wardGeojson.features.map((item)=>{
	
	let desc = item.properties.Description
	let trList = desc.split("<tr");
	item.ward = {name:'', id:''};
	

	trList.map((trItem)=>{
		let at_NAME = trItem.indexOf('<th>NAME</th>');
		// trItem = 234;
		
		if(at_NAME>=0){
			let name_and_id = trItem.split("<td>")[1].split("</td>")[0].split("(")
			item.ward.name = name_and_id[0].trim()
			item.ward.id = parseFloat(name_and_id[1].trim())
			// item.properties.id = wardProp.id.substr(0, wardProp.id.length-1)
			
		}

		return trItem
	})


	// item.properties = {ward: wardProp}
	
	delete item.properties

	return item;

	


	
})

console.log(w);

