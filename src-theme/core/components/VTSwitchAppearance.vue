<template>
  <div class="vt-switch-appearance" role="button" @click="toggle">
    <div class="vt-switch-appearance-check">
      <div class="vt-switch-appearance-icon">
        <VTIconSun class="vt-switch-appearance-svg is-sun" />
        <VTIconMoon class="vt-switch-appearance-svg is-moon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppearance } from '../composables/appearance'
import VTIconSun from './icons/VTIconSun.vue'
import VTIconMoon from './icons/VTIconMoon.vue'

const { toggle } = useAppearance()
</script>
