<template>
  <div v-if="config.appearance" class="VPNavScreenAppearance">
    <p class="text">Appearance</p>
    <VTSwitchAppearance />
  </div>
</template>

<script lang="ts" setup>
import { VTSwitchAppearance } from 'vue-theme'
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>

<style scoped>
.VPNavScreenAppearance {
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 12px 14px 12px 16px;
  background-color: var(--c-bg-soft);
  transition: background-color .5s;
}

.text {
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  color: var(--c-text-2);
  transition: color .5s;
}
</style>
