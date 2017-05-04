
$(document).ready(function() {

//GLOBAL VARIALBLES
//=====================================================================
var wins = 0;
var losses = 0;
var totalScore = 0;
var scoreCounter = 0;

//=====================================================================

//Now we create a function to set the Random Number selected -->this needs to display in #randomnumber

function getRandomNumber(min, max) {
   return Math.random() * (max - min) + min;
}

var randomNumber = getRandomNumber(19,120);
console.log(randomNumber);


//We also need to create a for loop that assigns values between 1-12 for each crystal image  (values remain hidden)

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

 // for (var i = 0; i < numberOptions.length; i++) {

 




//FUNCTIONS
//=====================================================================
//We need to set up so that when each crystal is clicked, its value is added to the totalScore counter
//We need to set up if/else statements that demonstrate when totalScore=RandomNumber, the wins counter increases by 1 and game resets
	//Game resets means: totalScore and scoreCounter goes back to 0, a new RandomNumber is selected, and the crystals are given new values
//else if totalScore>RandomNumber, the loss counter increases and game resets (see above)





});




