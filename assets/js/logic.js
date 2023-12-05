
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
let score = 0
let currentQuestionIndex = 0

// selected by the user answer 
const answer = document.querySelector("data-answer")

// number of questions 
console.log(quizLength)

// current question Object
let currentQuestion = questionsObject[currentQuestionIndex];
console.log(currentQuestion)

// correct Answer 

// console.log(correct)


// Generate question and options ans storing the selected value by the user
function generateQuizQuestion() {
  
  // The question title
  questionTitle.textContent = currentQuestion.question;

  choices.textContent = ""

  // Creating buttons with options (A,B,C)
  for (let choice of ["A", "B", "C"]) {
    let choiceButton = document.createElement("button");
    choiceButton.textContent = currentQuestion[choice];
    choiceButton.setAttribute("data-answer", choice)

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
    console.log('Correct answer!');
  } else {
    console.log('Incorrect answer!');
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
  questions.setAttribute("class", "show")
  
  generateQuizQuestion()
  let timer = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(timer);
      
    } else {
      timeLeft--;
    }
    time.textContent = timeLeft;
  }, 60);
}

// the button that starts the quiz
startButton.addEventListener('click', startQuiz)

// function that ends the Quiz
function endQuiz() {
  timeLeft = 0;
  time.textContent = timeLeft
  questions.setAttribute("class", "hide");
  // endScreen.setAttribute('class','start')
}

