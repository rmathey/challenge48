<template>
    <h1><a href="/">Retour</a></h1>
    <h1>Exercice query 3 : niveau avancé</h1>

    <div v-if="this.$route.query.isAdmin != 'true'">
        <h3>Énoncé:</h3>
        <p>
            Voici un site avec des faiblesses en matière de sécurité.
            Vous n'avez pas accès à cette page car vous n'êtes pas connecté en tant qu'administrateur, trouver un moyen de quand même y accéder.
        </p>
    </div>
    <div v-else>
        <p>
            Bravo, vous avez réussi à accéder à une ressource réservée aux admins !
        </p>
    </div>

</template>

<script>
export default {
};
</script>