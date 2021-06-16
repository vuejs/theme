<script lang="ts" setup>
import { useData } from 'vitepress'
import { defineAsyncComponent } from 'vue'

const { theme } = useData()
const VPAlgoliaSearchBox = defineAsyncComponent(
  () => import('./VPAlgoliaSearchBox.vue')
)
</script>

<template>
  <div v-if="theme.algolia" class="VPNavBarSearch">
    <VPAlgoliaSearchBox />
  </div>
</template>

<style scoped>
.VPNavBarSearch {
  display: flex;
  align-items: center;
  padding-left: 16px;
}

@media (min-width: 768px) {
  .VPNavBarSearch {
    flex-grow: 1;
  }
}
</style>
