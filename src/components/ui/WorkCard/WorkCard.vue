<template>
<li v-if="!isShort" class="work-card">
    <div class="backgroud-img" :style="{ backgroundImage: 'url(' + work.image + ')' }"></div>
    <div class="card-top">
        <main-button @click="pushToProject" color="white">Website</main-button>
    </div>
    <div class="card-botton">
        <h1 class="botton-title">{{ work.name }}</h1>
        <p class="botton-description">{{ workDescription }}</p>
        <ul class="technologies-list">
            <li v-for="technologie in work.technologies" :key="technologie" class="technologies-item">
                {{ technologie }}
            </li>
        </ul>
        <h1 class="botton-title">Status: {{ this.underConstruction }}</h1>
    </div>
</li>
</template>

<script>
export default {
    props: {
        work: {
            type: Object,
            required: true,
        },
        isShort: Boolean,
        required: false,
        default: false,
    },
    methods: {
        pushToProject() {
            window.open(`${this.work.link}`, '_blank');
        },
    },
    computed: {
        workDescription(){
            if(this.languageSelected === 'en'){
                return this.work.description
            } else{
                return this.work.descriptionPt
            }
        },
        underConstruction() {
            if (this.work.underConstruction && this.languageSelected === 'en') {
                return 'Project Under Construction 🚧';
            } else if (!this.work.underConstruction && this.languageSelected === 'en') {
                return 'Finished Project ✅';
            }
            if (this.work.underConstruction && this.languageSelected === 'br') {
                return 'Projeto em construção 🚧';
            } else if (!this.work.underConstruction && this.languageSelected === 'br') {
                return 'Projeto Finalizado ✅';
            }
        },
        languageSelected() {
            return this.$store.getters.getSelectedLanguage
        }
    },
};
</script>

<style lang="scss" scoped>
@import 'WorkCard.scss';
</style>
