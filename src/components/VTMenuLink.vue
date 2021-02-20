<template>
  <VTLink class="VTMenuLink" :href="link">
    {{ text }}
  </VTLink>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import VTLink from './VTLink.vue'

defineProps<{
  text: string
  link: string
}>()
</script>

<style scoped>
.VTMenuLink {
  display: block;
  line-height: 28px;
  font-size: 13px;
  font-weight: 400;
  color: var(--c-text-1);
  transition: color .25s;
}

.VTMenuLink:hover {
  color: var(--c-brand);
}
</style>
