<template>
    <h1><a href="/">Retour</a></h1>
    <h1>Bienvenue {{ this.$route.query.user }}</h1>
    <h3 v-if="this.$route.query.user !== 'admin'">
        Essayer de trouver un moyen d'accèder au profile de l'utilisateur admin
    </h3>
    <h3 v-else>Bravo, vous avez réussi à accèder au profile de l'admin !!</h3>

    <h4>Nom d'utilisateur: {{ this.$route.query.user }}</h4>
    <h4>Email: {{ this.$route.query.user }}-challenge48h@gmail.com</h4>
</template>

<script>
export default {
};
</script>