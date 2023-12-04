
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

const quizLength = questionsObject.length
// number of questions 
console.log(quizLength)




function generateQuizQuestion() {

  // Current question object
  const currentQuestion = questionsObject[0];
  console.log(currentQuestion.A)

  // The question title
  questionTitle.textContent = currentQuestion.question;

  // a buttons with options

  for (let option of ["A", "B", "C"]) {
    const optionElement = document.createElement("button");
    optionElement.textContent = currentQuestion[option];
    optionElement.setAttribute("data-answer", option)
    choices.appendChild(optionElement);
  }
}

