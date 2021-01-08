//SELECTORS
const usernameInput = document.getElementById("username-input");
const latestScore1 = localStorage.getItem("latestScore");
const scoreText = document.getElementById("score-text");

//EVENT LISTENERS


scoreText.textContent = latestScore1;
const scoresArray = localStorage.getItem("scoreList") ? JSON.parse(localStorage.getItem("scoreList")) : [];

//FUNCTIONS
function validate() {
    if (usernameInput.value.length === 0) {
        usernameInput.focus();
        usernameInput.style.background = "lightblue";
        return false;
    }
    else {
        saveScore();
    }
}

function saveScore() {
    const user = {
        username: usernameInput.value,
        score: latestScore1
    }
    scoresArray.sort((a, b) => b.score - a.score);
    scoresArray.splice(5);
    scoresArray.push(user);
    localStorage.setItem("scoreList", JSON.stringify(scoresArray));
    window.location.assign("./index.html");
}

console.log(scoresArray);