<template>
<section class="about-page">
    <animated-title firstLine="Hi, hello and welcome stranger"></animated-title>
    <div class="info-container">
        <p>I'm Victor Trani, a frontend web developer that wants to work remotely around the world. I create ideas, websites, frontend interfaces, and everything in-between. I'm passionate about building & developing delightful experiences, to make customers and users satisfied when theyre using products and services online.</p>
    </div>
    <div class="btn-container">
        <main-button ref="calButton" data-cal-link="tranivic/15min" color="black">Schedule a call</main-button>
        <main-button :isLink="true" pushTo="/contact">Contact me</main-button>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import'AboutView.scss'
</style>
