<template>
<section class="work-page">
    <animated-title firstLine="All Work"></animated-title>
    <ul class="work-list">
        <work-card></work-card>
        <work-card></work-card>
        <work-card></work-card>
        <work-card></work-card>
        <work-card></work-card>
        <work-card></work-card>
        <work-card></work-card>
        <work-card></work-card>
        <work-card></work-card>
        <work-card></work-card>
        <work-card></work-card>
        <work-card></work-card>
    </ul>
</section>
</template>
<script>
import WorkCard from '@/components/ui/WorkCard/WorkCard.vue'
export default {
    data() {
        return {};
    },
    components: {
            WorkCard,
        },
};
</script>

    
<style lang="scss" scoped>
@import 'WorkView.scss';
</style>
