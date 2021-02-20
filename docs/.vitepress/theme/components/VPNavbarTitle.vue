<template>
  <a v-if="hasTitle" class="VPNavBarTitle" :href="$withBase($localePath)">
    <div v-if="logo" class="logo">
      <img class="logo-img" :class="{ 'has-dark': logoDark }" :src="logo" alt="Logo">
      <img v-if="logoDark" class="logo-img inverse" :src="logoDark" alt="Logo for dark mode">
    </div>

    <p v-if="title" class="title">{{ title }}</p>
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSiteDataByRoute } from 'vitepress'

const site = useSiteDataByRoute()

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

<style scoped>
.VPNavBarTitle {
  display: flex;
  align-items: center;
  height: 55px;
  transition: opacity .25s;
}

.VPNavBarTitle:hover {
  opacity: .6;
}

.logo {
  position: relative;
  height: 28px;
}

.logo + .title {
  padding-left: 8px;
}

.logo-img {
  height: 100%;
  transition: opacity .5s, transform .5s ease;
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

.title {
  font-size: 16px;
  font-weight: 500;
}
</style>
