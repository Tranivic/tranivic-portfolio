<template>
<app-header></app-header>
<router-view />
</template>

<script>
import AppHeader from "@/layouts/AppHeader/AppHeader.vue";
export default {
    components: {
        AppHeader,
    },
};
</script>

<style lang="scss">
@import "assets/scss/global.scss";
</style>
