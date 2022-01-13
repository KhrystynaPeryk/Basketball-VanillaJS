let ball = document.getElementById('ball');
let court = document.getElementById('court');
court.addEventListener('click', function (event) {
    let x = event.offsetX;
    let y = event.offsetY;
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
});
let divForScoreA = document.getElementById('divForScoreA');
let divForScoreB = document.getElementById('divForScoreB');
let scroreSpanA = document.getElementById('scroreA');
let scroreSpanB = document.getElementById('scroreB');
let scoreNotification = document.getElementById('scoreNotification');
let milliseconds = 3000;
let eventA = new Event('myEventA');
let eventB = new Event('myEventB');
divForScoreA.dispatchEvent(eventA);
divForScoreB.dispatchEvent(eventB);
divForScoreA.addEventListener('myEventA');
divForScoreB.addEventListener('myEventB');
function notA() {
    ball.style.left = '23px';
    ball.style.top = '141px';
    scroreSpanB.innerText = Number(scroreSpanB.innerText) + 1;
    scoreNotification.innerText = 'Team B score!';
    scoreNotification.style.color = 'red';
    setTimeout(function() {
        scoreNotification.innerText = ' ';
    }, milliseconds);
}
function notB() {
    ball.style.left = '546px';
    ball.style.top = '141px';
    scroreSpanA.innerText = Number(scroreSpanA.innerText) + 1;
    scoreNotification.innerText = 'Team A score!';
    scoreNotification.style.color = 'blue';
    setTimeout(function() {
        scoreNotification.innerText = ' ';
    }, milliseconds);
}