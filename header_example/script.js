let duration = 1800;
let counter = 0;
      
function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function incrementCounter() {
  counter++;
  document.getElementById("counterDisplay").innerHTML = counter;
}

function resetCounter() {
  counter = 0;
  document.getElementById("counterDisplay").innerHTML = counter;
  localStorage.setItem("counterValue", counter);
}

window.onload = function () {
  let display = document.querySelector('#timer');
  startTimer(duration, display);

  let resetBtn = document.querySelector('#reset-btn');
  resetBtn.addEventListener('click', function () {
    duration = 300;
    startTimer(duration, display);
  });
};