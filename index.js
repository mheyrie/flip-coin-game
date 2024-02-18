const coinHead = document.querySelector(".head").addEventListener("click", firstFunct)
const coinTail = document.querySelector(".tail").addEventListener("click", secondFunct)
const resultWord = document.querySelector(".result-word")
const display = document.querySelector(".display-moves")
const score = document.querySelector(".scores")

let win = "YOU WIN"
let loss = "YOU LOSE"

function firstFunct(){
    const randomNumber = Math.random()
    const result = (randomNumber>0 && randomNumber<0.5) ? "Head" : "Tail"
    resultWord.textContent = `You: Head || Computer:${result}`
    const guess = (result === "Head") ? `${win}` : `${loss}`
    display.textContent = `${guess}`
   
}

function secondFunct(){
    const randomNumber = Math.random()
    const result = (randomNumber>=0.5) ? "Tail" : "Head"
    resultWord.textContent = `You: Tail || Computer:${result}`
    const guess = (result === "Tail") ? `${win}` : `${loss}`
    display.textContent = `${guess}`

}