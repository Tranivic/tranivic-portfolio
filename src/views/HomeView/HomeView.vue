<template>
    <section class="home-page">
        <animated-title v-if="globalObject.titleFirstLine" :firstLine="globalObject.titleFirstLine" :secondLine="globalObject.titleSecondLine"></animated-title>
        <p class="sub-title">{{ globalObject.description }}</p>
        <social-media></social-media>
        <main-button ref="calButton" data-cal-link="tranivic/15min" class="hire-btn" color="black">{{ globalObject.hireMeButton }}</main-button>
        <div class="selected-work container">
            <h1>{{ globalObject.selectedWork }}</h1>
            <ul class="work-list">
                <work-card v-for="work in selectedWorks" :key="work.name" :work="work" :isShort="false"></work-card>
            </ul>
            <main-button :isLink="true" to="/work" color="black" class="see-more-btn">{{ globalObject.selectedWorkButton }}</main-button>
        </div>
        <div class="things-i-do things-i-do container">
            <div class="about">
                <h1>{{ globalObject.thingsIDoTitle }}</h1>
                <p>{{ globalObject.thingsIDoDescription }}</p>
            </div>
            <div class="skills container">
                <h1>{{ globalObject.skillsTitle }}</h1>
                <p> {{  globalObject.skillsDescription }}</p>
                <div class="btn-container">
                    <download-button @click="downloadCv()" class="">Download CV</download-button>
                </div>
            </div>
        </div>
        <div class="personal-blog container">
            <h1>{{ this.globalObject.blogTitle }}</h1>
            <div class="blog-content" :class="{ 'expanded': latestPosts.length === 0 }">
                <ul v-if="latestPosts.length > 0" class="last-posts">
                    <blog-card v-for="(post, index) in latestPosts" :post="post" :key="index" typeOfCard="minimalist"></blog-card>
                </ul>
                <div class="youtube-video">
                    <iframe src="https://www.youtube.com/embed/Pe_twvBox1s"></iframe>
                </div>
            </div>
        </div>
        <main-button :isLink="true" to="/blog" color="black" class="see-more-btn">{{ globalObject.selectedWorkButton }}</main-button>
        <lets-talk></lets-talk>
    </section>
</template>

<style lang="scss" scoped>
@import 'HomeView.scss';
</style>

<script>
export default {
    data() {
        return {
            btnIsLoading: false,
        };
    },
    methods: {
        downloadCv() {
            if (!this.btnIsLoading && this.downloadCvTimes === 0) {
                const downloadCvUrl =
                    'https://drive.google.com/u/0/uc?id=1oNY4GFcR2zHu1pNPRduTSAR7rDTog4YH&export=download';
                this.btnIsLoading = true;
                this.$store.commit('increeseDownloadTimes');
                setTimeout(() => {
                    window.open(downloadCvUrl, '_blank');
                    this.btnIsLoading = false;
                }, 3050);
            }
            if (!this.btnIsLoading && this.downloadCvTimes > 0) {
                const viewCvUrl =
                    'https://drive.google.com/file/d/1oNY4GFcR2zHu1pNPRduTSAR7rDTog4YH/view?usp=share_link';
                this.$store.commit('increeseDownloadTimes');
                window.open(viewCvUrl, '_blank');
            }
        },
    },
    computed: {
        selectedWorks() {
            return this.$store.getters.selectedWorks;
        },
        globalObject() {
            return this.$store.getters.getlanguageObject;
        },
        downloadCvTimes() {
            return this.$store.getters.getDownloadTimes;
        },
        latestPosts() {
            return this.$store.getters.getLatestPosts;
        },
    },
};
</script>
