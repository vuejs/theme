<script lang="ts" setup>
import { MenuItem, MenuItemChild } from '../composables/menu'
import VTIconChevronDown from './icons/VTIconChevronDown.vue'
import VTIconMoreHorizontal from './icons/VTIconMoreHorizontal.vue'
import VTMenu from './VTMenu.vue'

const props = defineProps<{
  button?: string
  items?: (MenuItem | MenuItemChild)[]
}>()
</script>

<template>
  <div class="vt-flyout">
    <button class="vt-flyout-button">
      <span v-if="props.button" class="vt-flyout-button-text">
        {{ props.button }}
        <VTIconChevronDown class="vt-flyout-button-text-icon" />
      </span>

      <VTIconMoreHorizontal v-else class="vt-flyout-button-icon" />
    </button>

    <div class="vt-flyout-menu">
      <VTMenu :items="items">
        <slot />
      </VTMenu>
    </div>
  </div>
</template>
