<script setup lang="ts">
import { useData } from 'vitepress'
import { resolveHeaders, useActiveAnchor } from '../composables/outline'
import { ref } from 'vue'

const { page } = useData()
const container = ref()
const bg = ref()
useActiveAnchor(container, bg)
</script>

<template>
  <div class="VPContentDocOutline" ref="container">
    <div class="outline-bg" ref="bg" />
    <div class="outline-title">Contents</div>
    <ul>
      <li v-for="{ text, link } in resolveHeaders(page.headers)">
        <a class="outline-link" :href="link">{{ text }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.VPContentDocOutline {
  font-size: 13px;
  font-weight: 500;
  position: relative;
}

.outline-title {
  font-weight: 600;
  margin-bottom: 4px;
}

.outline-link {
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  line-height: 28px;
  display: block;
}

.outline-bg {
  --padding: 8px;

  opacity: 0;
  position: absolute;
  background-color: var(--vt-c-bg-soft);
  border-radius: 4px;
  width: calc(100% + var(--padding) * 2);
  height: 28px;
  top: 28px;
  left: calc(0px - var(--padding));
  z-index: 0;
  transition: top 0.15s ease-out, opacity 0.15s, background-color 0.5s;
}

ul {
  z-index: 1;
  position: relative;
}
</style>
