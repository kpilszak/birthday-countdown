const timeLeft = document.getElementById('time-left');

const birthday = new Date('07/15/2024');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; // milliseconds

function countDown() {
    const today = new Date();
    const timeSpan = birthday - today;
    console.log(timeSpan);
}

setInterval(countDown, second);