<template>
<div v-if="!isTouchScreen" class="ball" ref="ball"></div>
</template>

<script>
import {
    gsap
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
            canInteract: false,
        };
    },

    mounted() {
        this.isTouchScreen = window.matchMedia('(pointer: coarse)').matches;
        if (!this.isTouchScreen) {
            window.addEventListener('scroll', this.onScroll);
            window.addEventListener('mousemove', this.onMouseMove);
            this.updateBallPosition();
        }
    },
    beforeMount() {
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('mousemove', this.onMouseMove);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('mousemove', this.onMouseMove);
    },
    methods: {
        onMouseMove(event) {
            this.ballPosition.x = event.pageX - 9;
            this.ballPosition.y = event.pageY - 9;
            this.canInteract = event.target.classList.contains(this.interactionClass)
            if (this.canInteract) {
                this.setInteraction();
            } else {
                this.canInteract = false
                this.setInteraction()
            }
            this.updateBallPosition();
        },

        onScroll() {
            const currentScrollPosition = window.scrollY;
            const scrollDelta = currentScrollPosition - this.initialScrollPosition;

            if (scrollDelta !== 0) {
                this.ballPosition.y += scrollDelta;
                this.initialScrollPosition = currentScrollPosition;
                this.updateBallPosition();
            }
        },

        updateBallPosition() {
            const ball = this.$refs.ball;
            if (!this.isMoving) {
                this.isMoving = true;
                const {
                    x,
                    y
                } = this.ballPosition;
                if (x !== null && y !== null) {
                    requestAnimationFrame(() => {
                        ball.style.transform = `translate(${x}px, ${y}px)`;
                        gsap.to(ball, {
                            x: x,
                            y: y,
                            delay: 0,
                            duration: 0,
                        })
                    });
                    this.isMoving = false;
                } else {
                    this.isMoving = false;
                }
            }
        },

        setInteraction() {
            const ball = this.$refs.ball;
            const scale = this.canInteract ? 2.5 : 1
            gsap.to(ball, {
                scale: scale,
                delay: 0,
                duration: 0.2,
            });
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
