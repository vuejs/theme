<template>
  <div v-if="hasSidebar" class="VPLocalNav">
    <button class="menu" @click="$emit('open-menu')">
      <VTIconAlignLeft class="menu-icon" />
      <span class="menu-text">Menu</span>
    </button>

    <a class="top-link" href="#" @click="scrollToTop">Return to top</a>
  </div>
</template>

<script lang="ts" setup>
import { VTIconAlignLeft } from 'vue-theme'
import { useSidebar } from '../composables/sidebar'

const { hasSidebar } = useSidebar()

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.VPLocalNav {
  position: sticky;
  top: 0;
  left: 0;
  z-index: var(--z-index-local-nav);
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--c-divider-light);
  background-color: var(--c-bg);
  transition: border-color .5s, background-color .5s;
}

@media (min-width: 960px) {
  .VPLocalNav { display: none; }
}

.menu {
  display: flex;
  align-items: center;
  padding: 0 24px;
  line-height: 47px;
  font-size: 12px;
  font-weight: 500;
  color: var(--c-text-2);
  transition: color .5s;
}

.menu:hover {
  color: var(--c-text-1);
  transition: color .25s;
}

@media (min-width: 768px) {
  .menu { padding: 0 32px; }
}

.menu-icon {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.top-link {
  padding: 0 24px;
  line-height: 47px;
  font-size: 12px;
  font-weight: 500;
  color: var(--c-text-2);
  transition: color .5s;
}

.top-link:hover {
  color: var(--c-text-1);
  transition: color .25s;
}

@media (min-width: 768px) {
  .top-link { padding: 0 32px; }
}
</style>
