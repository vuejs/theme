<template>
  <section class="VPSidebarGroup">
    <div class="title">
      <h2 class="title-text">{{ text }}</h2>
    </div>

    <template v-for="item in items" :key="item.link">
      <VPSidebarLink
        :text="item.text"
        :link="item.link"
        @jump="$emit('jump')"
      />
    </template>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { SidebarLink } from '../config'
import VPSidebarLink from './VPSidebarLink.vue'

defineProps<{
  text: string
  items: SidebarLink[]
}>()
</script>

<style scoped>
.title {
  padding: 6px 0;
}

@media (min-width: 960px) {
  .title {
    padding: 4px 0;
  }
}

.title-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 700;
  color: var(--vt-c-text-1);
  transition: color .5s;
}
</style>
