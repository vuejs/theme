<script setup lang="ts">
defineProps<{
  type?: string
  text: string
}>()
</script>

<template>
  <span :class="['vt-badge', type || 'tip']">{{ text }}</span>
</template>
