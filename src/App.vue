<template>
    <div>
        <div class="app">
            <app-header></app-header>
            <router-view />
            <app-footer></app-footer>
        </div>
    </div>
</template>
  
<script>
import AppHeader from '@/layouts/AppHeader/AppHeader.vue';
import AppFooter from '@/layouts/AppFooter/AppFooter.vue';

export default {
    async created() {
        this.$store.dispatch('fetchPosts');
        try {
            await Promise.all([
                this.$store.dispatch('setVisitor'),
                this.$store.dispatch('integrateCalApi'),
                this.$store.dispatch('fetchProjects'),
                this.$store.dispatch('fetchLanguage'),
                this.$store.dispatch('printEasterEgg')
            ]);
        } catch (err) {
            alert(err);
        }

    },
    components: {
        AppHeader,
        AppFooter,
    }
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
    button, a{
        cursor: pointer;
    }
    #app {
        width: 100%;
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
  