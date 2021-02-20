<template>
  <transition
    name="fade"
    @after-enter="lockBodyScroll"
    @after-leave="unlockBodyScroll"
  >
    <div v-if="open" class="VPNavScreen" ref="screen">
      <div class="container">
        <VPNavScreenAppearance />
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { defineProps, ref } from 'vue'
import VPNavScreenAppearance from './VPNavScreenAppearance.vue'

const props = defineProps<{
  open: boolean
}>()

const screen = ref<HTMLElement | null>(null)

function lockBodyScroll() {
  disableBodyScroll(container.value)
}

function unlockBodyScroll() {
  clearAllBodyScrollLocks()
}
</script>

<style scoped>
.VPNavScreen {
  position: fixed;
  top: 56px;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 24px;
  width: 100%;
  background-color: var(--c-bg);
  transition: background-color .5s;
  overflow: hidden;
  overflow-y: auto;
}

.VPNavScreen.fade-enter-active,
.VPNavScreen.fade-leave-active {
  transition: opacity .25s;
}

.VPNavScreen.fade-enter-active .container,
.VPNavScreen.fade-leave-active .container {
  transition: transform .25s ease;
}

.VPNavScreen.fade-enter-from,
.VPNavScreen.fade-leave-to {
  opacity: 0;
}

.VPNavScreen.fade-enter-from .container,
.VPNavScreen.fade-leave-to .container {
  transform: translateY(-8px);
}

.container {
  margin: 0 auto;
  padding: 16px 0 96px;
  max-width: 288px;
}
</style>
