<script lang="ts" setup>
import VTSwitch from './VTSwitch.vue'
import VTIconSun from './icons/VTIconSun.vue'
import VTIconMoon from './icons/VTIconMoon.vue'

const storageKey = 'vue-theme-appearance'

const toggle = typeof localStorage !== 'undefined' ? useAppearance() : () => {}

function useAppearance() {
  const saved = localStorage.getItem(storageKey)
  const classList = document.documentElement.classList
  let isDark =
    saved === 'auto'
      ? window.matchMedia(`(prefers-color-scheme: dark)`).matches
      : saved === 'dark'
  return () => {
    if ((isDark = !isDark)) {
      classList.add('dark')
    } else {
      classList.remove('dark')
    }
    localStorage.setItem(storageKey, isDark ? 'dark' : 'light')
  }
}
</script>

<template>
  <VTSwitch
    class="vt-switch-appearance"
    aria-label="toggle dark mode"
    @click="toggle"
  >
    <VTIconSun class="vt-switch-appearance-sun" />
    <VTIconMoon class="vt-switch-appearance-moon" />
  </VTSwitch>
</template>
