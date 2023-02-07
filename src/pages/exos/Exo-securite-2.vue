<template>
  <div class="my-1"></div>
  <div style="background-color: grey">
    <button class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-600 rounded m-1"><a href="/">Retour</a></button>
    <h1 class="mx-10" style="color: white; font-weight: bold; font-size: large">Exercice Sécurité 2 : niveau intermédiaire - Connectez-vous en devinant les identifiants !</h1>

    <form class="mx-20">
      <div class="my-2">
        <label for="username">Nom d'utilisateur : </label>
        <input id="username" v-model="username" type="text">
      </div>
      <div class=" my-2">
        <label for="password">Mot de passe : </label>
        <input class="mx-6" id="password" v-model="password" type="password">
      </div>
      <div>
        <button @click.prevent="submitForm" class="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 border border-green-600 rounded m-1">Se connecter</button>
      </div>
    </form>

    <div v-if="showMessage">
        <div style="font-weight: bold" v-if="connected">
            Vous êtes connecté en tant que {{ this.username }}
        </div>
        <div v-else>
            <p style="font-weight: bold">
                Username ou mot de passe incorrect
            </p>
        </div>
    </div>
  </div>
</template>
<style>
label {
  color: white;
}
</style>
<script>
export default {
    data() {
    return {
      username: '',
      password: '',
      showMessage: false,
      connected: false
    }
  },
  methods: {
    submitForm() {
      this.showMessage = true;
      const username_list = [
        "admin",
        "root"
      ]
      if (username_list.includes(this.username.trim()) && username_list.includes(this.password.trim())){
        this.connected = true;
        localStorage.setItem("securite2", true);
      }
      else {
        this.connected = false;
      }
    }
  }
}
</script>