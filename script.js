//~~~~~~~~~~~~Variables:~~~~~~~~~~//
var startbtn = document.getElementById("buttonStart");
var quesArea = document.getElementById("questionsArea");
var starting = document.querySelector(".startPage");
var ansArea = document.querySelector(".answersArea");
var timer = document.getElementById("timer");
var results = document.getElementById("results");
var nextbtn = document.getElementById("nextbtn");

//~~~~~~~Questions:~~~~~~~~~~~~~~//
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choiceA: "strings", 
      choiceB: "booleans", 
      choiceC: "alerts", 
      choiceD: "numbers",
      answer: "C"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choiceA: "quotes", 
      choiceB: "parentheses", 
      choiceC: "curly brackets",
      choiceD: "square brackets",
      answer: "B"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choiceA: "<js>", 
        choiceB: "<script>", 
        choiceC: "<javascript>", 
        choiceD: "<scripttag>",
        answer: "B"
    },
  ];
  

startbtn.addEventListener("click", startTimer);
startbtn.addEventListener("click", startQuiz);
nextbtn.addEventListener("click", nextQ);

//~~~~Timer~~~~~~~//
function startTimer() {
    var time = 60;
    var intervalId = setInterval(function() {
        time--;
        timer.textContent = time;
        if (time === 0) {
            quesArea.innerHTML = " ";
            ansArea.innerHTML = "<h1>Time is up!</h1>";
        }
    }, 1000);
}

function postQuestions() {
  for (var i = 0; i < questions.length; i++){
     console.log(questions[i].title);
        quesArea.textContent = questions[i].title;
        ansArea.textContent = questions[i].choiceA;
        ansArea.textContent = questions[i].choiceB;
        ansArea.textContent = questions[i].choiceC;
        ansArea.textContent = questions[i].choiceD;
        nextQ();
}
}

function nextQ (){
    nextbtn.innerHTML = "<h4>Next Question</h4>";

}

function startQuiz() {
    starting.hidden = true;
    postQuestions();
}