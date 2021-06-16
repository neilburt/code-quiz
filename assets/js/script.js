var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var questionText = document.getElementById("question-text");
var results = document.getElementById("results");
var resultsBtn = document.getElementById("results-button");
var startBtn = document.getElementById("start-button");
var timer = document.getElementById("timer");
var container = document.getElementsByClassName("container");
var hidden = document.getElementsByClassName("hidden");
var button = document.getElementsByClassName("btn");

function countdown() {
  var timeLeft = 90;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + ' seconds remaining';
      
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timer.textContent = '';
      
      clearInterval(timeInterval);
      
    }
  }, 1000);
}

function startQuiz() {
  
  countdown();
}

function answerSelect() {

}

function gameOver() {

}

