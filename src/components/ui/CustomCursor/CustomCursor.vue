<template>
<div v-if="!isTouchScreen" class="ball" ref="ball"></div>
</template>

<script>
import {
    gsap,
    Bounce
} from 'gsap';
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
            animatingOut: false,
        };
    },

    mounted() {
        this.isTouchScreen = window.matchMedia('(pointer: coarse)').matches;
        if (!this.isTouchScreen) {
            window.addEventListener('scroll', this.onScroll);
            window.addEventListener('mousemove', this.onMouseMove);
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
            this.ballPosition.x = event.pageX - 9;
            this.ballPosition.y = event.pageY - 9;
            this.updateBallPosition();
            const isInteraction = event.target.classList.contains(
                this.interactionClass
            );
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
                gsap.to(ball, {
                    x: x,
                    y: y,
                    duration: 0.1,
                });

                if (!this.isMoving) {
                    requestAnimationFrame(this.updateBallPosition);
                } else {
                    this.isMoving = false;
                }
            }
        },

        setInteraction(isInteraction) {
            const ball = this.$refs.ball;
            if (isInteraction) {
                gsap.to(
                    ball, {
                        scale: 2.2,
                        duration: 0.5,
                    },
                );
            } else {
                if (this.animatingOut == false) {
                    this.animatingOut = true
                    gsap.to(ball, {
                        scale: 1,
                        delay: 0,
                        duration: 0.5,
                        ease: Bounce.easeOut,
                    });
                    setTimeout(() => {
                        this.animatingOut = false
                    }, 1000);
                }
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
.ball {
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: $black-main;
    border: 1px solid $white-main;
    opacity: (0.5);
    pointer-events: none;
    z-index: 1000;
}
</style>
