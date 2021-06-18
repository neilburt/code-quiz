const home = document.getElementById('start')
const quiz = document.getElementById('quiz');
const question1El = document.getElementById('question1');
const question2El = document.getElementById('question2');
const question3El = document.getElementById('question3');
const answerBtnA = document.getElementById("btnA");
const answerBtnB = document.getElementById("btnB");
const answerBtnC = document.getElementById("btnC");
const answerBtnD = document.getElementById("btnD");
const answerBtnE = document.getElementById("btnE");
const answerBtnF = document.getElementById("btnF");
const answerBtnG = document.getElementById("btnG");
const answerBtnH = document.getElementById("btnH");
const answerBtnI = document.getElementById("btnI");
const answerBtnJ = document.getElementById("btnJ");
const answerBtnK = document.getElementById("btnK");
const answerBtnL = document.getElementById("btnL");
const answersEl = document.getElementById('answers');
const results = document.getElementById('results');
const backBtn = document.getElementById('back');
const resultsBtn = document.getElementById('results-button');
const startBtn = document.getElementById('start-button');
const timer = document.getElementById('timer');
const container = document.querySelector('.container');
const hidden = document.querySelector('.hidden');

const question1Btn = [answerBtnA, answerBtnB, answerBtnC, answerBtnD];

var timeInterval;
var randomQuestions;
var questionIndex;
var timeLeft = 30;


// const questions = [
//   {question: "What's your name?",
//   answer: [{option: "Randall", correct: false}],
//   answer: [{option: "Geoffrey", correct: false}],
//   answer: [{option: "Poncey", correct: true}],
//   answer: [{option: "Jasper", correct: false}]},
  
//   {question: "What's your quest?",
//   answer: [{option: "Beer run.", correct: false}],
//   answer: [{option: "Bathroom.", correct: true}],
//   answer: [{option: "Stop Ganon.", correct: false}],
//   answer: [{option: "Go on a walk.", correct: false}]},
  
//   {question: "What's your favorite color?",
//   answer: [{option: "Chartreuse", correct: false}],
//   answer: [{option: "Viridian", correct: false}],
//   answer: [{option: "Mauve", correct: false}],
//   answer: [{option: "Puce", correct: true}]}
// ];

function countdown() {


  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";
      
      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timer.textContent = 'Game Over';
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

function startQuiz() {
  clearInterval(timeInterval);
  countdown();
  home.classList.add('hidden');
  question1El.classList.remove('hidden');
}



function answerQuestion1c() {
  question1El.classList.add('hidden');
  question2El.classList.remove('hidden');
}

function answerQuestion1i() {
  question1El.classList.add('hidden');
  question2El.classList.remove('hidden');
  timeLeft-10;
}

function answerQuestion2c() {
  question2El.classList.add('hidden');
  question3El.classList.remove('hidden');
}

function answerQuestion2i() {
  question2El.classList.add('hidden');
  question3El.classList.remove('hidden');
  timeLeft-10;
}

function answerQuestion3c() {
  question3El.classList.add('hidden');
  results.classList.remove('hidden');
}

function answerQuestion3i() {
  question3El.classList.add('hidden');
  results.classList.remove('hidden');
  timeLeft-10;
}

function gameOver() {
  question1El.classList.add('hidden');
  question2El.classList.add('hidden');
  question3El.classList.add('hidden');
  results.classList.remove('hidden');
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
  
  // setUp(randomQuestions[questionIndex]);
}

function answerSelect() {

}

answerBtnA.addEventListener("click", answerQuestion1c);
answerBtnB.addEventListener("click", answerQuestion1i);
answerBtnC.addEventListener("click", answerQuestion1i);
answerBtnD.addEventListener("click", answerQuestion1i);
answerBtnE.addEventListener("click", answerQuestion2i);
answerBtnF.addEventListener("click", answerQuestion2c);
answerBtnG.addEventListener("click", answerQuestion2i);
answerBtnH.addEventListener("click", answerQuestion2i);
answerBtnI.addEventListener("click", answerQuestion3i);
answerBtnJ.addEventListener("click", answerQuestion3i);
answerBtnK.addEventListener("click", answerQuestion3c);
answerBtnL.addEventListener("click", answerQuestion3i);

startBtn.addEventListener("click", startQuiz);

resultsBtn.addEventListener("click", viewScores);

backBtn.addEventListener("click", quizHome);