
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
var clearGame = document.querySelector(".clear-game");
var clearEmptyName1 = document.getElementById("Name1");
var clearEmptyGuess1 = document.getElementById("Guess1");
var clearEmptyName2 = document.getElementById("Name2");
var clearEmptyGuess2 = document.getElementById("Guess2");
var grabResetButton = document.querySelector(".reset-game");
var firstError = document.querySelector(".error");
var winnerOne = document.querySelector(".winner1");
var winnerTwo = document.querySelector(".winner2");
var winningName1 = document.querySelector(".Name1");
var winningName2 = document.querySelector(".Name2");
var deleteCard = document.querySelector(".delete-card");
var randoNum;

// Event Listeners

range.addEventListener("click", updateRange);
submitPlayer.addEventListener("click", updatePlayerInfo);
grabResetButton.addEventListener("click", resetGame);
clearGame.addEventListener("click",clearGameField);
deleteCard.addEventListener("click", removeCard);


// Functions 

function updateRange(e) {
	e.preventDefault();
  if (firstRange.value === "" || secondRange.value === "") {
    alert("Please enter a range to play");
  } else if (Number(firstRange.value) > Number(secondRange.value)) {
    alert("Error: Your min range must be less than your max range");
  } else {
  firstRangeDestination.innerText = firstRange.value;
  secondRangeDestination.innerText = secondRange.value;
  randomNumber(Number(firstRange.value), Number(secondRange.value));
  firstRange.value = ""; 
  secondRange.value = "";
}} 

function randomNumber(min, max) {
  randoNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randoNum);
}

function updatePlayerInfo(e) {
  e.preventDefault();
   if (firstPlayer.value === "" || secondPlayer.value === ""
    || firstGuess.value === "" || secondGuess.value === "") {
    alert("Please enter your name and a guess");
  } else {
  firstPlayerDestination.innerText = firstPlayer.value;
  secondPlayerDestination.innerText = secondPlayer.value;
  firstGuessDestination.innerText = firstGuess.value;
  secondGuessDestination.innerText = secondGuess.value;
  guessCheck(Number(firstGuess.value), prompt1);
  guessCheck(Number(secondGuess.value), prompt2);
}}

function guessCheck(guess, text) {
  if (guess === randoNum) {
      text.innerText = "BOOM!";
      winningCard(winnerOne, winnerTwo, winningName1);
      winningCard(winnerTwo, winnerOne, winningName2);
  } else if (guess < randoNum) {
      text.innerText = "That's too low";
  } else if (guess > randoNum) {
      text.innerText = "That's too high";
  }
}

function resetGame(e) {
  e.preventDefault();
  location.reload(false);
  RandomNumber();
}

function clearGameField(e) {
  e.preventDefault();
  clearEmptyName1.value = "";
  clearEmptyGuess1.value = "";
  clearEmptyName2.value = "";
  clearEmptyGuess2.value = "";
}


function winningCard(showCard, hideCard, info) {
  if(prompt1.innerText === "BOOM!") {
      showCard.style.display = "block";
      hideCard.style.display = "none";
      info.innerText = firstPlayer.value + " is the";
      var faceOff = document.querySelector(".face-off");
      faceOff.innerText = firstPlayer.value + " vs.  " + secondPlayer.value;
      removeCard();
  } if(prompt2.innerText === "BOOM!") {
      showCard.style.display = "block";
      hideCard.style.display = "none";
      info.innerText = secondPlayer.value + " is the";
      var faceOff = document.querySelector(".face-off");
      faceOff.innerText = firstPlayer.value + " vs.  " + secondPlayer.value;
      removeCard();
 }
}

function removeCard(e) {
  e.preventDefault();
   winnerOne.style.display = "none";
   winnerTwo.style.display = "none";
}
  
//

 // var li = document.createElement('li');
 //  li.innerText = input.value;





