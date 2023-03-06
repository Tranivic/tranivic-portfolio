<template>
<app-header></app-header>
<router-view />
<app-footer></app-footer>
</template>

<script>
import AppHeader from "@/layouts/AppHeader/AppHeader.vue";
import AppFooter from "@/layouts/AppFooter/AppFooter.vue";
export default {
    components: {
        AppHeader,
        AppFooter,
    },
};
</script>

<style lang="scss">
@import "assets/scss/global.scss";
</style>
