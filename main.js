// This part takes the min and max range and updates it to current range. 

var range = document.querySelector(".update-range"); 
range.addEventListener("click", updateRange);


function updateRange(e) {
	e.preventDefault();
  var firstRange = document.getElementById("Range1");
  var firstRangeDestination = document.querySelector(".num1");
  var secondRange = document.getElementById("Range2");
  var secondRangeDestination = document.querySelector(".num2");
  firstRangeDestination.innerText = firstRange.value;
  secondRangeDestination.innerText = secondRange.value;
}

//

// This part takes the user information and their respective guess and updates it to latest score box

var submitPlayer = document.querySelector(".submit-player");
submitPlayer.addEventListener("click", updatePlayerInfo);
submitPlayer.addEventListener("click", updatePlayerGuess);


function updatePlayerInfo(e) {
  e.preventDefault();
  var firstPlayer = document.getElementById("Name1");
  var firstPlayerDestination = document.querySelector(".challenger1");
  var secondPlayer = document.getElementById("Name2");
  var secondPlayerDestination = document.querySelector(".challenger2");
  firstPlayerDestination.innerText = firstPlayer.value;
  secondPlayerDestination.innerText = secondPlayer.value;


}

function updatePlayerGuess(e) {
  e.preventDefault();
  var firstGuess = document.getElementById("Guess1");
  var firstGuessDestination = document.querySelector(".challenger1-guess");
  var secondGuess = document.getElementById("Guess2");
  var secondGuessDestination = document.querySelector(".challenger2-guess");
  firstGuessDestination.innerText = firstGuess.value;
  secondGuessDestination.innerText = secondGuess.value;

}


// This takes the game range determined by the players and generates a random number from it;

var getNum1 = document.querySelector(".num1");
var getNum2 = document.querySelector(".num2");

var nowNum1 = Number(getNum1);
var nowNum2 = Number(getNum2);

var final = Math.floor(Math.random() * (nowNum2) + nowNum1);


//




