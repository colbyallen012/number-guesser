
// Variables

var range = document.querySelector(".update-range"); 
var firstRange = document.getElementById("Range1");
var secondRange = document.getElementById("Range2");
var firstRangeDestination = document.querySelector(".num1");
var secondRangeDestination = document.querySelector(".num2");
var submitPlayer = document.querySelector(".submit-player");
var firstPlayer = document.getElementById("Name1");
var secondPlayer = document.getElementById("Name2");
var firstPlayerDestination = document.querySelector(".challenger1");
var secondPlayerDestination = document.querySelector(".challenger2");
var grabResetButton = document.querySelector(".reset-game");
var firstGuess = document.getElementById("Guess1");
var secondGuess = document.getElementById("Guess2");
var firstGuessDestination = document.querySelector(".challenger1-guess");
var secondGuessDestination = document.querySelector(".challenger2-guess");
var prompt1 = document.querySelector(".thats1");
var prompt2 = document.querySelector(".thats2");
// var clearGame = document.querySelector(".clear-game");
// var clearEmptyName1 = document.getElementById("Name1");
// var clearEmptyGuess1 = document.getElementById("Guess1");
// var clearEmptyName2 = document.getElementById("Name2");
// var clearEmptyGuess2 = document.getElementById("Guess2");
var randoNum;

// Event Listeners

range.addEventListener("click", updateRange);
submitPlayer.addEventListener("click", updatePlayerInfo);
// grabResetButton.addEventListener("click", resetGame);
//clearGame.addEventListener("click",clearGameField);

// This part takes the min and max range and updates it to current range. 

function updateRange(e) {
	e.preventDefault();
  firstRangeDestination.innerText = firstRange.value;
  secondRangeDestination.innerText = secondRange.value;
  randomNumber(Number(firstRange.value), Number(secondRange.value));
  // firstRange.value = "";
  // secondRange.value = "";
}

//This part generates a random number

function randomNumber(min, max) {
var randoNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randoNum);
return randoNum;
}

// This part takes the user information and their respective guess and updates it to latest score box

function updatePlayerInfo(e) {
  e.preventDefault();
  firstPlayerDestination.innerText = firstPlayer.value;
  secondPlayerDestination.innerText = secondPlayer.value;
  firstGuessDestination.innerText = firstGuess.value;
  secondGuessDestination.innerText = secondGuess.value;
  guessCheck();
}

function guessCheck() {
  if (Number(firstGuess.value) === randoNum) {
      prompt1.innerText = "BOOM!";
  } else if (Number(firstGuess.value) < randoNum) {
      prompt1.innerText = "That's too low";
  } else if (Number(firstGuess.value) > randoNum) {
      prompt1.innerText = "That's too high";
  } 
}




// //This function will make the reset button reset the game and generate a new random number

// var grabResetButton = document.querySelector(".reset-game");
// grabResetButton.addEventListener("click", resetGame);

// function resetGame(e) {
//   e.preventDefault();
//   location.reload(false);
//   generateRandomNumber();
// }

// This function clears name/guess input fields.   
function clearGameField(e) {
 e.preventDefault();
 clearEmptyName1.value = "";
 clearEmptyGuess1.value = "";
 clearEmptyName2.value = "";
 clearEmptyGuess2.value = "";
}







