<template>
<section class="work-page">
    <animated-title firstLine="My Works"></animated-title>
    <ul class="work-list">
        <work-card v-for="work in allWorks" :key="work.name" :work="work"></work-card>
    </ul>
</section>
</template>

<script>
import WorkCard from '@/components/ui/WorkCard/WorkCard.vue'
export default {
    created() {
        console.log(this.allWorks);
    },
    data() {
        return {};
    },
    components: {
        WorkCard,
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
