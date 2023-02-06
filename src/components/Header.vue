<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Challenge 48H - Groupe 3</title>
    <meta name="Groupe 3" content="name">
    <meta name="description" content="description here">
    <meta name="keywords" content="keywords,here">
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/> <!--Replace with your tailwind.css once created-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" rel="stylesheet">
  </head>

  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <div class="w-full m-0 p-0 bg-cover bg-bottom" style="background-image:url('https://wallpaperaccess.com/full/1803545.jpg'); height: 50vh; max-height:250px;">
      <div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
        <p class="text-white font-extrabold text-3xl md:text-5xl"></p>
        <p class="text-xl md:text-2xl text-gray-200 font-bold">Groupe 3 - Challenge 48H</p>
      </div>
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
    </div>
  </div>
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