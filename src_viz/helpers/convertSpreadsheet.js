xlsxj = require("xlsx-to-json");
  

  xlsxj({
    input: "./helpers/budget.csv", 
    output: "./helpers/budget.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });