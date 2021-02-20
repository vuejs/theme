<template>
  <div class="VTMenuGroup">
    <p v-if="text" class="title item">{{ text }}</p>

    <template v-for="item in items">
      <VTMenuLink
        v-if="item.link"
        class="item"
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

<style scoped>
.title {
  line-height: 28px;
  font-size: 13px;
  font-weight: 700;
  color: var(--c-text-2);
  transition: color .25s;
}
</style>
