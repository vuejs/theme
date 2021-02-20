<template>
  <div class="VTFlyout">
    <button class="button">
      <span v-if="props.button" class="button-text">{{ props.button }}</span>
      <VTIconMoreHorizontal v-else class="button-icon" />
    </button>

    <div class="menu">
      <VTMenu>
        <slot />
      </VTMenu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import VTIconMoreHorizontal from './icons/VTIconMoreHorizontal.vue'
import VTMenu from './VTMenu.vue'

const props = defineProps<{
  button?: string
}>()
</script>

<style lang="postcss" scoped>
.VTFlyout {
  position: relative;
}

.VTFlyout:hover {
  color: var(--c-bland);
  transition: color .25s;
}

.VTFlyout:hover .button-icon {
  fill: var(--c-text-2);
}

.VTFlyout:hover .menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.button {
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 55px;
  color: var(--c-text-1);
  transition: color .5s;
}

.button-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  transition: fill .25s;
}

.menu {
  position: absolute;
  top: 43px;
  right: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition: opacity .25s, visibility .25s, transform .25s;
}
</style>
