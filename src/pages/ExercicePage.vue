<template>
        <h1><a href="/">Retour</a></h1>
        <h2 v-if="!loadedExo">Cet exercice n'existe pas</h2>
        <h2 v-if="loadedExo">{{ exoId }}</h2>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            exoId: this.$route.params.id,
        }
    },
    computed: {
        loadedExo() {
            return this.$store.getters.exercice(this.exoId);
        }
    }
}
</script>