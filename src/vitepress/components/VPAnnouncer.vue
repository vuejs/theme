<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
</script>

<template>
  <div class="visually-hidden" aria-live="polite">{{ page.title }} has loaded</div>
</template>
