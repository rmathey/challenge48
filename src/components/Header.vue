<template>
  <header>
    <div>
      <p id="timer"></p>
      <p id="counterDisplay">0</p>
      <span>
        <button id="resetTimer">Reset le timer</button>
        <button @click="resetCounter">Remettre à zéro le compteur</button>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  methods: {
    resetCounter() {
      counter = 0;
      document.getElementById("counterDisplay").innerHTML = counter;
      localStorage.setItem("counterValue", counter);
    }
  }
};

let duration = 1800;
let counter = 0;
let intervalId;

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  intervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    if (--timer < 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

window.onload = function () {
  let display = document.querySelector('#timer');
  startTimer(duration, display);

  let resetTimerBtn = document.querySelector('#resetTimer');
  resetTimerBtn.addEventListener('click', function () {
    clearInterval(intervalId);
    duration = 1800;
    startTimer(duration, display);
  });
};

</script>

<style>
/* header styles go here */
</style>
