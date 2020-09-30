// variable for "secondsLeft" from local storage.
var secondsLeft = localStorage.getItem("secondsLeft");

var allScores = JSON.parse(localStorage.getItem("allScores"))
if (!allScores) {
  allScores = [];
}
console.log(allScores);
showAllScores();

document.getElementById("btn-block").addEventListener("click", function () {
  var input = document.getElementById("initials");
  var initials = input.value;
  var newScore = { initials: initials, secondsLeft: secondsLeft };
  allScores.push(newScore);
  localStorage.setItem("allScores", JSON.stringify(allScores));
  showAllScores();
});

function showAllScores() {
  var highScoreTracker = document.getElementById("highScore-tracker");
  for (var i = 0; i < allScores.length; i++) {
    var score = allScores[i];
    console.log({score});
    var liElem = document.createElement("li");
    liElem.textContent = score.initials + " - " + score.secondsLeft;
    highScoreTracker.appendChild(liElem);
  }
}