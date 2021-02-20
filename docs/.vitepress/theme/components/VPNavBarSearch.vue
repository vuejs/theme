<template>
  <button v-if="$siteByRoute.themeConfig.algolia" class="VPNavBarSearch">
    <VTIconSearch class="icon" />
  </button>
</template>

<script lang="ts" setup>
import { VTIconSearch } from 'vue-theme'
</script>

<style scoped>
.VPNavBarSearch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 55px;
  color: var(--c-text-2);
  transition: color .5s;
}

.icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}
</style>
