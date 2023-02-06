<template>
    <li>
        <h2><a :href="element.url">{{ element.titre }}</a> ⬛ ou ☑️</h2>
    </li>
</template>

<script>
export default {
    props: ['element']
}
</script>