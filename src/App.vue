<template>
  <template v-if="isLoaded">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </template>
  <div v-else class="page-loading"></div>
</template>

<script>
import AppHeader from '@/layouts/AppHeader/AppHeader.vue';
import AppFooter from '@/layouts/AppFooter/AppFooter.vue';
export default {
  async created() {
    await this.$store.dispatch('integrateCalApi');
    await this.$store.dispatch('fetchProjects');
    await this.$store.dispatch('fetchLanguage');
  },
  mounted() {
    addEventListener('load', (_) => {
      this.isLoaded = true;
    });
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  components: {
    AppHeader,
    AppFooter,
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
  }
}
</style>
