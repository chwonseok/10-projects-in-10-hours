const eventPlace = document.querySelector('.event-place');
const eventDate = document.querySelector('.event-time');

const eventInput = document.querySelector('event-enter');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

function countdown() {
  const curTime = new Date().getTime();
  const endTIme = new Date('Aug 5, 2021').getTime();
  const leftSec = Math.floor((endTIme - curTime) / 1000);

  leftDays = Math.floor(leftSec / 86400);
  leftHours = Math.floor((leftSec / 3600) % 24);
  leftMins = Math.floor((leftSec / 60) % 60);
  leftSeconds = Math.floor(leftSec % 60);

  daysEl.innerHTML = leftDays;
  hoursEl.innerHTML = formatNum(leftHours);
  minsEl.innerHTML = formatNum(leftMins);
  secondsEl.innerHTML = formatNum(leftSeconds);
}

function formatNum(time) {
  return time < 10 ? `0${time}` : time;
}

function init() {
  countdown();
  setInterval(countdown, 1000);
}

init();
