<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useConfig } from '../composables/config'
import { useOutlineHeaders } from '../composables/outline.js'
import VPDocOutlineItem from './VPDocOutlineItem.vue'
import { onContentUpdated } from 'vitepress'
import VPIconChevronRight from '../../core/components/icons/VTIconChevronRight.vue'

const { config } = useConfig()
const open = ref(false)
const vh = ref(0)
const items = ref<HTMLDivElement>()

const headers = useOutlineHeaders()

onContentUpdated(() => {
  open.value = false
})

function toggle() {
  open.value = !open.value
  vh.value = window.innerHeight + Math.min(window.scrollY - 64, 0)
}

function onItemClick(e: Event) {
  if ((e.target as HTMLElement).classList.contains('outline-link')) {
    // disable animation on hash navigation when page jumps
    if (items.value) {
      items.value.style.transition = 'none'
    }
    nextTick(() => {
      open.value = false
    })
  }
}

function scrollToTop() {
  open.value = false
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="VPLocalNavOutlineDropdown" :style="{ '--vt-vh': vh + 'px' }">
    <button @click="toggle" :class="{ open }">
      {{ config.i18n?.toc ?? 'On this page' }}
      <VPIconChevronRight class="icon" />
    </button>
    <Transition name="flyout">
      <div v-if="open" ref="items" class="items" @click="onItemClick">
        <a class="top-link" href="#" @click="scrollToTop">
          {{ config.i18n?.returnToTop || 'Return to top' }}
        </a>
        <VPDocOutlineItem :headers="headers" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.VPLocalNavOutlineDropdown {
  padding: 12px 20px 11px;
}
.VPLocalNavOutlineDropdown button {
  display: block;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  position: relative;
}

.VPLocalNavOutlineDropdown button:hover {
  color: var(--vt-c-text-1);
  transition: color 0.25s;
}

.VPLocalNavOutlineDropdown button.open {
  color: var(--vt-c-text-1);
}

.icon {
  display: inline-block;
  vertical-align: middle;
  margin-left: 2px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}

:deep(.outline-link) {
  font-size: 14px;
  font-weight: 500;
  padding: 2px 0;
}

.open > .icon {
  transform: rotate(90deg);
}

.items {
  position: absolute;
  left: 20px;
  right: 20px;
  top: 60px;
  background-color: var(--vt-c-bg);
  padding: 4px 20px 16px;
  border: 1px solid var(--vt-c-divider);
  border-radius: 8px;
  max-height: calc(var(--vt-vh, 100vh) - 86px);
  overflow: scroll;
  box-shadow: var(--vt-shadow-3);
}

.top-link {
  display: block;
  color: var(--vt-c-brand);
  font-size: 13px;
  font-weight: 500;
  padding: 6px 0;
  margin: 0 0 10px;
  border-bottom: 1px solid var(--vt-c-divider);
}

.flyout-enter-active {
  transition: all 0.2s ease-out;
}

.flyout-leave-active {
  transition: all 0.15s ease-in;
}

.flyout-enter-from,
.flyout-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}
</style>
