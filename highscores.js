//SELECTORS
const hcList = document.getElementById("hc-list");
const scoreList = JSON.parse(localStorage.getItem("scoreList"));


scoreList.forEach(element => {
    const newLi = document.createElement("LI");
    newLi.innerHTML = element.username + " - " + element.score;
    hcList.appendChild(newLi);
});

//FUNCTIONS
 console.log(scoreList);
