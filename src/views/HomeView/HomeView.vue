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
            <h1>{{ globalObject.thingsIDoTitle}}</h1>
            <p>{{ globalObject.thingsIDoDescription }}</p>
        </div>
        <div class="skills">
            <h1>{{ globalObject.skillsTitle }}</h1>
            <p>HTML / CSS / SASS / JS / Vue / Nuxt.js / Tailwind CSS / Bootstrap / TypeScript / Figma / Adobe XD</p>
            <div class="btn-container">
                <download-button @click="downloadCv()" class="">Download CV</download-button>
            </div>
        </div>
    </div>
    <lets-talk></lets-talk>
</section>
</template>

<script>
export default {
    data() {
        return {
            btnIsLoading: false,
        };
    },
    methods: {
        downloadCv() {
            const downloadCvUrl = 'https://drive.google.com/u/0/uc?id=1k72zHZ2uO-D6K2mgxNM5cVc1_jJHwqE3&export=download'
            const viewCvUrl = 'https://doc-0c-64-docs.googleusercontent.com/docs/securesc/utev53p5pudm16sn7mtlt0mucu43a7bd/jc3sftog7r3te42aid00fuo5ikh1opbc/1683128175000/00320365092928674969/00320365092928674969/1k72zHZ2uO-D6K2mgxNM5cVc1_jJHwqE3?e&ax=ADWCPKCXKXxvmoEiPK_Vy7r6fsta1I7QvbdpaMCZ27AmgRwqmwagtr4WsG8dgp64p00Nq7D4Alpk0iO_XU_hXroQxpwwm9ngoEYzPZmELdcu3aG-D2sBiMR2VcyUnr5hbOxvJytFKZTIbWxl8WvnhpHiiyZ42K1p9Gk_edxbGphTuuT_qiMI8_X-KSsHgyVnXfRE0aOgzxKJqTKw1jtR_p689TkW-pf32g_najrEkaBlI6BMxUsprKxt_ooLzm8Tyy-HEJbTo_Wz62rLPvWHUrW5McvMulLd5AImOBsvsR9IpOC2BoDZbd8PMurrfJS-qYe8z4U5lFoEG-AXKw_jJFxE-ZJrZc7LF_dZ9RmNdiHw2JiQGI6cQDjSSUYexIlDnfFvQexCSgbIxFWF_8uE1WUY-_F-uBwxcPsc4HUukPFHqeaKdIQotSX_F5r4l7gskhA2EowyQ6TXdEW2Y0AjDmoqn291gHpl_FInnHqXShf8D43bs7MN9EdfMBaHqLMKPwgHub8X-RZh5AAUQ2x7NsErd8Ps74GJY6t9UlBqBwwVGemAI19jwJsIO4o-KGOmLsZoYXRhOq3IsWzdKahRs6_vDUtXfRbKzBgTTFqJfyXxqfwY8t4G3N6gvPJ3VFqF-d-9Vaq40mF7epY1vnr2mahkxUngLmj1205lsUjDOjM-i_R8UWAafJ5_D0a-lv91CHJQnLsxYas7nFmXsno4lgnwf0dVchCMM4Fzu5DTPPFrfshR2WDssvz3rH4Xfz8TwXU7ilMETq7YVMwNVEvZgPe0eQ8jcexCQeJV1X5p37eRri3ktyVxt0SVijYdF5WTw8LQ9_tAFzHHgNALUYiSbQrJp95gFEE1Tgu5rpeBQe7xrKy36YuilPaf6s7Mx4ZqceBbZw3tKzaeHkmhgVWDq6C6JHB_7pVOmyY2NsYONuo&uuid=6d830f33-7a33-46ae-b072-23a37ee84c04&authuser=0'
            if (!this.btnIsLoading && this.downloadCvTimes === 0) {
                this.btnIsLoading = true
                this.$store.commit('increeseDownloadTimes')
                setTimeout(() => {
                    window.open(downloadCvUrl, '_blank')
                    this.btnIsLoading = false
                }, 3050);
            }
            if (!this.btnIsLoading && this.downloadCvTimes > 0) {
                this.$store.commit('increeseDownloadTimes')
                window.open(viewCvUrl, '_blank')
            }
        }
    },
    computed: {
        selectedWorks() {
            return this.$store.getters.selectedWorks
        },
        globalObject() {
            return this.$store.getters.getlanguageObject
        },
        downloadCvTimes() {
            return this.$store.getters.getDownloadTimes
        }
    },
};
</script>

<style lang="scss" scoped>
@import 'HomeView.scss';
</style>
