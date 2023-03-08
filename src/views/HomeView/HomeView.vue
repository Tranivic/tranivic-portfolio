<template>
  <section class="home-view-container">
    <animated-title firstLine="Hi, I’m Victor Trani." secondLine="I project, code and grow internet software."></animated-title>
    <p class="sub-title">I’m a Digital Product Designer and Software Engineer who enjoys turning problems and<br> opportunities into simple interfaces through design and code.</p>
    <social-media></social-media>
    <main-button class="hire-btn" color="black">Hire me!</main-button>
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
