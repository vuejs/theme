<script lang="ts" setup>
import { useData } from 'vitepress'
import { useSidebar } from '../composables/sidebar'
import VPContentPage from './VPContentPage.vue'
import VPContentDoc from './VPContentDoc.vue'

const { frontmatter } = useData()
const { hasSidebar } = useSidebar()
</script>

<template>
  <div class="VPContent" :class="{ 'has-sidebar': hasSidebar }">
    <VPContentPage v-if="!!frontmatter.page" />
    <VPContentDoc v-else>
      <template #content-top><slot name="content-top" /></template>
      <template #content-bottom><slot name="content-bottom" /></template>
      <template #aside-top><slot name="aside-top" /></template>
      <template #aside-mid><slot name="aside-mid" /></template>
      <template #aside-bottom><slot name="aside-bottom" /></template>
    </VPContentDoc>
  </div>
</template>

<style scoped>
@media (min-width: 960px) {
  .VPContent.has-sidebar {
    padding-left: var(--vp-sidebar-width-small);
  }
}

@media (min-width: 1280px) {
  .VPContent.has-sidebar {
    padding-left: var(--vp-sidebar-width-medium);
  }
}

@media (min-width: 1440px) {
  .VPContent.has-sidebar {
    padding-left: calc(
      (100vw - var(--vp-screen-max-width)) / 2 + var(--vp-sidebar-width-large)
    );
    padding-right: calc((100% - var(--vp-screen-max-width)) / 2);
  }
}
</style>
