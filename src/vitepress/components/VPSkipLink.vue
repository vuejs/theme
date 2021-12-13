<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const backToTop = ref()

watch(() => route.path, () => backToTop.value.focus())
</script>

<template>
  <span ref="backToTop" tabindex="-1" />
  <a href="#VPContent" class="VPSkipLink visually-hidden">Skip to content</a>
</template>


<style scoped>
.VPSkipLink {
  top: .25rem;
  left: .25rem;
  padding: .650rem 1.5rem;
  z-index: 999;
  font-weight: bold;
  text-decoration: none;
  color: var(--vt-c-green-darker);
  box-shadow: var(--vt-shadow-3);
  background-color: var(--vt-c-bg);
}
.dark .VPSkipLink {
  color: var(--vt-c-green);
}
.VPSkipLink:focus {
  height: auto;
  width: auto;
  clip: auto;
  clip-path: none;
}
</style>
