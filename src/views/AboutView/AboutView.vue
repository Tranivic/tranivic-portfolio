<template>
<section class="about-page">
    <animated-title firstLine="Hi, hello and welcome stranger"></animated-title>
    <div class="info-container">
        <p>I'm Victor Trani, a frontend web developer who's eager to work remotely around the world. My expertise includes generating website ideas and code frontend interfaces to craft satisfying online experiences for customers and users. I'm deeply passionate about developing web applications that bring value to people's lives.</p>
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
