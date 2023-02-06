<template>
        <h2 v-if="!loadedExo">Cette pizza n'existe pas dans notre application</h2>
        <h1>{{ exoId }}</h1>
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