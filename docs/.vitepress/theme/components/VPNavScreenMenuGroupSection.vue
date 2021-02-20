<template>
  <div class="VPNavScreenMenuGroupSection">
    <p class="title">{{ text }}</p>

    <VPNavScreenMenuGroupLink
      v-for="item in items"
      :key="item.text"
      :text="item.text"
      :link="item.link"
      @jump="$emit('jump')"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { NavItemChildWithChildren } from '../config'
import VPNavScreenMenuGroupLink from './VPNavScreenMenuGroupLink.vue'

defineProps<{
  text: string
  items: NavItemChildWithChildren[]
}>()
</script>

<style scoped>
.VPNavScreenMenuGroupSection {
  display: block;
}

.title {
  line-height: 32px;
  font-size: 13px;
  font-weight: 700;
  color: var(--c-text-2);
  transition: color .25s;
}
</style>
