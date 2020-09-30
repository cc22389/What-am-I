var seconds = document.getElementById("seconds");
var getStarted = document.getElementById("btn-block");
var questions = document.getElementsByClassName("question");
var intro = document.getElementById("question-intro");

var correctAnswers = document.getElementsByClassName("correct-answer");
var wrongAnswers = document.getElementsByClassName("wrong-answer");

var nextQuestion = 0;
var gameOver = false;
var timerInterval;
var secondsLeft = 90;

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        seconds.textContent = "Time left : " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);
}

getStarted.addEventListener("click", function () {
    // start the timer & update text
    setTime();
    // show question 1
    var question1 = questions.item(0);
    question1.classList.remove("hidden");
    intro.classList.add("hidden");
    nextQuestion++;
});

for (var i = 0; i < correctAnswers.length; i++) {
    correctAnswers.item(i).addEventListener("click", function () {
        handleCorrectAnswer();
    });
}
for (var i = 0; i < wrongAnswers.length; i++) {
    wrongAnswers.item(i).addEventListener("click", function () {
        handleWrongAnswer();
    });
}

function handleCorrectAnswer() {
    questions.item(nextQuestion - 1).classList.add("hidden");
    var next = questions.item(nextQuestion);
    if (next) {
        next.classList.remove("hidden");
    }
    nextQuestion++;

    gameOver = nextQuestion > questions.length;
    console.log(nextQuestion);
    if (gameOver) {
        endGame();
    }
}

function handleWrongAnswer() {
    questions.item(nextQuestion - 1).classList.add("hidden");
    var next = questions.item(nextQuestion);
    if (next) {
        next.classList.remove("hidden");
    }
    nextQuestion++;
    secondsLeft = secondsLeft - 15;

    gameOver = nextQuestion > questions.length;

    if (gameOver) {
        endGame();
    }
}

// localStorage.setItem('Luke', 5);
// var five = localStorage.getItem('Luke');


function endGame() {
    // stop timer
    clearInterval(timerInterval);

    // remember the score (local storage)
    localStorage.setItem("secondsLeft", secondsLeft);
    // direct user to the scores page
    window.location.href = "highscores.html";
}
