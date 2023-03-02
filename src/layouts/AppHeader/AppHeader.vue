<template>
<header>
    <div class="logo">
        <span>victortrani.</span>
    </div>
    <div class="navbar">
        <ul class="menu">
            <li class="menu-item">
                <router-link to="/">Work</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/about">About</router-link>
            </li>
            <li class="menu-item">
                <router-link to="/contact">Contact</router-link>
            </li>
        </ul>
    </div>
</header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "AppHeader.scss";
</style>
