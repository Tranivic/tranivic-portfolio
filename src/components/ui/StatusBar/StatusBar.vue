<template>
<router-link to="/contact" class="status-bar">
    <div class="status-message" id="first-element">
        <div class="status-icon"></div>
        <span>{{spanMessage}}</span>
    </div>
    <div class="status-message" id="first-element">
        <div class="status-icon"></div>
        <span>{{spanMessage}}</span>
    </div>
</router-link>
</template>

<script>
export default {
    computed: {
        spanMessage() {
            return this.$store.getters.getlanguageObject.statusBarMessage
        }
    },
}
</script>

<style lang="scss" scoped>
@import "StatusBar.scss";
</style>
