<template>
<div v-if="isLoaded">
    <!-- Custom cursor related -->
    <custom-cursor></custom-cursor>
    <!--  -->

    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
</div>
<div v-else class="page-loading"></div>
</template>

<script>
import AppHeader from '@/layouts/AppHeader/AppHeader.vue';
import AppFooter from '@/layouts/AppFooter/AppFooter.vue';
import CustomCursor from './components/ui/CustomCursor/CustomCursor.vue';

export default {
    async created() {
        await this.$store.dispatch('integrateCalApi');
        await this.$store.dispatch('fetchProjects');
        await this.$store.dispatch('fetchLanguage');
        await this.$store.dispatch('setVisitor');
        await this.$store.dispatch('printEasterEgg');
        this.isLoaded = true;
    },

    data() {
        return {
            isLoaded: false,
        };
    },
    components: {
        AppHeader,
        AppFooter,
        CustomCursor
    },

};
</script>

<style lang="scss">
@import 'assets/scss/global.scss';

// Base app scss setups
body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    #app {
        width: 100%;
        cursor: none;
    }

    // "Hire me" modal
    .cal-embed {
        z-index: 2000;
    }

    // Page loading entering related
    .page-loading {
        background-color: $white-main;
        width: 100vw;
        height: 100vh;
    }
}
</style>
