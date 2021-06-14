<script lang="ts" setup>
import { defineProps } from 'vue'
import { VTLink } from '../../core'

defineProps<{
  text: string
  link: string
}>()
</script>

<template>
  <VTLink class="VPNavScreenMenuGroupLink" :href="link" @click="$emit('jump')">
    {{ text }}
  </VTLink>
</template>

<style scoped>
.VPNavScreenMenuGroupLink {
  display: block;
  line-height: 32px;
  font-size: 13px;
  font-weight: 400;
  color: var(--vt-c-text-1);
  transition: color 0.25s;
}

.VPNavScreenMenuGroupLink:hover {
  color: var(--vt-c-brand);
}
</style>
