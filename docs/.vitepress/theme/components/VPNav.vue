<template>
  <header class="VPNav">
    <VPNavbar />
  </header>
</template>

<script lang="ts" setup>
import VPNavbar from './VPNavbar.vue'

</script>

<style scoped>
.VPNav {
  position: sticky;
  top: 0;
  left: 0;
  z-index: var(--z-index-navbar);
}
</style>
