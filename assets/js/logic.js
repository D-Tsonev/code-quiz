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
const initials = document.querySelector("#initials")




const quizLength = questionsObject.length
let timeLeft=60
let score = 0

// start from first question 
let currentQuestionIndex = 0

// selected by the user answer 
const answer = document.querySelector("data-answer")

// number of questions 
console.log(quizLength)

// current question Object
let currentQuestion = questionsObject[currentQuestionIndex];
console.log(currentQuestion)


// Generate question and options ans storing the selected value by the user
function generateQuizQuestion() {
  
  // The question title
  questionTitle.textContent = currentQuestion.question;

  choices.textContent = ""

  // Creating buttons with options (A,B,C)
  for (let choice of ["A", "B", "C"]) {
    let choiceButton = document.createElement("button");
    choiceButton.textContent = currentQuestion[choice];
    choices.appendChild(choiceButton);

    choiceButton.addEventListener("click", function(){
      checkAnswer(choice)
    })
  }
}


function checkAnswer(userChoice) {
  let correct = currentQuestion.answer;

  if (userChoice === correct) {
    score++;
    feedback.classList.remove("hide")
    console.log('correct', score);
    feedback.textContent = "Correct"
  } else {
    timeLeft -10 
    console.log('wrong',score);
    feedback.classList.remove("hide")
    feedback.textContent = "Wrong"
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < quizLength) {
    currentQuestion = questionsObject[currentQuestionIndex];
    generateQuizQuestion();
  } else {
    console.log('Quiz finished. Final score: ', score);

  }
}


function startQuiz(event) {
  event.preventDefault();
  startScreen.setAttribute("class", "hide")
  questions.classList.remove("hide")
  
  generateQuizQuestion()
  let timer = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz()
    } else {
      timeLeft--;
    }
    time.textContent = timeLeft;
  }, 1000);
}

// the button that starts the quiz
startButton.addEventListener('click', startQuiz)


// function that ends the Quiz
function endQuiz() {
  timeLeft = 0;
  time.textContent = timeLeft
  finalScore.textContent = score
  questions.setAttribute("class", "hide");
  // submitBtn.addEventListener("click", showScore)

}



// need to save the highScore in Local Storage 
// user initials, 
function showScore(){
  
}