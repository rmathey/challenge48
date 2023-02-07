<template>
  <div class="m-1"></div>
  <div class="w-full m-0 p-0 bg-cover bg-bottom" style="background-image:url('https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_1280.jpg'); height: 100vh; max-height:450px;">
    <div class="grid grid-cols-3 gap-2 center ml-6">
        <menu-element v-for="element in menu" :key="element.titre" :element="element"></menu-element>
    </div>
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