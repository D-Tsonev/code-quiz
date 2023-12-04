
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
let timeLeft=60

// number of questions 
console.log(quizLength)




function generateQuizQuestion() {
  // Current question object
  const currentQuestion = questionsObject[0];
  console.log(currentQuestion.A)

  // The question title
  questionTitle.textContent = currentQuestion.question;

  // Creating buttons with options (A,B,C)
  for (let option of ["A", "B", "C"]) {
    const optionElement = document.createElement("button");
    optionElement.textContent = currentQuestion[option];
    optionElement.setAttribute("data-answer", option)
    choices.appendChild(optionElement);
  }
}

function startQuiz(event) {
  event.preventDefault();
  startScreen.setAttribute("class", "hide")
  questions.setAttribute("class", "show")
  
  generateQuizQuestion()
  let timer = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(timer);
      
    } else {
      timeLeft--;
    }
    time.textContent = timeLeft;
  }, 1000);
}

// the button that starts the quiz
startButton.addEventListener('click', startQuiz)

