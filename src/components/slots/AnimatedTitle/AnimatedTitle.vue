<template>
<div class="animated-title-container">
    <div class="first-line">
        <span v-for="(word, index) in firstSequence" :key="index" class="animated-item hidden">{{ word }}</span>
    </div>
    <div v-if="secondLine !== ''" class="second-line">
        <span v-for="(word, index) in secondSequece" :key="index" class="animated-item hidden">{{ word }}</span>
    </div>
</div>
</template>

<script>
export default {
    props: {
        firstLine: {
            type: String,
            required: true,
            default: 'This is the first Line',
        },
        secondLine: {
            type: String,
            required: false,
        },
    },
    data() {
        return {
            firstSequence: [],
            secondSequece: [],
        };
    },
    async created() {
        this.populateArrays();
        if (window.screen.width < 992) {
            this.animateWords()
            return
        }
        window.addEventListener('mousemove', this.animateWords);
        window.addEventListener('focus', this.animateWords);
        window.addEventListener('scroll', this.animateWords);
    },
    methods: {
        populateArrays() {
            if (this.firstLine) {
                this.firstSequence = this.firstLine.split(' ');
            }
            if (this.secondLine) {
                this.secondSequece = this.secondLine.split(' ');
            }
        },
        animateWords() {
            this.$nextTick(() => {
                const items = document.querySelectorAll('.animated-item');
                let index = 0;
                const interval = setInterval(() => {
                    items[index].classList.remove('hidden');
                    items[index].classList.add('show');
                    index++;
                    if (index === items.length) {
                        clearInterval(interval);
                    }
                }, 100);
            }).then(
                this.removeEventListeners
            );
        },
        removeEventListeners() {
            window.removeEventListener('mousemove', this.animateWords);
            window.removeEventListener('focus', this.animateWords);
            window.removeEventListener('scroll', this.animateWords);
        }
    },
};
</script>

<style lang="scss" scoped>
@import 'AnimatedTitle.scss'
</style>
