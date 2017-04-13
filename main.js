var inquirer = require("inquirer");
var ClozeCard = require("./clozeCards.js");
// var BasicCard = require("./basicCard.js");
var count = 0;
var correct = 0;
var incorrect = 0;
var type = process.argv[2];

// create cards
 
 // var newBasicCard = new BasicCard();
 // newBasicCard.addCard("Who was the first US President?", "George Washington");
 // newBasicCard.addCard("What political party was a Bill Clinton affiliated with?", "Democratic");
 // newBasicCard.addCard("How many original colonies were there in the United States?","13");
 // newBasicCard.addCard("Was President Nixon impeached from office?", "Yes");
var cards = [("... was a Republican President who was impeached from office", "Richard Nixon", "President Nixon was a Republican President who was impeached from office"),
			("... was our first President", "George Washington", "George Washington was our first President"),
			("... was a Democratic President who got impeached", "Bill Clinton", "Bill Clinton was a Democratic President who got impeached"),
			("There was originally ... colonies", "13", "There was originally 13 colonies")];
// var clozeCard0 = ("... was our first President", "George Washington", "George Washington was our first President");
// var clozeCard1 = ("... was a Democratic President who got impeached", "Bill Clinton", "Bill Clinton was a Democratic President who got impeached");
// var clozeCard2 = ("There was originally ... colonies", "13", "There was originally 13 colonies");

function crateCards () {
	for (var x = 0; x < cards.length; x++){
		setTimeout(function (){
 			var newClozecard = new ClozeCard();
			newClozecard.addCard(cards[x]);
	}, 1000);
// create a for loop that loops through the flashcards and calls the function repeatedly
};
};
crateCards();

// var askClozeQuestion = function() {

// var clozeQuiz = function(count) {
//     fs.readFile('clozeLog.json', 'utf8', function(err, data) {

//         var questionData = JSON.parse(data);

      
//         if (count < questionData.length) {
//             inquire.prompt([{
//                 name: "question",
//                 message: questionData[count].front,
//                 type: "input"
//             }]).then(function(answer) {
//                 if (answer.question.toLowerCase() === questionData[count].back.toLowerCase()) {
//                     console.log('Correct');
//                     correct++;
//                     count++;
//                     basicQuiz(count);
//                 } else {
//                     console.log('Incorrect');
//                     incorrect++;
//                     console.log("The correct answer is: " + questionData[count].back);
//                     count++;
//                     basicQuiz(count);
//                 }
//             })
//         } else {
//             showScore();
//             pickMode();
//         }

//     });
// };



var askClozeQuestion = function(){

	var theClozeQuestion = function(){
		// if (count < 5) {
			fs.readFile('clozeLog.json', 'utf8', function(err, data) {

				var questionData = JSON.parse(data);
				for (i = 0; i < questionData.length; i++) {
					console.log(questionData[i]);
				}
			});
		// };	
	};
// 			 inquirer.prompt([
// 		      {
// 		        name: "name",
// 		        message: newClozecard.Clozecardarray[count].partial,
// 		      }, 
// 		    ]).then(function(answers) {
// 		        if (answers.name === newClozecard.Clozecardarray[count].cloze) {
// 		        	console.log("correct!");
// 		        	console.log(newClozecard.Clozecardarray[count].full)
// 		        	correct++;
		        	
// 		        }else{
// 		        	console.log("Incorrect!");
// 		        	incorrect++;
// 		        }
// 		        count++;
// 		    	askClozeQuestion();

// 		 	 });
// 	    }
// 	    else{
// 	    	console.log("Game Over!");
// 	    	if (correct > incorrect) {
// 	    		console.log("You Won!");
// 	    	}
// 	    	else{
// 		    	console.log("You Lost!");
// 		    }
// // ask to play again
// 		    // inquirer.prompt([
// 		    // {
// 		    //     name: "name",
// 		    //     message: "Play Again?",
// 		    // }, 
// 		    // ]).then(function(answers) {
// 		    // 	if (answers.name === "Yes" || "yes") {
// 		    // 		count = 0;
// 		    // 		correct = 0;
// 		    // 		incorrect = 0;
// 		    // 		askBasicQuestion();

// 		    // 	}
// 	    	//    });
// 		}
//     }
    theClozeQuestion();
}




switch(type){
	case "Basic": 
	askBasicQuestion();
    break;
    case "Cloze": 
	askClozeQuestion();
    break;
};

