<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const backToTop = ref()

watch(() => route.path, () => backToTop.value.focus())

const focusOnTargetAnchor = ({ target }: Event) => {
  const id = '#' + (target as HTMLAnchorElement).href!.split('#')[1]
  const el = document.querySelector(id) as HTMLAnchorElement

  const removeTabIndex = () => {
    el.removeAttribute('tabindex')
    el.removeEventListener('blur', removeTabIndex)
  }

  if (el) {
    el.setAttribute('tabindex',  '-1')
    el.addEventListener('blur', removeTabIndex)
    el.focus()
  }
}
</script>

<template>
  <span ref="backToTop" tabindex="-1" />
  <a
    href="#VPContent"
    class="VPSkipLink visually-hidden"
    @click="focusOnTargetAnchor"
  >
    Skip to content
  </a>
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
