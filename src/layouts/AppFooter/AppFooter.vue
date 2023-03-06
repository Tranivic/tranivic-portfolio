<template>
<footer class="app-footer">
    <div class="footer-info">
        <h1>Let's Talk about Your Project.</h1>
        <h2>Something on your mind? Get in touch and let's chat!</h2>
    </div>
    <div class="footer-btns">
        <main-button type="button" color="black">Schedule a call</main-button>
        <main-button type="button" color="white">Send me an email</main-button>
    </div>
    <ul class="nav-menu-flat">
        <li @click="toggleMenu" class="nav-menu-content-item">
            <router-link to="/about">About</router-link>
        </li>
        <li @click="toggleMenu" class="nav-menu-content-item">
            <router-link to="/contact">Contact</router-link>
        </li>
        <li @click="toggleMenu" class="nav-menu-content-item">
            <router-link to="/work">Work</router-link>
        </li>
        <li @click="toggleMenu" class="nav-menu-content-item">
            <a href="https://www.linkedin.com/in/victor-martins-t/" target="_blank">Linkedin</a>
        </li>
        <li @click="toggleMenu" class="nav-menu-content-item">
            <a href="https://github.com/Tranivic" target="_blank">Github</a>
        </li>
    </ul>
    <div class="social-media-container">
        <social-media></social-media>
    </div>
    <div class="emoji-container">
        <span>⚡</span>
    </div>

</footer>
</template>

<script>
export default {
    name: "AppFooter",
};
</script>

<style lang="scss" scoped>
@import "AppFooter.scss";
</style>
