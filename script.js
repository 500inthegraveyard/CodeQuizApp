

// start the game by button click the timer starts
// TODO: hide start button  // startButton.classList.add('hide')
    // questionContainerElement.classList.remove('hide')

// bring up the set of questions with new choices

// have a feature at the bottom that says if its right or wrong

// present the user with the next question

// have a counter of how many questions are right

// have a countdown timer

//  if user misses a question then time is subtracted from the total time

// the game ends when all questions are answered or the timer runs out.

// have a box prompt(maybe) where the user can enter initials into and it saves

var startButton = document.getElementById("start-btn")
var questionElement = documnet.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")


startButton.addEventListener("click" , startGame)


function startGame () {
    
    console.log("started")
    
    setnextQuestion()
    

}


var count = 30;
var interval = setInterval(function(){
  document.getElementById('start-btn').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('start-btn').innerHTML='Done';
   
  }
}, 1000);




function setnextQuestion () {
    resetState()
    showQuestion(shuffleQuestions [currentQuestionIndex])

}

function showQuestion(question){
    questionElement.inntext = question.question
    question.answers.forEach (answer => {
        var button = documnet.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click" , selectAwnser)
        answerButtonsElement.appendChild(button)

    })

}

function resetState()
function selectAwnser () {


}


var questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        answers: [
            {text:"<script>" , correct: true},
            {text:"<js>" , correct: false },
            {text:"<scripting>" , correct: false },
            {text: "<javascript>" , correct: false },
        ]
    }

    {
        question: "Where is the correct place to insert a Javascript?",
        answers: [
            {text:"<head> and <body>" , correct: false},
            {text:"<body>" , correct: true },
            {text:"<head>" , correct: false },
            {text: "none of the above" , correct: false },
        ]
    }

    {
        question: "Is Javascript the same as Java",
        answers: [
            {text:"Yes" , correct: false},
            {text:"No" , correct: true },
            {text:"Sometimes" , correct: false },
        
        ]
    }

    {
        question: "How do you create a function in Javascript?",
        answers: [
            {text:"function = my function" , correct: false},
            {text:"function:myfunction" , correct: true },
            {text:"function myfunction()" , correct: false },
            {text: "none of the above" , correct: false },
        ]
    }


]