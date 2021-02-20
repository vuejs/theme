<template>
  <VTLink class="VPNavBarMenuLink" :href="link">
    {{ text }}
  </VTLink>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { VTLink } from 'vue-theme'

defineProps<{
  text: string
  link: string
}>()
</script>

<style scoped>
.VPNavBarMenuLink {
  display: block;
  padding: 0 12px;
  line-height: 55px;
  font-size: 13px;
  font-weight: 500;
  color: var(--c-text-1);
  transition: color .25s;
}

.VPNavBarMenuLink:hover {
  color: var(--c-brand);
}
</style>
