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
            required: true,
            default: 'This is the second Line',
        },
    },
    data() {
        return {
            firstSequence: [],
            secondSequece: [],
        };
    },
    async created() {
        await this.populateArrays();
        this.animateWords();
    },
    methods: {
        populateArrays() {
            this.firstSequence = this.firstLine.split(' ');
            this.secondSequece = this.secondLine.split(' ');
        },
        animateWords() {
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
        },
    },
};
</script>

<style lang="scss" scoped>
.animated-title-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;

    .animated-item {
      display: inline-block;
        margin-right: 2rem;
        font-weight: 600;
        transition: all .4s ease;
        font-size: 5rem;
    }
}

.hidden {
    opacity: 0;
    transform: translate(10px, 10px);
}

.show {
    opacity: 1;
    transform: scale(1);
    transform: translate(-10px, -10px);
}
</style>
