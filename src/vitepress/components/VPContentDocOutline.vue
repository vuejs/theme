<script setup lang="ts">
import { useActiveAnchor, useOutlineHeaders } from '../composables/outline'
import { ref } from 'vue'
import { useConfig } from '../composables/config'
import VPDocOutlineItem from './VPDocOutlineItem.vue'

const { config } = useConfig()
const container = ref()
const marker = ref()
const headers = useOutlineHeaders()

useActiveAnchor(container, marker)
</script>

<template>
  <div class="VPContentDocOutline" ref="container">
    <div class="outline-marker" ref="marker" />
    <div class="outline-title">{{ config.i18n?.toc ?? 'On this page' }}</div>
    <nav aria-labelledby="doc-outline-aria-label">
      <span id="doc-outline-aria-label" class="visually-hidden">{{
        config.i18n?.ariaToC ?? 'Table of Contents for current page'
      }}</span>
      <VPDocOutlineItem :headers="headers" />
    </nav>
  </div>
</template>

<style scoped>
.VPContentDocOutline {
  font-size: 13px;
  font-weight: 500;
  position: relative;
}

.outline-title {
  font-weight: 700;
  margin-bottom: 4px;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.4px;
}

.outline-marker {
  opacity: 0;
  position: absolute;
  background-color: var(--vt-c-green);
  border-radius: 4px;
  width: 4px;
  height: 20px;
  top: 32px;
  left: -12px;
  z-index: 0;
  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), opacity 0.25s,
    background-color 0.5s;
}
</style>
