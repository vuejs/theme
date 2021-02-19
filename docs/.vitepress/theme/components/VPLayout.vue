<template>
  <div class="VPLayout">
    <VPNav />

    <div class="switch">
      <VTSwitchAppearance />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VTSwitchAppearance, useAppearance } from 'vue-theme'
import VPNav from './VPNav.vue'

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

.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
