<template>
    <canvas :style="{ width: '500px', height: '500px' }" ref="el"></canvas>
</template>

<style lang="scss">
@import "./DottedGlobe.scss";
</style>

<script setup>
import { ref, onMounted } from 'vue';
import createGlobe from 'cobe';

const el = ref();
const phi = ref(0);

onMounted(() => {
  const globe = createGlobe(el.value, {
    devicePixelRatio: 2,
    width: 300 * 3,
    height: 300 * 2.7,
    phi: 2,
    theta: 0.48,
    dark: 0,
    diffuse: 4.0,
    mapSamples: 16000,
    mapBrightness: 3,
    baseColor: [1, 1, 1],
    markerColor: [0.937, 0.349, 0],
    glowColor: [1, 1, 1],
    scale: 1.3,
    markers: [
      // longitude latitude
      { location: [37.7595, -122.4367], size: 0.03 },
      { location: [40.7128, -74.006], size: 0.1 },
    ],
    onRender: (state) => {
      // Called on every animation frame.
      // `state` will be an empty object, return updated params.
      state.phi = phi.value;
      phi.value += 0.0040;
    },
  });
});
</script>