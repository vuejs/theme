<template>
  <header class="VPNav">
    <VPNavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen" />
    <VPNavScreen :open="isScreenOpen" />
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VPNavBar from './VPNavBar.vue'
import VPNavScreen from './VPNavScreen.vue'

const isScreenOpen = ref(false)

function openScreen() {
  isScreenOpen.value = true
}

function closeScreen() {
  isScreenOpen.value = false
}

function toggleScreen() {
  isScreenOpen.value = !isScreenOpen.value
}
</script>

<style scoped>
.VPNav {
  position: sticky;
  top: 0;
  left: 0;
  z-index: var(--z-index-nav);
}
</style>
