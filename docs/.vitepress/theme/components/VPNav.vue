<template>
  <header class="VPNav">
    <VPNavBar :is-screen-open="isScreenOpen" @toggle-screen="toggleScreen" />
    <VPNavScreen :open="isScreenOpen" @jump="closeScreen" />
  </header>
</template>

<script lang="ts" setup>
import { useNav } from '../composables/nav'
import VPNavBar from './VPNavBar.vue'
import VPNavScreen from './VPNavScreen.vue'

const { isScreenOpen, closeScreen, toggleScreen } = useNav()
</script>

<style scoped>
.VPNav {
  position: sticky;
  top: 0;
  left: 0;
  z-index: var(--z-index-nav);
}
</style>
