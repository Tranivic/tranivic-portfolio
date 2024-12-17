<template>
    <section class="home-page">
        <div class="home-page wrapper">
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
                <p> {{globalObject.skillsDescription}} </p>
                <div class="btn-container">
                    <download-button @click="downloadCv()"></download-button>
                </div>
            </div>
        </div>
        <div class="my-expertise container" v-if="globalObject.my_expertise">
            <div class="row">
                <div class="card big">
                    <div class="wrapper" style="transform: rotateX(45deg); height: 100%; width: 100%; position: absolute; perspective: 600px; z-index: -1;">
                        <div class="wrapper-2" style="transform: rotateX(45deg); height: 100%; width: 100%; position: absolute;">
                            <div class="bg-grid">
                                <div class="gradient-effect" style="width: 100%; background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.8) 45%); position: absolute; z-index: 12121212; height: 100%; opacity: .9">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-info">
                        <i class="card-icon fa-solid fa-brain"></i>
                        <h1>{{ globalObject.my_expertise.grid.title }}</h1>
                        <p>{{ globalObject.my_expertise.grid.text }}</p>
                    </div>
                    <a href="https://cal.com/tranivic/15min?date=2024-04-09&month=2024-04" target="_blank" class="call-btn">Free discovery call <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="card small">
                    <div class="card-info">
                        <i class="card-icon fa-solid fa-rocket"></i>
                        <h1>{{ globalObject.my_expertise.rocket.title }}</h1>
                        <p>{{ globalObject.my_expertise.rocket.text }}</p>
                    </div>
                    <a href="https://cal.com/tranivic/15min?date=2024-04-09&month=2024-04" target="_blank" class="call-btn">Free discovery call <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="row">
                <div class="card small">
                    <div class="card-info">
                        <i class="card-icon fa-solid fa-computer"></i>
                        <h1>{{ globalObject.my_expertise.skills.title }}</h1>
                        <p>{{ globalObject.my_expertise.skills.text }}</p>
                    </div>
                    <a href="https://cal.com/tranivic/15min?date=2024-04-09&month=2024-04" target="_blank" class="call-btn">Free discovery call <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="card big">
                    <div class="card-info">
                        <i class="card-icon fa fa-tasks" aria-hidden="true"></i>
                        <h1>{{ globalObject.my_expertise.job.title }}</h1>
                        <p>{{ globalObject.my_expertise.job.text }}</p>
                    </div>
                    <div class="card-effect">
                        <DottedGlobe/>
                    </div>
                    <a href="https://cal.com/tranivic/15min?date=2024-04-09&month=2024-04" target="_blank" class="call-btn">Free discovery call <i class="fa-solid fa-arrow-right"></i></a>
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
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import 'HomeView.scss';
</style>

<script>
import DottedGlobe from '@/components/ui/DottedGlobe/DottedGlobe.vue';
export default {
    data() {
        return {
            btnIsLoading: false,
        };
    },
    components: {
        DottedGlobe
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
