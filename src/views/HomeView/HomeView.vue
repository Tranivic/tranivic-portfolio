<template>
<section class="home-page">
    <animated-title firstLine="Hi, I’m Victor Trani." secondLine="I project, code and grow internet software."></animated-title>
    <p class="sub-title">I’m a Software Engineer focused on frontend developing who enjoys turning problems and<br> opportunities into simple interfaces through code.</p>
    <social-media></social-media>
    <main-button ref="calButton" data-cal-link="tranivic/15min" class="hire-btn" color="black">Hire me!</main-button>
    <div class="selected-work-container">
        <h1>Selected Work</h1>
    </div>
    <div class="things-i-do-container">
        <div class="about">
            <h1>Things i do</h1>
            <p>Coding, strategy, management & development are my specialities, and I have had nearly 2 year honing in my skills. In all my project, I find that efficient work - flows, excellent communication skills and a dose of self-discipline are key - a strong work ethic has driven my success in a myriad of specialties.</p>
        </div>
        <div class="skills">
            <h1>Skills</h1>
            <p>HTML / CSS / SASS / JS / Vue / Nuxt.js / Tailwind CSS / TypeScript / Figma / Adobe XD</p>
            <div class="btn-container">
                <main-button @click="downloadCv" class="download-btn" color="black">Download CV</main-button>
            </div>
        </div>
    </div>
    <lets-talk></lets-talk>
</section>
</template>

<script>
import AnimatedTitle from '@/components/slots/AnimatedTitle/AnimatedTitle.vue';

export default {
    data() {
        return {};
    },
    methods: {
        downloadCv() {
            window.open('https://drive.google.com/u/0/uc?id=1k72zHZ2uO-D6K2mgxNM5cVc1_jJHwqE3&export=download', '_blank')
        }
    },
};
</script>

<style lang="scss" scoped>
@import 'HomeView.scss';
</style>
