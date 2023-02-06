<template>
    <h1><a href="/">Retour</a></h1>
    <h3 v-if="this.$route.query.user == 'admin' && this.$route.query.password == 'admin'">
        Bravo vous avez réussi à accèder à la page réservé à l'administrateur du site
    </h3>
    <h3 v-else>Vous n'avez pas accès à cette page, trouver un moyen de quand même y accèder</h3>
</template>

<script>
export default {
};
</script>