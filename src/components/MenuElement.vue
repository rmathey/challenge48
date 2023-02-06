<template>
    <li>
        <a :href="element.url">{{ element.titre }}</a>
    </li>
</template>

<script>
export default {
    props: ['element']
}
</script>