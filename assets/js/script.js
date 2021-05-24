var quizData = [
    { 
        question: 'Who was the first Pokemon??',
        a: 'Mew',
        b: 'Bulbasaur',
        c: 'Arceus',
        d: 'Rhydon',
        correct: 'd'
    }, 
    {
        question: 'Which of these Pokemon was the first to be banned to Ubers?',
        a: 'Blaziken',
        b: 'Wobbuffet',
        c: 'Kyogre',
        d: 'Wynaut',
        correct: 'b'
    },  
    {
        question: 'Which of these Pokemon has seen usage in every tier?',
        a: 'Quagsire',
        b: 'Slowbro',
        c: 'Seaking',
        d: 'Snorlax',
        correct: 'a'
    },  
    {
        question: 'What is your name?',
        a: 'Tony',
        b: 'Frank',
        c: 'Gary',
        d: 'Blue',
        correct: 'd'
    }, 
    {
        question: 'What is your age?',
        a: '12',
        b: '21',
      c: '22',
        d: '19',
        correct: 'b'
    }
];

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

function setTimer() {

    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "Time's up!";
    mainEl.appendChild(imgEl);
  
  }

var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var enterBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    var currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
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

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

enterBtn.addEventListener("click", () => {
    
    var answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                
            `;
        }
    }
});