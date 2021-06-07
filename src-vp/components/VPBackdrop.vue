<template>
  <transition name="fade">
    <div v-if="show" class="VPBackdrop" />
  </transition>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  show: boolean
}>()
</script>

<style scoped>
.VPBackdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-index-backdrop);
  background: rgba(0, 0, 0, .6);
  transition: opacity .5s;
}

.VPBackdrop.fade-enter-from,
.VPBackdrop.fade-leave-to {
  opacity: 0;
}
</style>
