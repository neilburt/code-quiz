let highscores = [];

let viewScores = document.getElementById('view-scores');
let timer = document.getElementById('timer');

let startPage = document.getElementById('start-page');
let startButton = document.getElementById('start-button');

let questionPage = document.getElementById('question-page');
let question = document.getElementById('questions');
let answers = document.getElementById('answers');
let feedback = document.getElementById('feedback');

let initialEnter = document.getElementById('initial-enter');
let displayScore = document.getElementById('display-score');
let initialText = document.getElementById('initial-text');
let submitInitial = document.getElementById('submit-initial');

let highscorePage = document.getElementById('highscore-page');
let highscoreContainer = document.getElementById('highscore-container');
let goBack = document.getElementById('go-back');
let clearHighscores = document.getElementById('clear-highscores');

let pageArray = [startPage, questionPage, initialEnter, highscorePage];

let questionContent = [
  question1 = {
    question: "Which of the following is NOT a primitive data type?",
    correctAns: " Object",
    answerArray: [" String", " Boolean", " Object", " Number"]
  },
  question2 = {
    question: "How does a JavaScript file name end?",
    correctAns: " .js",
    answerArray: [" .js", " .javascript", " .java", " .script"]
  },
  question3 = {
    question: "In what HTML tag can the JavaScript file reference be nested?",
    correctAns: " <head> or <body>",
    answerArray: [" <meta>", " <main>", " <footer>", " <head> or <body>"]
  },
  question4 = {
    question: "Which operator assigns value to a variable?",
    correctAns: " =",
    answerArray: [" +", " =", " -", " *"]
  }
];

viewScores.addEventListener("click", openHighscorePage);
startButton.addEventListener("click", startQuiz);
submitInitial.addEventListener("click", organizeHighscores);
clearHighscores.addEventListener("click", clearScores);
goBack.addEventListener("click", openStartPage);

function hideAll() {
  for(let i = 0; i < pageArray.length; i++) {
    if(!pageArray[i].classList.contains('hidden')) {
      pageArray[i].classList.add('hidden')
    }
  }
}

function hideTimer() {
  if(!timer.classList.contains('hidden')) {
    timer.classList.add('hidden')
  }
}

let isQuizzing = false;
let quizTime = 60;
let secondsLeft;
timer.textContent = 'Time '+ quizTime;

let questionIndex;
let finalScore = 0;
let numberCorrect;
let numberIncorrect;

function questionOrder(arr) {
  let arrIndex = [];
  for (let i= 0; i < arr.length; i++) {
    arrIndex.push(i)
  }
  return arrayShuffle(arrIndex);
}

let questionArrayOrder;

function startQuiz() {
  numberCorrect = 0;
  numberIncorrect = 0;
  questionArrayOrder = questionOrder(questionContent)

  secondsLeft = quizTime;
  isQuizzing = true;
  questionIndex = 0;
  hideAll();
  questionPage.classList.remove('hidden');

  clearQuestion();
  questionUpdater(questionContent, questionArrayOrder[questionIndex])

  let timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time "+ secondsLeft;

    if(secondsLeft < 0 || !isQuizzing) {
      clearInterval(timerInterval);
      secondsLeft = quizTime;

      if(isQuizzing){
        finalScore = 0;
        openInitialsPage();
      }
    }
  }, 1000);
}

function openInitialsPage() {
  hideTimer();

  if(finalScore < 1 ) {
    finalScore = 0;
  }
  displayScore.textContent = finalScore;
  isQuizzing = false;
  hideAll();
  initialEnter.classList.remove('hidden');
}

function openHighscorePage() {
  hideTimer();
  isQuizzing = false;
  hideAll;
  highscorePage.classList.remove('hidden');
}

function openStartPage() {
  timer.textContent = "Time "+ secondsLeft;
  timer.classList.remove('hidden');
  isQuizzing = false;
  hideAll();
  startPage.classList.remove('hidden');
}

function arrayShuffle(arr) {
  return arr.sort(() => Math.random() -0.5);
}

function questionUpdater(array, index) {
  question.textContent = array[index].question;
  let ans;
  let but;
  let currentAnswerArray = arrayShuffle(array[index].answerArray);

  for(let i = 0; i < currentAnswerArray.length; i++) {
    ans = document.createElement('LI');
    but = document.createElement('button');

    ans.appendChild(but);
    but.textContent = i + 1 + ". " + currentAnswerArray[i];

    ans.addEventListener("click", questionController);

    answers.appendChild(ans);
  }
}

function questionController(event){
  if(event.target.textContent.substring(3) == questionContent[questionArrayOrder[questionIndex]].correctAns) {
    feedback.textContent ="Correct";
    numberCorrect++;
  } else {
    feedback.textContent = "Incorrect";
    secondsLeft -= 5;
    numberIncorrect;
  }
  timer.textContent ="Time "+ secondsLeft;
  setTimeout(function() {
    feedback.textContent = ""
  }, 1000)

  clearQuestion();

  questionIndex++;

  if(questionIndex < questionContent.length) {
    questionUpdater(questionContent, questionArrayOrder[questionIndex]);
  } else {
    finalScore = secondsLeft;
    openInitialsPage();
  }
}

function clearQuestion() {
  question.textContent = "";
  
  while(answers.hasChildNodes()) {
    answers.removeChild(answers.childNodes[0]);
  }
}

function addInitial(index) {
  let newHighscore = document.createElement('div');
  newHighscore.textContent = index[0] + "  ......  " + index[1];
  newHighscore.classList.add("highscoreInitials");
  highscoreContainer.appendChild(newHighscore);
}

function clearScores() {
  eraseHighscores();
  highscores =[];
}

function eraseHighscores() {
  while(highscoreContainer.hasChildNodes()) {
    highscoreContainer.removeChild(highscoreContainer.childNodes[0]);
  }
}

function organizeHighscores() {
  highscores.push([finalScore, initialText.value]);
  highscores.sort((a,b) => b[0] - a[0])

  eraseHighscores();
  for (let i = 0; i < highscores.length; i ++) {
    addInitial(highscores[i]);
  }
  openHighscorePage();
}