
// Variables


var firstRange = document.getElementById("Range1");
var secondRange = document.getElementById("Range2");
var firstRangeDestination = document.querySelector(".num1");
var secondRangeDestination = document.querySelector(".num2");
var firstPlayer = document.getElementById("Name1");
var secondPlayer = document.getElementById("Name2");
var prompt1 = document.querySelector(".thats1");
var prompt2 = document.querySelector(".thats2");
var firstError = document.querySelector(".error");
var winnerOne = document.querySelector(".winner1");
var winnerTwo = document.querySelector(".winner2");
var winningName1 = document.querySelector(".Name1");
var winningName2 = document.querySelector(".Name2");
var randoNum;
var count = 0;


// Event Listeners
var range = document.querySelector(".update-range"); 
range.addEventListener("click", updateRange);

var submitPlayer = document.querySelector(".submit-player");
submitPlayer.addEventListener("click", submitGuess);

var grabResetButton = document.querySelector(".reset-game");
grabResetButton.addEventListener("click", resetGame);

var clearGame = document.querySelector(".clear-game");
clearGame.addEventListener("click",clearGameField);

var rightSide = document.querySelector(".result");
rightSide.addEventListener("click", removeCard);


// Functions 

function updateRange(e) {
	e.preventDefault();
  var error1 = document.querySelector(".error1");
  var error2 = document.querySelector(".error2");
  if (firstRange.value === "" || secondRange.value === "") {
      error1.style.display = "block";
  } else if (Number(firstRange.value) > Number(secondRange.value)) {
      error2.style.display = "block";
      error1.style.display = "none";
  } else {
    firstRangeDestination.innerText = firstRange.value;
    secondRangeDestination.innerText = secondRange.value;
    randomNumber(Number(firstRange.value), Number(secondRange.value));
    firstRange.value = ""; 
    secondRange.value = "";
    error1.style.display = "none";
    error2.style.display = "none";
  }
} 

function randomNumber(min, max) {
  randoNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randoNum);
}

function submitGuess(e) {
  e.preventDefault();
  var error3 = document.querySelector(".error3");
  var firstPlayerDestination = document.querySelector(".challenger1");
  var secondPlayerDestination = document.querySelector(".challenger2");
  var firstGuess = document.getElementById("Guess1");
  var secondGuess = document.getElementById("Guess2");
  var firstGuessDestination = document.querySelector(".challenger1-guess");
  var secondGuessDestination = document.querySelector(".challenger2-guess");
   if (firstPlayer.value === "" || secondPlayer.value === ""
    || firstGuess.value === "" || secondGuess.value === "") {
     error3.style.display = "block";
  } else {
    firstPlayerDestination.innerText = firstPlayer.value;
    secondPlayerDestination.innerText = secondPlayer.value;
    firstGuessDestination.innerText = firstGuess.value;
    secondGuessDestination.innerText = secondGuess.value;
    error3.style.display = "none";
    guessCheck(Number(firstGuess.value), prompt1);
    guessCheck(Number(secondGuess.value), prompt2);
    guessCounter();
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

function guessCounter() {
  var guessDisplay = document.querySelector(".guess1");
  count++;
  guessDisplay.innerText = "Guesses: " + count;
  console.log(count);
    }

function resetGame(e) {
  e.preventDefault();
  location.reload(false);
}

function clearGameField(e) {
  e.preventDefault();
  var clearEmptyName1 = document.getElementById("Name1");
  var clearEmptyGuess1 = document.getElementById("Guess1");
  var clearEmptyName2 = document.getElementById("Name2");
  var clearEmptyGuess2 = document.getElementById("Guess2");
  clearEmptyName1.value = "";
  clearEmptyGuess1.value = "";
  clearEmptyName2.value = "";
  clearEmptyGuess2.value = "";
}


function winningCard(showCard, hideCard, info) {
  var faceOff = document.querySelector(".face-off1");
  var faceOff = document.querySelector(".face-off2");
  if(prompt1.innerText === "BOOM!") {
      showCard.style.display = "block";
      hideCard.style.display = "none";
      info.innerText = firstPlayer.value;
      faceOff.innerText = firstPlayer.value + " vs.  " + secondPlayer.value;
  } else if (prompt2.innerText === "BOOM!") {
      showCard.style.display = "block";
      hideCard.style.display = "none";
      info.innerText = secondPlayer.value;
      faceOff.innerText = firstPlayer.value + " vs.  " + secondPlayer.value;
 }
}

function removeCard(e) {
  if (e.target.classList.contains('delete-card1')) {
    e.target.parentElement.parentElement.parentElement.remove();
  } else if (e.target.classList.contains('delete-card2')) {
    e.target.parentElement.parentElement.parentElement.remove();
}}
  


