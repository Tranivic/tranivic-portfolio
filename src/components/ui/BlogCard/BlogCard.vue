<template>
    <template v-if="post">
        <template v-if="typeOfCard === 'complete'">
            <li @click="pushToBlogPost" class="blog-card complete">
                <header :style="{ backgroundImage: 'url(' + post.coverImage.url + ')' }"></header>
                <footer>
                    <h1>{{ post.title }}.</h1>
                    <p>{{ post.brief }}</p>
                </footer>
            </li>
        </template>
        <template v-else>
            <li class="blog-card minimalist">
                <header>
                    <h1>{{ post.title }}.</h1>
                    <p>{{ post.brief }}</p>
                </header>
                <footer>
                    <main-button :isLink="false" @click="pushToBlogPost" class="read-btn">{{ this.readMoreBtnText }}</main-button>
                    <div class="like-container">
                        <i class="fas fa-book-open"></i>
                        <span>{{ this.minOfReading(4) }}</span>
                    </div>
                </footer>
            </li>
        </template>
    </template>
    <template v-else>
        <li class="blog-card minimalist">
                <header>
                    <h1>Waiting...</h1>
                    <p>Waiting...</p>
                </header>
            </li>
    </template>
</template>

<style lang="scss" scoped>
    @import 'BlogCard.scss';
</style>

<script>
    export default {
        props: {
            typeOfCard: {
                type: String,
                required: true,
            },
            post: {
                type: Object,
            },
        },
        methods: {
            pushToBlogPost() {
                window.open(`${this.post.url}`, '_blank');
            },
            minOfReading(number) {
                return `${number} ${this.$store.getters.getlanguageObject.readingTime}`;
            }
        },
        computed: {
            readMoreBtnText() {
                return this.$store.getters.getlanguageObject.readMoreButton;
            },
        },
    };
</script>
