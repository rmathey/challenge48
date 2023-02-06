<template>
    <h1><a href="/">Retour</a></h1>
    <h1>Exercice query 2 : niveau intermédiaire</h1>

    <div v-if="this.$route.query.user != 'admin' && this.$route.query.password != 'admin'">
        <h3>Énoncé:</h3>
        <p>
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
            <p>
                Bravo, vous avez réussi à vous connecter en tant qu'admin !
                Vous possédez désormais de tous les droits administrateurs.
            </p>
        </div>
    </div>

</template>

<script>
export default {
};
</script>