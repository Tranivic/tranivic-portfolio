<template>
<div v-if="isLoaded">
    <div class="cursor-screen">
        <custom-cursor></custom-cursor>
    </div>

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
        CustomCursor,
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

    .cursor-screen {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        pointer-events: none;
        z-index: 10000;
    }

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
