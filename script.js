const quizData = [
  {
    question: " Q-1 Which type of JavaScript language is ___",
    a: " Object-Oriented",
    b: " Object-Based",
    c: " Assembly-language",
    d: " High-level",
    correct: "b",
  },
  {
    question:
      "Q-2 Which one of the following also known as Conditional Expression:",
    a: " Alternative to if-else",
    b: " Switch statement",
    c: " If-then-else statement",
    d: " immediate if",
    correct: "d",
  },
  {
    question: "Q-3 In JavaScript, what is a block of statement?",
    a: " Conditional block",
    b: " block that combines a number of statements into a single compound statement",
    c: " both conditional block and a single statement",
    d: " block that contains a single statement",
    correct: "b",
  },
  {
    question:
      "Q-4 When interpreter encounters an empty statements, what it will do:",
    a: " Shows a warning",
    b: " Prompts to complete the statement",
    c: " Throws an error",
    d: " Ignores the statements",
    correct: "d",
  },
  {
    question: 'Q-5 The "function" and " var" are known as:',
    a: " Keywords",
    b: " Data types",
    c: " Declaration statements",
    d: " Prototypes",
    correct: "c",
  },
  {
    question:
      "Q-6 Which of the following variables takes precedence over the others if the names are the same?",
    a: " Global variable",
    b: " The local element",
    c: " The two of the above",
    d: " None of the above",
    correct: "b",
  },
  {
    question:
      "Q-7  Which one of the following is the correct way for calling the JavaScript code?",
    a: " Preprocessor",
    b: "Triggering Event",
    c: " RMI ",
    d: " Function/Method",
    correct: "d",
  },
  {
    question: "Q-8 Which of the following type of a variable is volatile?",
    a: " Mutable variable",
    b: " Dynamic variable",
    c: " Volatile variable",
    d: " Immutable variable",
    correct: "a",
  },
  {
    question:
      "Q-9 Which of the following option is used as hexadecimal literal beginning?",
    a: " 00",
    b: " 0x",
    c: " 0X",
    d: " Both 0x and 0X",
    correct: "d",
  },
  {
    question:
      "Q-10 In the JavaScript, which one of the following is not considered as an error:",
    a: " Syntax error",
    b: " Missing of semicolons",
    c: " Division by zero",
    d: " Missing of Bracket",
    correct: "c",
  },
];

const questionsEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const submitBtnEl = document.getElementById("submit");

let currentQuestion = 0;
let score= 0;

loadQuiz();

function loadQuiz() {
 deSelectAnswer()

  const currentQuizData = quizData[currentQuestion];
  questionsEl.innerHTML = currentQuizData.question;

  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}


function deSelectAnswer(){
    answerEls.forEach((answerEl) => {
       answerEl.checked = false
      });
}

submitBtnEl.addEventListener("click", () => {

  const answer = getSelected();

  if(answer===quizData[currentQuestion].correct){
     score++
  }

  if(answer){
    currentQuestion++;
        if (currentQuestion < quizData.length) {
          loadQuiz();
        } else {
          quiz.innerHTML= `<h2>You answered  ${score} /  ${quizData.length} correctly... </h2> <button onclick="location.reload()">Relaod</button>`
        }
      
  }
 
});
