<template>
  <div class="vt-menu-group">
    <p v-if="text" class="vt-menu-group-title">{{ text }}</p>

    <template v-for="item in items">
      <VTMenuLink
        v-if="item.link"
        :key="item.text"
        :text="item.text"
        :link="item.link"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { MenuItemWithChildren } from '../composables/menu'
import VTMenuLink from './VTMenuLink.vue'

defineProps<{
  text?: string
  items: MenuItemWithChildren[]
}>()
</script>
