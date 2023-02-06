<template>
  <header>
    <div class="container">
      <span class="timer">
        <h1 style="color: white;">Temps Restant :</h1>
        <h1 id="timer" style="color: white; margin-left: 10px;"></h1>
      </span>
    </div>
    <div class="container">
      <span class="counter">
        <p style="color: white;">Challenges réussi : </p>
        <p id="counterDisplay" style="color: white; margin-left: 5px; font-weight: bold;">0</p>
      </span>
    </div>
    <div class="container">
      <span>
        <button id="resetTimer">Reset le timer</button>
        <button style="margin-bottom: 10px; margin-left: 5px;" @click="resetCounter">Remettre à zéro le compteur</button>
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
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  background-color: rgb(36, 178, 164);
  border-radius: 30px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.timer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
}

.counter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>