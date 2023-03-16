<template>
<div class="lets-talk-container">
    <div class="talk-info">
        <h1>Let's Talk about Your Project.</h1>
        <p>Something on your mind? Get in touch and let's chat!</p>
    </div>
    <div class="footer-btns">
        <main-button ref="calButton" data-cal-link="tranivic/15min" type="button" color="black">Schedule a call</main-button>
        <main-button :isLink="true" pushTo="/contact" color="white">Send me an email</main-button>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import 'LetsTalk.scss'
</style>
