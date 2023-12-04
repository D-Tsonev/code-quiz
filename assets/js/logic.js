
//  getting DOM elements
const time = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const startButton = document.querySelector("#start");
const questions = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const submitBtn = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");

function showQuestion() {
  questionTitle.textContent = questionsObject[0].question;
  const ulEl = document.createElement('ul')
  

  

  // const ulEl = document.createElement('ul')
  // const choices Arr
}

questionTitle.textContent = questionsObject[0].question;
console.log(questionTitle)