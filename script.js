const start = document.querySelector(".content-start");
const timer = document.querySelector(".timer");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let min = 24;
let secs = 59;

start.onclick = function timers() {
  secs--;
  if (min <= 25) {
    timer.innerHTML = `${min}:${secs}`;
  }
  if (secs === 0) {
    secs = 59;
    min--;
    timer.innerHTML = `${min}:${secs--}`;
  }

  if (min <= 0) {
      min = 24;
      secs = 59
    // audio.play();
    timer.innerHTML = `${min}:${secs}`
    return;
  }

  setTimeout(timers, 1000);
};
