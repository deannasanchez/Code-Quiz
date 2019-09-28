//~~~~~~~~~~~~Variables:~~~~~~~~~~//
var startbtn = document.getElementById("buttonStart");
var quesArea = document.getElementById("questionsArea");
var starting = document.querySelector(".startPage");
var ansArea = document.querySelector(".answersArea");
var timer = document.getElementById("timer");
var results = document.getElementById("results");
var nextbtn = document.getElementById("nextbtn");
var currentQuestion = 0;
var intervalId;

//~~~~~~~~~~Questions:~~~~~~~~~~//
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "parentheses", "curly brackets", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<script>", "<javascript>", "<scripttag>"],
        answer: "<script>"
    },
  ];
  

startbtn.addEventListener("click", startTimer);
startbtn.addEventListener("click", startQuiz);
nextbtn.addEventListener("click", nextQ);

//~~~~Timer~~~~~~~//
function startTimer() {
    var time = 60;
    intervalId = setInterval(function() {
        time--;
        timer.textContent = time;
        if (time === 0) {
            quesArea.innerHTML = " ";
            ansArea.innerHTML = "<h1>Time is up!</h1>";
            nextbtn.innerHTML = " ";
            clearInterval(intervalId);
            
        }
    }, 1000);
}


//~~~~~~~~Quiz~~~~~~~//

function postQuestions() {
    quesArea.textContent = questions[currentQuestion].title;
    var answersStr = "";
  for (var i = 0; i < questions[currentQuestion].choices.length; i++){
       
        answersStr += "<button class='answer-button' id='button' data-name='" + questions[currentQuestion].choices[i]
            + "'>" + questions[currentQuestion].choices[i] + "</button>";
        
}
ansArea.innerHTML = answersStr;
nextQ();
}

function startQuiz() {
    starting.hidden = true;
    postQuestions();
}

function nextQ (){
    nextbtn.innerHTML = "Next Question";

}

function compareAs (){
    if (questions.choices[i] == questions.answer[i]){
        results.innerHTML = "You answered correctly!";
    } else {
        results.innerHTML = "Wrong!";
    }

}

