<template>
    <div class="my-1"></div>
    <div style="background-color: grey">
      <button class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-600 rounded m-1"><a href="/">Retour</a></button>
      <h1 class="mx-10" style="color: white; font-weight: bold; font-size: large">Exercice query 2 : niveau intermédiaire</h1>

      <div v-if="this.$route.query.user != 'admin' && this.$route.query.password != 'admin'">
        <h2 class="mx-11" style="color: white; font-weight: bold; font-size: large">Énoncé:</h2>
          <p class="mx-11">
              Vous êtes connecté en tant que {{ this.$route.query.user }} mais vous n'êtes pas admin, essayer de vous connecter
              en tant qu'admin pour accéder
              à plus de droit sur ce site web.
          </p>
      </div>
      <div v-else>
          <div v-if="this.$route.query.user == 'admin' && this.$route.query.password != 'admin'">
              <p>Mot de passe du compte "admin" incorrect</p>
          </div>
          <div v-else>
              <p class="mx-11" style="font-weight: bold; font-size: larger; color: greenyellow">
                  Bravo, vous avez réussi à vous connecter en tant qu'admin !
                  Vous possédez désormais de tous les droits administrateurs.
              </p>
          </div>
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
        if (this.$route.query.user == 'admin' && this.$route.query.password == 'admin') {
            localStorage.setItem("query2", true);
        }
    }
};
</script>