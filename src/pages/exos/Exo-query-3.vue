<template>
  <div class="my-1"></div>
  <div style="background-color: grey">
    <button class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-600 rounded m-1"><a href="/">Retour</a></button>
    <h1 class="mx-10" style="color: white; font-weight: bold; font-size: large">Exercice query 3 : niveau avancé</h1>

    <div v-if="this.$route.query.isAdmin != 'true'">
      <h2 class="mx-11" style="color: white; font-weight: bold; font-size: large">Énoncé:</h2>
        <p class="mx-11">
            Voici un site avec des faiblesses en matière de sécurité.
            Vous n'avez pas accès à cette page car vous n'êtes pas connecté en tant qu'administrateur, trouver un moyen de quand même y accéder.
        </p>
    </div>
    <div v-else>
        <p class="mx-11" style="font-weight: bold; font-size: larger; color: greenyellow">
            Bravo, vous avez réussi à accéder à une ressource réservée aux admins !
        </p>
    </div>
  </div>
</template>
<style>
p {
  color: white;
}
</style>
<script>
export default {
    mounted() {
        if (this.$route.query.isAdmin === "true") {
            localStorage.setItem("query3", true);
        }
    }
};
</script>