<template>
    <div>
      <button class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-600 rounded m-1">
        Remettre le compteur à zéro
        <h2><a :href="element.url">{{ element.titre }}</a> ⬛ ou ☑️</h2>
      </button>
    </div>
</template>

<script>
export default {
    props: ['element']
}
</script>