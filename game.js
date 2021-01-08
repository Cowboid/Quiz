const question = document.querySelector(".question");
const choices = Array.from(document.getElementsByClassName("choice"));
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score");
const bar = document.querySelector(".bar");

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];

//EVENT LISTENERS
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        let selectedChoice = e.target;
        let selectedAnswer = selectedChoice.dataset["number"];
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        selectedChoice.parentElement.classList.add(classToApply);


        setTimeout( ()=> {
            selectedChoice.parentElement.classList.remove(classToApply);
            if (classToApply === "correct") {
                scoreText.innerText = score += correct_bonus;
            }
            getQuestion();
        }, 1000);

    });
});

//VARIABLES
let questionsCopy;
let questionCounter = 0;
let score = 0;
const maxQuestions = 3;
let acceptingAnswers = false;
let currentQuestion;
//constants
const correct_bonus = 10;

startGame = () => {
    questionsCopy = [...questions];
    questionCounter = 0;
    getQuestion();
}

getQuestion = () => {
    if (questionsCopy.length === 0 || questionCounter >= maxQuestions) {
        localStorage.setItem("latestScore", score);
        return window.location.assign("./end.html");
    }
    questionCounter++;
    //update progress
    questionCounterText.innerHTML = "Question: " + questionCounter + "/" + maxQuestions;
    bar.style.width = (questionCounter / maxQuestions * 100) + "%";

    let questionIndex = Math.floor(Math.random() * questionsCopy.length);
    currentQuestion = questionsCopy[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        let dataNumber = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + dataNumber];
    })
    //splice out the question we already use
    questionsCopy.splice(questionIndex, 1);
    console.log(questionsCopy);
    acceptingAnswers = true;
}

checkAnswer = () => {
    console.log(selectedChoice);
}

startGame()