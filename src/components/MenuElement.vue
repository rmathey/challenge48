<template>
    <div :router-link="element.url">
        <h1>{{ element.titre }}</h1>
    </div>
</template>

<script>
export default {
    props: ['element']
}
</script>