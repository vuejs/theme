<template>
  <div v-if="$siteByRoute.themeConfig.algolia" class="VPNavBarSearch">
    <button class="input">
      <VTIconSearch class="icon" />

      <span class="placeholder small">Search</span>
      <span class="placeholder large">Search everything</span>

      <span class="shortcut">
        <VTIconCommand class="shortcut-icon" />
        <span class="shortcut-key">K</span>
      </span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { VTIconSearch, VTIconCommand } from 'vue-theme'
</script>

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

.input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 55px;
  color: var(--c-text-2);
  transition: color .5s;
}

.input:hover {
  color: var(--c-text-1);
  transition: color .25s;
}

@media (min-width: 768px) {
  .input {
    width: auto;
  }
}

.icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

@media (min-width: 768px) {
  .icon {
    width: 16px;
    height: 16px;
  }
}

.placeholder {
  display: none;
  padding-left: 8px;
  font-size: 13px;
  font-weight: 500;
}

@media (min-width: 768px) {
  .placeholder.small { display: block; }
}

@media (min-width: 960px) {
  .placeholder.small { display: none; }
  .placeholder.large { display: block; }
}

.shortcut {
  display: none;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  border: 1px solid var(--c-divider);
  border-radius: 4px;
  padding: 4px;
  height: 20px;
  color: var(--c-text-3);
  transition: color .5s;
}

@media (min-width: 960px) {
  .shortcut { display: flex; }
}

.shortcut-icon {
  width: 11px;
  height: 11px;
  fill: currentColor;
}

.shortcut-key {
  line-height: 20px;
  padding-left: 2px;
  font-size: 12px;
  font-weight: 500;
}
</style>
