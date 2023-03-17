<template>
<footer class="app-footer">
    <ul class="nav-menu-flat">
        <li class="nav-menu-content-item">
            <button @click="pushToRoute('/home')" >Home</button>
        </li>
        <li class="nav-menu-content-item">
            <button @click="pushToRoute('/about')" > About</button>
        </li>
        <li class="nav-menu-content-item">
            <button @click="pushToRoute('/contact')" >Contact</button>
        </li>
        <li class="nav-menu-content-item">
            <button @click="pushToRoute('/work')" >Work</button>
        </li>
        <li class="nav-menu-content-item">
            <a href="https://www.linkedin.com/in/victor-martins-t/" target="_blank">Linkedin</a>
        </li>
        <li class="nav-menu-content-item">
            <a href="https://github.com/Tranivic" target="_blank">Github</a>
        </li>
    </ul>
    <div class="social-media-container">
        <social-media></social-media>
    </div>
    <div class="emoji-container">
        <h1>⚡</h1>
    </div>
</footer>
</template>

<script>
export default {
    methods: {
        pushToRoute(path) {
            if(this.$route.path === path){
                window.scrollTo(0,0)
                return
            }
            this.$router.push(path)
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'AppFooter.scss';
</style>
