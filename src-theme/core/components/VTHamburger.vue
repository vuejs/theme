<template>
  <div class="vt-hamburger" :class="classes" role="button">
    <div class="vt-hamburger-container">
      <div class="vt-hamburger-top" />
      <div class="vt-hamburger-middle" />
      <div class="vt-hamburger-bottom" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps<{
  active: boolean
}>()

const classes = computed(() => ({
  'is-active': props.active
}))
</script>
