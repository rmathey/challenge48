<template>
    <li>
        <h2 class="container"><a :href="element.url">{{ element.titre }}</a>
            <h6 v-if="!valide">⬛</h6>
            <h6 v-else>☑️</h6>
        </h2>
    </li>
</template>

<script>
export default {
    props: ['element'],
    data() {
        return {
            valide: false
        }
    },
    mounted() {
        if (localStorage.getItem(this.element.id)) {
            this.valide = true;
            console.log(this.valide)
        }
    }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

h6 {
  width: 50px;
  text-align: center;
}


</style>