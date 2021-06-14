<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  active: boolean
}>()
</script>

<template>
  <div class="vt-hamburger" :class="{ 'is-active': active }" role="button">
    <div class="vt-hamburger-container">
      <div class="vt-hamburger-top" />
      <div class="vt-hamburger-middle" />
      <div class="vt-hamburger-bottom" />
    </div>
  </div>
</template>
