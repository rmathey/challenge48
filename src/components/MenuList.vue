<template>
    <ul id="example-1">
        <menu-element v-for="element in menu" :key="element.titre" :element="element"></menu-element>
    </ul>
</template>

<script>
import MenuElement from './MenuElement.vue';
export default {
    props: ['menu'],
    components: {
        MenuElement,
    },
};
</script>