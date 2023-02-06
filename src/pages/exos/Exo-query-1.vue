<template>
    <h1><a href="/">Retour</a></h1>
    <div v-if="this.$route.query.user !== 'admin'">
        <h3>Énoncé:</h3>
        <p>
            Voici un site avec des faiblesses en matière de sécurité.
            Essayez de trouver un moyen d'accéder au profil de l'utilisateur 'admin' pour récupérer ses informations
            personnelles.
            Indice: inspectez l'URL du site.
        </p>
    </div>
    <div v-else>
        <p>
            Bravo, vous avez réussi à accéder au profil de l'admin !
            Vous pouvez désormais accéder aux informations personnelles de l'administrateur du site.
        </p>
    </div>

    <h1>Bienvenue {{ this.$route.query.user }}</h1>
    <h4>Nom d'utilisateur: {{ this.$route.query.user }}</h4>
    <h4>Email: {{ this.$route.query.user }}-challenge48h@gmail.com</h4>
</template>

<script>
export default {
};
</script>