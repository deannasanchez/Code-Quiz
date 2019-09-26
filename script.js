var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<script>", "<javascript>", "<scripttag>"],
        answer: "<script>"
    },
  ];

function askQuestion(index) {
    var questionObj = questions[index];
    var userAnswer = confirm(questionObj.q);
    return userAnswer;
    function inside() {
        var example = 12;
    }
}

function compareAnswers(index, uAnswer) {
    var questionObject = questions[index];
    return uAnswer === questionObject.a;
}

function testUser(index) {
    var answer = askQuestion(index);
    var isCorrect = compareAnswers(index, answer);
    if (isCorrect) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}

var btn = document.getElementById("buttonStart");

btn.addEventListener("click", function(){
    
})