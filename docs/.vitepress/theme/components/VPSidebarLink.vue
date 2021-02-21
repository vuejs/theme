<template>
  <a class="link" :href="$withBase(link)" @click="$emit('jump')">
    <p class="link-text">{{ text }}</p>
  </a>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  text: string
  link: string
}>()
</script>

<style scoped>
.link {
  display: block;
  padding: 6px 0;
}

@media (min-width: 960px) {
  .link {
    padding: 4px 0;
  }
}

.link:hover .link-text {
  color: var(--c-brand);
  transition: color .25s;
}

.link-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--c-text-2);
  transition: color .5s;
}
</style>
