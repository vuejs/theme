<script lang="ts" setup>
import { defineProps } from 'vue'
import VTLink from './VTLink.vue'
import type { MenuItemWithLink } from '../composables/menu'

defineProps<{ item: MenuItemWithLink }>()
</script>

<template>
  <VTLink class="vt-menu-link" :href="item.link">
    {{ item.text }}
  </VTLink>
</template>
