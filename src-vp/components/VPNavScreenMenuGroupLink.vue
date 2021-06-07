<template>
  <VTLink class="VPNavScreenMenuGroupLink" :href="link" @click="$emit('jump')">
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
.VPNavScreenMenuGroupLink {
  display: block;
  line-height: 32px;
  font-size: 13px;
  font-weight: 400;
  color: var(--c-text-1);
  transition: color .25s;
}

.VPNavScreenMenuGroupLink:hover {
  color: var(--c-brand);
}
</style>
