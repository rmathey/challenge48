<template>

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Challenge 48H - Groupe 3</title>
    <meta name="Groupe 3" content="name">
    <meta name="description" content="description here">
    <meta name="keywords" content="keywords,here">
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
    <!--Replace with your tailwind.css once created-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" rel="stylesheet">
  </head>

  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <div class="w-full m-0 p-0 bg-cover bg-bottom"
      style="background-image:url('https://wallpaperaccess.com/full/1803545.jpg'); height: 26vh; max-height:250px;">
      <div class="container max-w-4xl mx-auto pt-1 text-center break-normal">
        <p class="text-xl md:text-2xl text-gray-200 font-bold">Groupe 3 - Challenge 48H</p>
      </div>
      <div class="container">
        <span class="timer">
          <h1 style="color: white;">Temps écoulé :</h1>
          <h1 id="timer" style="color: white; margin-left: 10px; font-weight: bold;"></h1>
        </span>
      </div>
      <div class="container">
        <span class="counter">
          <p style="color: white;">Challenges réussis : </p>
          <p id="counterDisplay" style="color: white; margin-left: 5px; font-weight: bold;">0</p>
        </span>
      </div>
      <br>
      <div class="container">
        <span>
          <button id="resetTimer"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Redémarrer le timer
          </button>
          <button id="resetTimer" @click="resetCounter"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Remettre le compteur à zéro
          </button>
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
      localStorage.clear();
      location.reload()
    },
    changeCounter(num) {
      document.getElementById("counterDisplay").innerHTML = num;
      localStorage.setItem("counterValue", counter);
    }
  },
  data() {
    return {
      query1: false
    }
  },
  mounted() {
    var count = 0;
    const list_exos = [
      "css1",
      "css2",
      "css3",
      "securite1",
      "securite2",
      "securite3",
      "query1",
      "query2",
      "query3"
    ]
    for (let i = 0; i < list_exos.length; i++) {
      if (localStorage.getItem(list_exos[i])) {
        count += 1
      }
    }
    this.changeCounter(count);
  }
};

let duration = 0;
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
    if (++timer === 1800) {
      clearInterval(intervalId);
    }
  }, 1000);
}

window.onload = function () {
  let display = document.querySelector('#timer');
  let startTime = localStorage.getItem("startTime");
  if (startTime) {
    duration = 0 + (Date.now() - startTime) / 1000;
    startTimer(duration, display);
  } else {
    startTimer(duration, display);
    localStorage.setItem("startTime", Date.now());
  }

  let resetTimerBtn = document.querySelector('#resetTimer');
  resetTimerBtn.addEventListener('click', function () {
    clearInterval(intervalId);
    duration = 0;
    startTimer(duration, display);
    localStorage.setItem("startTime", Date.now());
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