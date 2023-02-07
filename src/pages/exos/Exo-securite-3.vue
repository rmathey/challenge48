<template>
    <h1><a href="/">Retour</a></h1>
    <h1>Exercice Sécurité 3 : niveau avancé</h1>

    <form>
      <div>
        <label for="username">Nom d'utilisateur :</label>
        <input id="username" v-model="username" type="text">
      </div>
      <div>
        <label for="password">Mot de passe :</label>
        <input id="password" v-model="password" type="password">
      </div>
      <div>
        <button @click.prevent="submitForm">Se connecter</button>
      </div>
    </form>

    <div v-if="showMessage">
        <div v-if="connected">
            Vous êtes connecté en tant que {{ this.username }}
        </div>
        <div v-else>
            <p>
                Username ou mot de passe incorrect
            </p>
        </div>
    </div>

</template>

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
      if (username_list.includes(this.username.trim()) && this.password.trim() == "' or 1 --"){
        this.connected = true;
        localStorage.setItem("securite3", true);
      }
      else {
        this.connected = false;
      }
    }
  }
}
</script>