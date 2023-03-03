<template>
<header>
    <div class="logo">
        <span>victortrani.</span>
    </div>
    <status-bar></status-bar>
    <nav-menu></nav-menu>
</header>
</template>

<script>
import StatusBar from "@/components/ui/StatusBar/StatusBar.vue";
import NavMenu from "@/components/ui/NavMenu/NavMenu.vue";
export default {
    components: {
        StatusBar,
        NavMenu,
    },
}
</script>

<style lang="scss" scoped>
@import "AppHeader.scss";
</style>
