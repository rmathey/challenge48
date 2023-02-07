<template>
    <div>
        <button class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-600 rounded m-1"><a href="/">Retour</a></button>
        <button class="astuce" @click="hint1 = !hint1">Indice HTML</button>
        <p v-if="!hint1">
            Une div "container" et une "box"
        </p>
        <p v-else></p>
        <button class="astuce" @click="hint2 = !hint2">Indice CSS</button>
        <p v-if="!hint2">
            réaliser un carré en css (pas très compliqué)
        </p>
        <p v-else></p>
        <button class="astuce" @click="hint3 = !hint3">Indice Javascript</button>
        <p v-if="!hint3">
            Réaliser une fonction "move()" et se servir des propriétés "direction".
        </p>
        <p v-else></p>
      <iframe ref="iframe" srcdoc="Pour ce challenge n°2 de niveau intermédiaire il faudrait réaliser un carré bleu qui puisse se déplacer légèrement de droite à gauche en HTML JS et CSS" ></iframe>
      <div id="code" class="exo">
        <section id="html" class="html">
          <textarea placeholder="html" @input="updateIframe"></textarea>
        </section>
        <section id="css" class="css">
            <textarea placeholder="CSS" @input="updateIframe"></textarea>
        </section>
        <section id="js" class="js">
            <textarea placeholder="JS" @input="updateIframe"></textarea>
            <div>
                <button @click="mounted">Exercice réussi</button>
            </div>
        </section>
      </div>
    </div>
  </template>


  <script>
  export default {
    methods: {
      updateIframe() {
        let iframe = this.$refs.iframe;
        let textareas = this.$el.querySelectorAll("textarea");
  /* eslint-disable */
        iframe.srcdoc = `${textareas[0].value}<style>${textareas[1].value}</style><script>${textareas[2].value}<\/script>`;}
    },
      mounted() {
            localStorage.setItem("css2", true);
        },
        data() {
        return {
            hint1: true,
            hint2: true,
            hint3: true
        }
    }
    };
</script>

<style>
    @import url(https://fonts.googleapis.com/css?family=PT+Sans+Narrow);
*{
  margin:0;
  padding:0;  
}

#code{
  width:25%;
  float:right;
}
iframe{
  width:75%;
  float:left;
  height:100%;
  border:0;
    font-family: 'PT Sans Narrow', sans-serif;
}
#iframes{
height:100%;
width:75%;
float:left;
}
*{
margin:0;
padding:0;
}
html,body{
width:100%;
height:100%;
position:absolute;
}



#code{
float: left;
width:25%;

}
section{
float: left;
height:33.3333%;
position: absolute;
width:30%;
}
textarea{
height:97.6%;
width:100%;

}
#html{top:0%;     background-color: #E44D26; /* Couleur HTML5 */
}
#css{top:33.3%;     background-color: blue; /* Couleur CSS */
}
#js{bottom:0%;     background-color: yellow; /* Couleur JavaScript */
}

.astuce{
    display: grid;

}
</style>