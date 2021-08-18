<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { site, localePath } = useData()

const logo = computed(() => site.value.themeConfig.logo)

const title = computed(() => {
  if (site.value.themeConfig.title === null) {
    return null
  }

  return site.value.themeConfig.title || site.value.title
})

const hasTitle = computed(() => {
  return !!logo.value || !!title.value
})
</script>

<template>
  <a v-if="hasTitle" class="VPNavBarTitle" :href="localePath">
    <img v-if="logo" class="logo" :src="logo" alt="Logo" />
    <span v-if="title" class="text">{{ title }}</span>
  </a>
</template>

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;
}

.VPNavBarTitle:hover {
  opacity: 0.6;
}

.logo {
  position: relative;
  width: 24px;
  height: 24px;
}

.logo + .text {
  padding-left: 8px;
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
