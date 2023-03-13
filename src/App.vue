<template>
<app-header></app-header>
    <router-view />
<app-footer></app-footer>
</template>

<script>
import AppHeader from "@/layouts/AppHeader/AppHeader.vue";
import AppFooter from "@/layouts/AppFooter/AppFooter.vue";
export default {
    created () {
        this.$store.dispatch('integrateCalApi')
    },
    components: {
        AppHeader,
        AppFooter,
    },
};
</script>

<style lang="scss">
@import "assets/scss/global.scss";

body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    #app {
        width: 100%;
    }
}
// TO DO -------------
// Vue router transition effects related
// .router-enter-active, .router-leave-active {
//   transition: opacity 10s;
// }

// .router-enter, .router-leave-to {
//   opacity: 0;
// }
</style>
