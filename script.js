const start = document.querySelector(".content-start");
const timer = document.querySelector(".timer");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const ps = document.querySelector(".content-pause");
const card = document.querySelector(".toast--content img");
const toast = document.querySelector(".toast");
let audio = new Audio("./audio/end.mp3");
let setTime;
let setPause;
let min = 24;
let secs = 59;
let minP = 4;
let secsP = 59;

start.onclick = function timers() {
  timer.innerHTML = `${min}:${secs}`;
  secs--;
  if (secs <= 59) {
    timer.innerHTML = `${min}:${secs}`;
  }
  if (secs === 0) {
    secs = 59;
    min--;
    timer.innerHTML = `${min}:${secs}`;
  }
  if (secs <= 9) {
    timer.innerHTML = `${min}:0${secs}`;
  }
  if (min <= 0) {
    audio.play();
    min = 24;
    secs = 59;
    timer.innerHTML = `${min}:${secs}`;
    return;
  }
  setTime = setTimeout(timers, 1000);
  setTimeout(setTime)
  clearInterval(setPause);
}

ps.onclick = function pause() {
  timer.innerHTML = `${minP}:${secsP}`;
  secsP--;
  if (secsP <= 59) {
    timer.innerHTML = `${minP}:${secsP}`;
  }
  if (secsP <= 0) {
    secsP = 59;
    minP--;
    timer.innerHTML = `${minP}:${secsP}`;
  }
  if (minP <= 0) {
    secsP = 59;
    minP = 5;
    timer.innerHTML = `${minP}:${secsP}`;
    audio.play();
    return;
  }
  setPause = setTimeout(pause, 1000);
  setTimeout(setPause);
  clearInterval(setTime);
};

let popup = document.querySelector(".card");
card.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

let closePop = document.querySelector(".close");

closePop.addEventListener("click", () => {
  popup.classList.add("hidden");
});
