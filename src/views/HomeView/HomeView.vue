<template>
  <section class="home-view-container">
    <animated-title firstLine="Hi, I’m Victor Trani." secondLine="I project, code and grow internet software."></animated-title>
  </section>
</template>
<script>
import AnimatedTitle from '@/components/slots/AnimatedTitle/AnimatedTitle.vue';

export default {
  components: { AnimatedTitle },
};
</script>
<style lang="scss" scoped>
@import 'HomeView.scss';
</style>
