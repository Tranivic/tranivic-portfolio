<template>
<div class="nav-menu">
    <div @click="toggleMenu" class="nav-menu-btn">
        <span v-if="menuIsOpen" class="menu-open">
            <h1>Menu</h1>
            <i class="fas fa-bars"></i>
        </span>
        <span v-else class="menu-close">
            <h1>Close</h1>
            <i class="fas fa-times"></i>
        </span>
    </div>
    <ul v-if="!menuIsOpen" class="nav-menu-content">
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
</div>
</template>

<script>
export default {
    name: "NavMenu",
    data() {
        return {
            menuIsOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuIsOpen = !this.menuIsOpen;
        }
    },
}
</script>

<style lang="scss" scoped>
@import "NavMenu.scss";
</style>
