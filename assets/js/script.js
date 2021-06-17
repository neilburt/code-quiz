const home = document.getElementById('start')
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const answers = document.getElementById('answers');
// const answer1 = document.getElementById("#answer1");
// const answer2 = document.getElementById("#answer2");
// const answer3 = document.getElementById("#answer3");
// const answer4 = document.getElementById("#answer4");
const results = document.getElementById('results');
const backBtn = document.getElementById('back');
const resultsBtn = document.getElementById('results-button');
const startBtn = document.getElementById('start-button');
const timer = document.getElementById('timer');
const container = document.querySelector('.container');
const hidden = document.querySelector('.hidden');
const button = document.querySelector('.btn');

var timeInterval;

let questions = [{
  question: "What's your name?",
  answer1: "Randall",
  answer2: "Geoffrey",
  answer3: "Poncey",
  answer4: "Jasper"},
  {
  question: "What's your quest?",
  answer1: "Beer run.",
  answer2: "Gotta poop.",
  answer3: "Stop Ganon.",
  answer4: "Go on a walk."},
  {
  question: "What's your favorite color?",
  answer1: "Chartreuse",
  answer2: "Viridian",
  answer3: "Mauve",
  answer4: "Puce"
}];

function countdown() {
  var timeLeft = 90;

  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";
      
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timer.textContent = '';
      
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

startBtn.addEventListener("click", startQuiz);

resultsBtn.addEventListener("click", viewScores);

backBtn.addEventListener("click", quizHome);

function startQuiz() {
  clearInterval(timeInterval);
  countdown();
  home.classList.add('hidden');
  quiz.classList.remove('hidden');
}

function viewScores() {
  home.classList.add('hidden');
  resultsBtn.classList.add('hidden');
  results.classList.remove('hidden');
}

function quizHome() {
  location.reload();
}

function nextQuestion() {

}

function answerSelect() {

}

function gameOver() {

}