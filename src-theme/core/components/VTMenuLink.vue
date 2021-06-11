<template>
  <VTLink class="vt-menu-link" :href="link">
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
