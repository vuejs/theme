<script lang="ts" setup>
import { defineProps } from 'vue'
import type { MenuItemChild } from '../composables/menu'
import VTMenuLink from './VTMenuLink.vue'

defineProps<{
  text?: string
  items: MenuItemChild[]
}>()
</script>

<template>
  <div class="vt-menu-group">
    <p v-if="text" class="vt-menu-group-title">{{ text }}</p>

    <template v-for="item in items">
      <VTMenuLink
        v-if="'link' in item"
        :key="item.text"
        :text="item.text"
        :link="item.link"
      />
    </template>
  </div>
</template>
