<script lang="ts" setup>
import { defineProps } from 'vue'
import { VTLink } from '../../core'

defineProps<{
  text: string
  link: string
}>()
</script>

<template>
  <VTLink class="VPNavBarMenuLink" :href="link">
    {{ text }}
  </VTLink>
</template>

<style scoped>
.VPNavBarMenuLink {
  display: block;
  padding: 0 12px;
  line-height: 55px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-1);
  transition: color 0.25s;
}

.VPNavBarMenuLink:hover {
  color: var(--vt-c-brand);
}
</style>
