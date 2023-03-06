<template>
<button :class="color === 'black' ? 'black-btn' : 'white-btn'">
    <slot></slot>
</button>
</template>

<script>
export default {
    name: "MainButton",
    props: {
        color: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss" scoped>
@import "MainButton.scss"
</style>
