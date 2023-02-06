<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tailwind Starter Template - Ghostwind CSS : Tailwind Toolbox</title>
    <meta name="author" content="name">
    <meta name="description" content="description here">
    <meta name="keywords" content="keywords,here">
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/> <!--Replace with your tailwind.css once created-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" rel="stylesheet">
  </head>

  <body class="bg-gray-200 font-sans leading-normal tracking-normal">
  <!--Header-->
  <div class="w-full m-0 p-0 bg-cover bg-bottom" style="background-image:url('https://wallpaperaccess.com/full/1803545.jpg'); height: 60vh; max-height:460px;">
    <div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
      <!--Title-->
      <p class="text-white font-extrabold text-3xl md:text-5xl"></p>
      <p class="text-xl md:text-2xl text-gray-200 font-bold">Groupe 3 - Challenge 48H</p>
    </div>
  </div>

  <!--Container-->
  <div class="container px-4 md:px-0 max-w-2xl mx-auto -mt-32">
    <div class="mx-0 sm:mx-6">
      <!--Nav-->
      <nav class="mt-0 w-full">
        <div class="container mx-auto flex items-center">
            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li class="mr-2">
                <a class="inline-block py-2 px-2 text-white no-underline hover:underline" href="post.html">POST</a>
              </li>
              <li class="mr-2">
                <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2" href="#">LINK</a>
              </li>
              <li class="mr-2">
                <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-2" href="#">LINK</a>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  </div>
  </body>
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