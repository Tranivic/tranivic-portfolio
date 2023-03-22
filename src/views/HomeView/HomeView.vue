<template>
<section class="home-page">
    <animated-title v-if="globalObject.titleFirstLine" :firstLine="globalObject.titleFirstLine" :secondLine="globalObject.titleSecondLine"></animated-title>
    <p class="sub-title">{{ globalObject.description }}</p>
    <social-media></social-media>
    <main-button ref="calButton" data-cal-link="tranivic/15min" class="hire-btn" color="black">{{globalObject.hireMeButton}}</main-button>
    <div class="selected-work-container">
        <h1>{{globalObject.selectedWork}}</h1>
        <ul class="work-list">
            <work-card v-for="work in selectedWorks" :key="work.name" :work="work" :isShort="false"></work-card>
        </ul>
    </div>
    <main-button :isLink="true" to="/work" color="black" class="see-more-btn">{{globalObject.selectedWorkButton}}</main-button>
    <div class="things-i-do-container">
        <div class="about">
            <h1>{{  globalObject.thingsIDoTitle}}</h1>
            <p>{{ globalObject.thingsIDoDescription }}</p>
        </div>
        <div class="skills">
            <h1>{{ globalObject.skillsTitle }}</h1>
            <p>HTML / CSS / SASS / JS / Vue / Nuxt.js / Tailwind CSS / Bootstrap / TypeScript / Figma / Adobe XD</p>
            <div class="btn-container">
                <main-button @click="downloadCv" class="download-btn" color="black">Download CV</main-button>
            </div>
        </div>
    </div>
    <lets-talk></lets-talk>
</section>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        downloadCv() {
            window.open('https://drive.google.com/u/0/uc?id=1k72zHZ2uO-D6K2mgxNM5cVc1_jJHwqE3&export=download', '_blank')
        }
    },
    computed: {
        selectedWorks() {
            return this.$store.getters.selectedWorks
        },
        globalObject(){
            return this.$store.getters.getlanguageObject
        }
    },
};
</script>

<style lang="scss" scoped>
@import 'HomeView.scss';
</style>
