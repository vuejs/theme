<script setup lang="ts">
import { MenuBadgeItem } from '../../core'

defineProps<{ item: MenuBadgeItem }>()
</script>

<template>
  <span class="vt-menu-badge" :class="item.type">{{ item.text }}</span>
</template>
