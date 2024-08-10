const reset = document.querySelector(".reset");
const play = document.querySelector(".play");
const lap = document.querySelector(".lap");
const clear = document.querySelector(".laps-clear");
const hrs = document.querySelector(".hrs");
const min = document.querySelector(".min");
const second = document.querySelector(".sec");
const milliSecond = document.querySelector(".msec");
const laps = document.querySelector(".laps");

let isPlay = false;
let startTime, elapsedTime = 0, timerInterval;

let hrsCounter = 0;
let minCounter = 0;
let secCounter = 0;
let SecsCounter = 0; 
let lapItem = 0;
let isReset = false;

function toggleBtn() {
    lap.classList.toggle("hide", !isPlay);
    reset.classList.toggle("hide", !isPlay);
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    // Convert milliseconds to hours, minutes, seconds, and milliseconds
    hrsCounter = Math.floor((elapsedTime / (3600 * 1000)) % 24);
    minCounter = Math.floor((elapsedTime / (60 * 1000)) % 60);
    secCounter = Math.floor((elapsedTime / 1000) % 60);
    SecsCounter = Math.floor((elapsedTime % 1000) / 10);

    // Update the DOM elements
    hrs.innerHTML = `${hrsCounter}:`;
    min.innerHTML = `${minCounter}:`;
    second.innerHTML = `${secCounter} `;
    milliSecond.innerHTML = `${SecsCounter}`;
}

function playBtn() {
    if (!isPlay) {
        play.innerHTML = 'Pause';
        startTime = Date.now() - elapsedTime; // Adjust start time
        timerInterval = setInterval(updateTime, 10);
        isPlay = true;
        isReset = true;
    } else {
        play.innerHTML = 'Play';
        clearInterval(timerInterval);
        isPlay = false;
        isReset = false;
    }
    toggleBtn();
}

const resetBtn = () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isReset = true;
    hrsCounter = 0;
    minCounter = 0;
    secCounter = 0;
    SecsCounter = 0;

    hrs.innerHTML = "0:";
    min.innerHTML = "0:";
    second.innerHTML = "0";
    milliSecond.innerHTML = "0";

    play.innerHTML = 'Play';
    toggleBtn();
}

const Lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class", "lap-interval");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time-stamp");

    number.innerText = `#${++lapItem} `;
    timeStamp.innerHTML = ` ${hrsCounter} : ${minCounter} : ${secCounter} : ${SecsCounter}`;

    li.append(number, timeStamp);
    laps.append(li);

    clear.classList.remove("hide");
}

const clearAll = () => {
    laps.innerHTML = '';
    laps.append(clear);
    clear.classList.add("hide");
    lapItem = 0;
}

play.addEventListener("click", playBtn);
reset.addEventListener("click", resetBtn);
lap.addEventListener("click", Lap);
clear.addEventListener("click", clearAll);















// // DOM MANIPULATION
// const reset = document.querySelector(".reset")
// const play = document.querySelector(".play")
// const lap = document.querySelector(".lap")
// const clear = document.querySelector(".laps-clear")
// const hrs = document.querySelector(".hrs")
// const min = document.querySelector(".min")
// const second = document.querySelector(".sec")
// const milliSecond = document.querySelector(".msec")
// const laps = document.querySelector(".laps")

// // (a boolean use to check if the stopwatch is running or not)
// let isPlay = false;

// // Setting the hours counter to zero and initializing hours
// let hours;
// let hrsCounter = 0;

// //  (minCounter keeps track of minutes.)
// let minutes;
// let minCounter = 0

// // (secCounter keeps track of seconds.)
// let sec;
// let secCounter = 0;

// // (SecsCounter keeps track of milliseconds.)
// let Secs;
// let SecsCounter = 0; 

// //(lapItem counts the number of laps.)
// let lapItem = 0;

// // (isReset is a boolean to check if the reset button is clicked.)
// let isReset = false;

// //(This function shows or hides the lap and reset buttons based on whether the stopwatch is running (isPlay).)
// function toggleBtn() {
//     lap.classList.toggle("hide", !isPlay)
//     reset.classList.toggle("hide", !isPlay)
// }

// // (This function controls the start and stop of the stopwatch. 
// // If not running, it starts the intervals to update minutes,
// //  seconds, and milliseconds. If running, it stops the intervals.)
// function playBtn() {
//     if (!isPlay && reset) {
//         play.innerHTML = 'Pause'

//         hours = setInterval(() => {
//             if (hrsCounter === 24) {
//                 hrsCounter = 0;
//             }
//             hrs.innerHTML = `${++hrsCounter}:  `;
//         }, 3600 * 1000);

//         minutes = setInterval(() => {
//             if (minCounter === 60) {
//                 minCounter = 0;
//             }
//             min.innerHTML = `${++minCounter}:  `
//         }, 60 * 1000)

//         sec = setInterval(() => {
//             if (secCounter === 60) {
//                 secCounter = 0
//             }
//             second.innerHTML = `${secCounter++} `
//         }, 1000)

//         Secs = setInterval(() => {
//             if (SecsCounter === 100) {
//                 SecsCounter = 0
//             }
//             milliSecond.innerHTML = `${++SecsCounter}`
//         }, 10)

//         isPlay = true
//         isReset = true
//     } else {
//         play.innerHTML = 'Play'

//         clearInterval(hours);
//         clearInterval(minutes)
//         clearInterval(sec)
//         clearInterval(Secs)
//         isPlay = false
//         isReset = false
//     }
//     // 
//     toggleBtn()
// }

// // This function resets the stopwatch and hides the lap 
// // and reset buttons. It stops the intervals and resets the 
// // displayed time to 0.
// const resetBtn = () => {
//     isReset = true;
//     playBtn()
//     lap.classList.add("hide");
//     reset.classList.add("hide")

//     hrs.innerHTML = "0:";
//     min.innerHTML = "0:"
//     second.innerHTML = "0"
//     milliSecond.innerHTML = "0"
// }

// // This function records the current time as a lap. 
// // It creates new HTML elements, sets their content to 
// // the current time, and appends them to the laps list.
// const Lap = () => {
//     const li = document.createElement("li");
//     const number = document.createElement("span");
//     const timeStamp = document.createElement("span");

//     li.setAttribute("class", "lap-interval");
//     number.setAttribute("class", "number");
//     timeStamp.setAttribute("class", "time-stamp");

//     number.innerText = `#${++lapItem}  `
//     timeStamp.innerHTML = `  ${hrsCounter} : ${minCounter} : ${secCounter} : ${SecsCounter}`;

//     li.append(number, timeStamp);
//     laps.append(li);

//     clear.classList.remove("hide");
// }

// // This function clears all recorded laps and hides the clear button.
// const clearAll = () => {
//     laps.innerHTML = '';
//     laps.append(clear);
//     clear.classList.add("hide");
//     lapItem = 0;
// }

// // These lines add click event listeners to the play, reset, lap, and 
// // clear buttons, linking them to their respective functions.
// play.addEventListener("click", playBtn);
// reset.addEventListener("click", resetBtn);
// lap.addEventListener("click", Lap);
// clear.addEventListener("click", clearAll);