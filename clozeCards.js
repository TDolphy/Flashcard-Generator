var fs = require("fs");

var clozeLog = require("./clozeLog.json");

var ClozeCard = function (cloze, answer, full) {
	this.cloze = cloze;
	this.answer = answer;
	this.fullText = full;


	this.addCard = function(cloze, answer, full){
		this.cloze = cloze;
		this.answer = answer;
		this.full = full;
		fs.readFile('clozeLog.json', function (err, data) {
    		var json = JSON.parse(data);
    		console.log(json);
    		json['clozeLogArray'].push({
    			"cloze": cloze,
    			"answer": answer,
    			"full": full
    		});
    		data = JSON.stringify(json);

    		fs.writeFile("clozeLog.json", data, function(err) {

			if (err) {
    			console.log(err);
 			} 
 			else {
 				console.log("Data added!")
 			};
 		})
	})
	};

	this.getData = function() {
		fs.readFile("clozeLog.json", "utf8", function(error, data) {
  			
  			console.log(data);
  			// var dataArr = data.split(",");
  			// console.log(dataArr);

		});
	};
};


module.exports = ClozeCard;