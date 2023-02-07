<template>
    <div class="my-1"></div>
    <div style="background-color: grey">
      <button class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-600 rounded m-1"><a href="/">Retour</a></button>
      <h1 class="mx-10" style="color: white; font-weight: bold; font-size: large">Exercice query 1 : niveau facile</h1>
      <div class="mx-11" v-if="this.$route.query.user !== 'admin'">
        <h2 class="mx-11" style="color: white; font-weight: bold; font-size: large">Énoncé:</h2>
          <p class="mx-11">
              Voici un site avec des faiblesses en matière de sécurité.
              Essayez de trouver un moyen d'accéder au profil de l'utilisateur 'admin' pour récupérer ses informations
              personnelles.
          </p>

          <button @click="hint = !hint" class="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 border border-yellow-600 rounded m-1">Indice</button>
          <p style="color: greenyellow" v-if="!hint">Indice: inspectez l'URL du site.</p>
          <p v-else></p>

      </div>
      <div v-else>
          <p>
              Bravo, vous avez réussi à accéder au profil de l'admin !
              Vous pouvez désormais accéder aux informations personnelles de l'administrateur du site.
          </p>
          <h1><a href="/">Retour au sommaire</a></h1>
      </div>

      <div class="my-3"></div>
      <h1 class="mx-11" style="color: white; font-weight: bold; font-size: larger">Bienvenue {{ this.$route.query.user }} </h1>
      <h4 class="mx-12" style="color: white; font-weight: bold">Nom d'utilisateur : {{ this.$route.query.user }}</h4>
      <h4 class="mx-12" style="color: white; font-weight: bold">Email : {{ this.$route.query.user }}-challenge48h@gmail.com</h4>
    </div>
</template>
<style>
p {
  color: white;
}
</style>
<script>
export default {
    data() {
        return {
            hint: true
        }
    },
    mounted() {
        if (this.$route.query.user == 'admin') {
            localStorage.setItem("query1", true);
        }
    }
};
</script>