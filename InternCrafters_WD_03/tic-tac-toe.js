// create x and o class
const X_CLASS = "x"
const O_CLASS = "o"
const win_combination = [
    [0, 1, 2], [3, 4, 5],  [6, 7, 8],
    [0, 3, 6],  [1, 4, 7],  [2, 5, 8],
    [0, 4, 8],  [2, 4, 6]
]

const cellBoard = document.querySelector(".board")
const cellElement = document.querySelectorAll(".cell")
const winMsg = document.querySelector(".winning-message")
const winTxt = document.querySelector(".winning-text")
const button = document.getElementById("restart")

let circleTurn;

startGame()

button.addEventListener('click', startGame)

function startGame() {
    circleTurn = false;
    cellElement.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.removeEventListener('click', handleClick)
     cell.addEventListener('click', handleClick, {once: true})
    })
    
    winMsg.classList.remove('show')
    hoverClass()
}

function endGame(draw) {
  if(draw) {
   winTxt.innerText = "Draw!"
  } else {
    winTxt.innerText = `${circleTurn ? "O" : "X"} Wins!`
  }
  winMsg.classList.add('show')
}

function isDraw() {
    return [...cellElement].every(cell => {
        return cell.classList.contains(X_CLASS) ||
        cell.classList.contains(O_CLASS)
    })
}

function handleClick(e){
   const cell = e.target
   const currentClass = circleTurn ? O_CLASS : X_CLASS

    // call the function to place mark 1
    placeMark(cell, currentClass)

    // Check for win
    if(checkWin(currentClass)) {
         endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        switchTurns()
        hoverClass()
    }
    
}

// function to place mark
function  placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function switchTurns() {
   circleTurn = !circleTurn
}

function hoverClass(){
  cellBoard.classList.remove(X_CLASS);
  cellBoard.classList.remove(O_CLASS);

  if(circleTurn){
    cellBoard.classList.add(O_CLASS)
  } else {
    cellBoard.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  return  win_combination.some(combination => {
    return combination.every(index => {
        return cellElement[index].classList.contains(currentClass)
    })
  })
}