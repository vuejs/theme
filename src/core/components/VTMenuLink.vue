<script lang="ts" setup>
import { defineProps } from 'vue'
import VTLink from './VTLink.vue'

defineProps<{
  text: string
  link: string
}>()
</script>

<template>
  <VTLink class="vt-menu-link" :href="link">
    {{ text }}
  </VTLink>
</template>
