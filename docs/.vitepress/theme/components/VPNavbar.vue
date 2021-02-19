<template>
  <div class="VPNavbar">
    <VPNavbarTitle />
  </div>
</template>

<script lang="ts" setup>
import VPNavbarTitle from './VPNavbarTitle.vue'
</script>

<style scoped>
.VPNavbar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--c-divider-light);
  padding: 0 24px;
  height: 56px;
  background-color: var(--c-bg);
  transition: border-color .5s, background-color .5s;
}
</style>
