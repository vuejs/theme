<script lang="ts" setup>
import { defineProps } from 'vue'
import { VTFlyout } from '../../core'
import { isActive } from '../support/utils'
import { useData } from 'vitepress'
import type { NavItemWithChildren } from '../config'

defineProps<{
  item: NavItemWithChildren
}>()

const { page } = useData()
</script>

<template>
  <VTFlyout
    :class="{
      VPNavBarMenuGroup: true,
      active: isActive(page.relativePath, item.activeMatch, true)
    }"
    :button="item.text"
    :items="item.items"
  />
</template>

<style scoped>
.VPNavBarMenuGroup.active {
  border-bottom: 1px solid var(--vp-c-brand);
  height: var(--vt-nav-height);
}
</style>
