<template>
<div  class="animated-title-container">
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
            showComponent: true,
        };
    },
    created() {
        this.populateArrays();
        this.animateWords();
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
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import 'AnimatedTitle.scss';
</style>
