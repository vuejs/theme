<template>
  <div class="VPContent" :class="{ 'has-sidebar': hasSidebar }">
    <VPContentPage v-if="isPage" />
    <VPContentDoc v-else />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useFrontmatter } from 'vitepress'
import { useSidebar } from '../composables/sidebar'
import VPContentPage from './VPContentPage.vue'
import VPContentDoc from './VPContentDoc.vue'

const frontmatter = useFrontmatter()
const { hasSidebar } = useSidebar()

const isPage = computed(() => {
  return !!frontmatter.value.page
})
</script>

<style scoped>
@media (min-width: 960px) {
  .VPContent.has-sidebar {
    padding-left: var(--sidebar-width-small);
  }
}

@media (min-width: 1280px) {
  .VPContent.has-sidebar {
    padding-left: var(--sidebar-width-medium);
  }
}

@media (min-width: 1440px) {
  .VPContent.has-sidebar {
    padding-left: calc((100% - var(--screen-max-width)) / 2 + var(--sidebar-width-large));
    padding-right: calc((100% - var(--screen-max-width)) / 2);
  }
}
</style>
