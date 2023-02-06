<template>
    <menu-list :menu="menu"></menu-list>
</template>

<script>
import MenuList from '../components/MenuList.vue';
export default {
    components: {
        MenuList
    },
    computed: {
        menu() {
            return this.$store.getters.menu;
        }
    }
}
</script>