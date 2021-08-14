var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = []

console.log(buttonColours);
console.log(gamePattern);

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

console.log(gamePattern);
