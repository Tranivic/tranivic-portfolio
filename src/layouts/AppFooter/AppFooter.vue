<template>
<footer class="app-footer">
    <ul v-if="globalObject.navMenu" class="nav-menu-flat">
        <li class="nav-menu-content-item">
            <button class="interact-cursor" @click="pushToRoute('/home')">{{ globalObject.navMenu.homeButton }}</button>
        </li>
        <li class="nav-menu-content-item">
            <button class="interact-cursor" @click="pushToRoute('/about')"> {{ globalObject.navMenu.aboutButton }}</button>
        </li>
        <li class="nav-menu-content-item">
            <button class="interact-cursor" @click="pushToRoute('/contact')">{{ globalObject.navMenu.contactButton }}</button>
        </li>
        <li class="nav-menu-content-item">
            <button class="interact-cursor" @click="pushToRoute('/work')">{{ globalObject.navMenu.workButton }}</button>
        </li>
        <li class="nav-menu-content-item">
            <button class="interact-cursor" @click="pushToRoute('/blog')">Blog</button>
        </li>
        <li class="nav-menu-content-item">
            <a class="interact-cursor" href="https://www.linkedin.com/in/victor-martins-t/" target="_blank">Linkedin</a>
        </li>
        <li class="nav-menu-content-item">
            <a class="interact-cursor" href="https://github.com/Tranivic" target="_blank">Github</a>
        </li>
    </ul>
    <div class="social-media-container">
        <social-media></social-media>
    </div>
    <div class="emoji-container">
        <h1 class="interact-cursor">⚡</h1>
    </div>
</footer>
</template>

<script>
export default {
    methods: {
        pushToRoute(path) {
            if (this.$route.path === path) {
                window.scrollTo(0, 0)
                return
            }
            this.$router.push(path)
        },
    },
    computed: {
        globalObject() {
            return this.$store.getters.getlanguageObject
        }
    },
};
</script>

<style lang="scss" scoped>
@import 'AppFooter.scss';
</style>
