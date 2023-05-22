const board = document.querySelector("#board");
const boardContainer = document.querySelector("#board-container");
const question = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const answerBtn = document.querySelectorAll(".answer-button");
const buttons = document.querySelector("#button");
const curiosities = document.querySelector(".curiosities");
const controls = document.querySelector("#controls");
const startButton = document.querySelector("#start-button");
const nextButton = document.querySelector("#next-button");
const score = document.querySelectorAll(".score");
const endMsg = document.querySelector(".endMsg");
const restartBtn = document.querySelector(".restartBtn");
const ilny = document.querySelector(".ilny");
const scoreH3 = document.querySelector(".scoreH3");
const questionTotal = document.querySelectorAll("question-total");
const slogan = document.querySelector("#slogan");
//const scoreCount = document.querySelector("#scoreCount")

const questions = [
  {
    question: "What is the most common nickname for New York City?",
    answers: [
      "Magic City",
      "The Big City",
      "The Big Apple",
      "The City That Never Sleeps",
      "Gotham City",
    ],
    correct: "The Big Apple",
    curiosities:
      "The nickname “The Big Apple” was born in the 1920s in reference to the prizes (or “big apples”) awarded at the many horse racing courses in New York at the time. The popularity of the nickname grew from there many jazz songs, reference in movies and tourism ad campains. It comes down to simply mean the best and biggest of places to be.",
  },

  {
    question: "What is 1 out of every 20 NYC residents?",
    answers: [
      "An immigrant",
      "Overweight",
      "A tourist",
      "A cab driver",
      "A millionaire",
    ],
    correct: "A millionaire",
    curiosities:
      "Currently, there are more than 300,000 millionaires in New York. As a result of this, it makes this the city with the most millionaires in the world.",
  },

  {
    question:
      "NYC subway system is the main public transportation system in New York, it has:",
    answers: [
      "212 train stations",
      "472 train stations",
      "100 train stations",
      "28 train stations",
      "154 train stations",
    ],
    correct: "472 train stations",
    curiosities:
      "NYC subway system has the largest number of public transit subway stations of any system in the world with 472 stations. It has 245 miles (or 394 km) of routes on 691 miles (or 1112 km) of track. The New York City Subway almost never closes. The trains run 24/7 all year. The system has only closed three times!",
  },

  {
    question:
      "The iconic comedy series Friends was set in NYC for more than 10 years. Where was it filmed?",
    answers: [
      "Manhattan",
      "Queens",
      "Brooklyn",
      "Upper East Side",
      "Los Angeles",
    ],
    correct: "Los Angeles",
    curiosities:
      "A shock for many! Friends was set in New York City, it turns out that very little from the show was actually filmed in NYC. Most of the scenes were shot in LA and other Warner Bros studios in California",
  },

  {
    question:
      "NYC is very diverse in culture. Although english is the main language spoken, how many others are used there?",
    answers: [
      "About 100 languages",
      "Over 800 languages",
      "Around 45 languages",
      "About 200 languages",
      "Around 20 languages",
    ],
    correct: "Over 800 languages",
    curiosities:
      "According to surveys, over 800 languages are currently used in New York. This makes it the most linguistically diverse city in the world!",
  },

  {
    question:
      "NYC is very diverse in culture. Although english is the main language spoken, how many others are used there?",
    answers: [
      "About 100 languages",
      "Over 800 languages",
      "Around 45 languages",
      "About 200 languages",
      "Around 20 languages",
    ],
    correct: "Over 800 languages",
    curiosities:
      "According to surveys, over 800 languages are currently used in New York. This makes it the most linguistically diverse city in the world!",
  },

  {
    question:
    "How many people live in Manhattan?",
    answers: [
      "1 million",
      "1,6 million",
      "2 million",
      "2,5 million",
      "500.000",
    ],
    correct: "1,6 million",
    curiosities:
    "Manhattan is one of the most densely populated locations in the world. There are 1,694,251 people living in a land area of 22.83 square miles (59.13 km2), or 72,918 residents per square mile (28,154/km2), higher than the density of any U.S. city.",
    },

    {
      question:
      "What is the tallest Building in NYC?",
      answers: [
        "The Empire State Building",
        "Central Park Tower",
        "One World Trade Center",
        "The New York Times Building",
        "Bank of America Tower",
      ],
      correct: "One World Trade Center",
      curiosities:
      "The One World Trade Center is the main building of the rebuilt World Trade Center complex in Lower Manhattan, it has a total height of 1,776 feet (541 m). Its height in feet is a deliberate reference to the year when the United States Declaration of Independence was signed. ",
      },


  
];


let scoreCount = 0;
//let cronometro = setInterval (() => {
//  timer ++;
//fazer innerText no timer
//console.log(timer);
//},1000);

//clearInterval(cronometro) - colocar o clear dentro de uma condicional
let correctAnswer = 0;
let index = 0;
let currentQuestion;
let usedQuestions = [];
questionTotal.innerText = questions.length





startButton.addEventListener("click", () => {
  boardContainer.classList.remove("hide");
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  restartBtn.classList.remove("hide");
  ilny.classList.add("hide");
  scoreH3.classList.remove("hide");
  
  

  //tudo que for feito, precisa estar aqui dentro

  startGame();
  printQuestion();
  nextButton.disabled = true
});

function startGame() {
   // embaralhar as cartas
  questions.sort(function (a, b) {
    return Math.random() - 0.5;
   
  });

  answerBtn.forEach((button) => {
    button.addEventListener("click", () => {
      checkAnswer(button);
        
    });
  });
}

function printQuestion() {
  currentQuestion = questions[index];
  question.innerText = currentQuestion.question;
  console.log(index);

  //Iterar por todos os botoes e preencher com as alternativas
  answerBtn.forEach((button, index) => {
   button.classList.remove("correctBtn")
    button.classList.remove("wrongBtn")
    button.innerText = currentQuestion.answers[index];
  });
}

function checkAnswer(button) {
  if (button.innerText === currentQuestion.correct) {
    curiosities.innerText = currentQuestion.curiosities;
    console.log(curiosities.innerText);
    curiosities.classList.remove("hide");
    scoreCount++;
    score.forEach((score) => {
      score.textContent = scoreCount;
    });

     button.classList.add("correctBtn")
    nextButton.disabled = false
    }
    else {
      button.classList.add("wrongBtn")
      display();
      }
      

}

display();
//mostrar a primeira pergunta corretamente | pensar em como inserir alternativa/qual o usuario clicou | conferir/comparar a altenativa correta ou errada | mostrar a curiosidade
function display() {
  nextButton.addEventListener("click", () => {
    index++;
    
    curiosities.innerText = "";
    curiosities.classList.add("hide");
    if (index >= questions.length) {
      boardContainer.classList.add("hide");
      nextButton.classList.add("hide");
      endMsg.classList.remove("hide");
      scoreH3.classList.add("hide");
      slogan.classList.add("hide");
            
      console.log(index);
    }
    printQuestion();
  });


}
