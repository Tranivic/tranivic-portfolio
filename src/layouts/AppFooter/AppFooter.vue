<template>
<footer class="app-footer">
    <ul class="nav-menu-flat">
        <li @click="toggleMenu" class="nav-menu-content-item">
            <router-link to="/">Home</router-link>
        </li>
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
