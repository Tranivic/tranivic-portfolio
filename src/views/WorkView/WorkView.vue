<template>
<section class="work-page">
    <animated-title firstLine="My Works"></animated-title>
    <ul class="work-list">
        <work-card v-for="work in allWorks" :key="work.name" :work="work"></work-card>
    </ul>
</section>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        allWorks() {
            return this.$store.getters.myWorks
        }
    },
};
</script>

<style lang="scss" scoped>
@import 'WorkView.scss';
</style>
