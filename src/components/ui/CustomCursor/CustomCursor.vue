<template>
<div v-if="!isTouchScreen" class="ball" ref="ball"></div>
</template>

  
<script>
import {
    throttle
} from 'lodash';

export default {
    data() {
        return {
            ballPosition: {
                x: null,
                y: null,
            },
            isMoving: false,
            initialScrollPosition: null,
            isTouchScreen: false,
        };
    },

    mounted() {
        this.isTouchScreen = window.matchMedia('(pointer: coarse)').matches;
        if (!this.isTouchScreen) {
            window.addEventListener('scroll', throttle(this.onScroll, 150));
            window.addEventListener('mousemove', throttle(this.onMouseMove, 20));
            this.initialScrollPosition = window.scrollY;
            this.updateBallPosition();
        }
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('mousemove', this.onMouseMove);
    },

    methods: {
        onMouseMove(event) {
            this.ballPosition.x = event.pageX - 15;
            this.ballPosition.y = event.pageY - 15;
            this.updateBallPosition();
            const isInteraction = event.target.classList.contains(this.interactionClass);
            this.setInteraction(isInteraction);
        },

        onScroll() {
            this.isMoving = true;
            const currentScrollPosition = window.scrollY;
            const scrollDelta = currentScrollPosition - this.initialScrollPosition;

            if (scrollDelta !== 0) {
                this.ballPosition.y += scrollDelta;
                this.initialScrollPosition = currentScrollPosition;
                this.updateBallPosition();
            }
        },

        updateBallPosition() {
            const {
                x,
                y
            } = this.ballPosition;
            const ball = this.$refs.ball;

            if (x !== null && y !== null) {
                ball.style.transform = `translate(${x}px, ${y}px)`;

                if (!this.isMoving) {
                    requestAnimationFrame(this.updateBallPosition);
                } else {
                    this.isMoving = false;
                }
            }
        },

        setInteraction(isInteraction) {
            const ball = this.$refs.ball;
            const uperScaleClass = `uper-scale`;

            if (isInteraction) {
                ball.classList.add(uperScaleClass);
            } else {
                ball.classList.remove(uperScaleClass);
            }
        },
    },

    computed: {
        interactionClass() {
            return 'interact-cursor';
        },
    },
};
</script>

  
<style lang="scss" scoped>
@import './CustomCursor.scss'
</style>
