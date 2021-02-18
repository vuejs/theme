<template>
  <div class="VPLayout">
    <VTSwitchAppearance />
  </div>
</template>

<script lang="ts" setup>
import { VTSwitchAppearance, useAppearance } from 'vue-theme'

useAppearance()
</script>

<style scoped>
.VPLayout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--c-bg);
  transition: background-color .5s;
}
</style>
