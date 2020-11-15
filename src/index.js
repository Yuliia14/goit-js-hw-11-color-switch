import './css/common.scss';

const startTimerButtonEl = document.querySelector('[data-action="start"]');
const stopTimerButtonEl = document.querySelector('[data-action="stop"]');
const body = document.body;
let timerId = null;
let hasBeenStarted = false;


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

startTimerButtonEl.addEventListener("click", startTimerCounter);
startTimerButtonEl.classList.add('is-active');


function startTimerCounter() {
    if (hasBeenStarted) {
        return;
    }

  timerId = setInterval(() => {
      startTimerButtonEl.removeEventListener("click", startTimerCounter);
      hasBeenStarted = true;
      startTimerButtonEl.classList.remove('is-active');
      stopTimerButtonEl.classList.add('is-active');
      body.style.background = colors[randomIntegerFromInterval(0, colors.length-1)];
    }, 1000);
}

stopTimerButtonEl.addEventListener("click", () => {
  clearInterval(timerId);
  hasBeenStarted = false;
  startTimerButtonEl.addEventListener("click", startTimerCounter);
  startTimerButtonEl.classList.add('is-active');
  stopTimerButtonEl.classList.remove('is-active');
});

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};