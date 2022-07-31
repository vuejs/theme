<script lang="ts" setup>
import { useData } from 'vitepress'
const { theme } = useData()
defineProps<{
  active: boolean
}>()
</script>

<template>
  <button
    type="button"
    class="vt-hamburger"
    :class="{ 'is-active': active }"
    :aria-label="
      theme?.messages?.mobileNavigation ??
      'Mobile navigation'
    "
    :aria-expanded="active"
    aria-controls="VPNavScreen"
  >
    <span class="vt-hamburger-container">
      <span class="vt-hamburger-top" />
      <span class="vt-hamburger-middle" />
      <span class="vt-hamburger-bottom" />
    </span>
  </button>
</template>
