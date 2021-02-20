<template>
  <div class="VPLayout">
    <VPNav />
  </div>
</template>

<script lang="ts" setup>
import { useFont } from '../composables/font'
import { useAppearance } from '../composables/appearance'
import VPNav from './VPNav.vue'

useFont()
useAppearance()
</script>

<style scoped>
.VPLayout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--c-bg);
  transition: background-color .5s;
}
</style>
