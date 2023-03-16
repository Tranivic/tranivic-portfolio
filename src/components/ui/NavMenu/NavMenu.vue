<template>
<div class="nav-menu">
    <button @click="toggleMenu" class="nav-menu-btn">
        <span v-if="!menuIsOpen" class="menu-open">
            <h1>Menu</h1>
            <i class="fas fa-bars"></i>
        </span>
        <span v-else class="menu-close">
            <h1>Close</h1>
            <i class="fas fa-times"></i>
        </span>
    </button>
    <transition name="menu">
        <div v-if="menuIsOpen" class="backgroud-linear-gradient">
            <ul class="nav-menu-content">
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
    </transition>
</div>
</template>

<script>
export default {
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
@import 'NavMenu.scss';
</style>
