const coinHead = document.querySelector(".head").addEventListener("click", firstFunct)
const coinTail = document.querySelector(".tail").addEventListener("click", secondFunct)
const resultWord = document.querySelector(".result-word")
const display = document.querySelector(".display-moves")
const score = document.querySelector(".scores")
const reset = document.querySelector(".reset-btn").addEventListener("click", resetFunct)

let showScore = JSON.parse(localStorage.getItem("showScore")) || {
    wins:0,
    losses:0
};

function playGame(guess){
    const randomNumber = Math.random()
    const result = (randomNumber<0.5) ? "Head" : "Tail"

    display.textContent = `You: ${guess} || Computer:${result}`
    if(guess === result){
        showScore.wins++
        score.textContent = `Wins: ${showScore.wins} Losses: ${showScore.losses}`
        resultWord.textContent = "YOU WIN"
    }else{
        showScore.losses++
        score.textContent = `Wins: ${showScore.wins} | Losses: ${showScore.losses}`
        resultWord.textContent = "YOU LOSE"
    }

    localStorage.setItem("showScore", JSON.stringify(showScore))
}

function firstFunct(){
    playGame("Head")
}

function secondFunct(){
    playGame("Tail")
}

function resetFunct(){
    showScore = {
        wins:0,
        losses:0
    };
    localStorage.setItem("showScore", JSON.stringify(showScore));
    score.textContent = `Wins: ${showScore.wins} | Losses: ${showScore.losses}`;
    resultWord.textContent = "";
    display.textContent = "Click any of the image to begin";
}