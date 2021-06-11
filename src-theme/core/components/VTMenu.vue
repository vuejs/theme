<template>
  <div class="vt-menu">
    <div v-if="items" class="vt-menu-items">
      <template v-for="item in items">
        <VTMenuLink
          v-if="item.link"
          :key="item.text"
          :text="item.text"
          :link="item.link"
        />

        <VTMenuGroup
          v-else
          :key="item.text"
          :text="item.text"
          :items="item.items"
        />
      </template>
    </div>

    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { MenuItem } from '../composables/menu'
import VTMenuLink from './VTMenuLink.vue'
import VTMenuGroup from './VTMenuGroup.vue'

defineProps<{
  items?: MenuItem[]
}>()
</script>
