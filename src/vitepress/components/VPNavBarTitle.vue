<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { site, localePath } = useData()

const logo = computed(() => site.value.themeConfig.logo)
const logoDark = computed(() => site.value.themeConfig.logoDark)

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
    <div v-if="logo" class="logo">
      <img
        class="logo-img"
        :class="{ 'has-dark': logoDark }"
        :src="logo"
        alt="Logo"
      />
      <img
        v-if="logoDark"
        class="logo-img inverse"
        :src="logoDark"
        alt="Logo"
      />
    </div>

    <p v-if="title" class="text">{{ title }}</p>
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
  height: 24px;
}

.logo + .text {
  padding-left: 8px;
}

.logo-img {
  height: 100%;
  transition: opacity 0.5s, transform 0.5s ease;
}

.logo-img.inverse {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transform: translateY(-12px);
}

.dark .logo-img.has-dark {
  opacity: 0;
  transform: translateY(12px);
}

.dark .logo-img.inverse {
  opacity: 1;
  transform: translateY(0);
}

.text {
  font-size: 16px;
  font-weight: 500;
}
</style>
