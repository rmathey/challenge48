<template>
  <div class="grid grid-cols-3 gap-2 center">
      <menu-element v-for="element in menu" :key="element.titre" :element="element"></menu-element>
  </div>

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