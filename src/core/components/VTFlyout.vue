<script lang="ts" setup>
import { ref } from 'vue'
import { MenuBadgeItem, MenuItem, MenuItemChild } from '../types/menu'
import { useFocusContainer } from '../composables/FocusContainer'
import VTIconChevronDown from './icons/VTIconChevronDown.vue'
import VTIconMoreHorizontal from './icons/VTIconMoreHorizontal.vue'
import VTMenu from './VTMenu.vue'
import VTMenuBadge from './VTMenuBadge.vue'

const props = defineProps<{
  button?: string
  items?: (MenuItem | MenuItemChild)[]
  label?: string
  badge?: MenuBadgeItem
}>()

const open = ref(false)
const elRef = ref<HTMLElement>()
const onBlur = () => { open.value = false }

useFocusContainer({
  elRef,
  onBlur
})
</script>

<template>
  <div
    class="vt-flyout"
    ref="elRef"
    @mouseenter="open = true"
    @mouseleave="open = false"
  >
    <button
      type="button"
      class="vt-flyout-button"
      aria-haspopup="true"
      :aria-expanded="open"
      :aria-label="label"
      @click="open = !open"
    >
      <slot name="btn-slot">
        <span v-if="props.button" class="vt-flyout-button-text">
          {{ props.button }}
          <VTMenuBadge v-if="badge" :item="badge" />
          <VTIconChevronDown class="vt-flyout-button-text-icon" />
        </span>

        <VTIconMoreHorizontal v-else class="vt-flyout-button-icon" />
      </slot>
    </button>

    <div class="vt-flyout-menu">
      <VTMenu :items="items">
        <slot />
      </VTMenu>
    </div>
  </div>
</template>
