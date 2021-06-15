<script lang="ts" setup>
import { defineProps } from 'vue'
import { VTFlyout } from '../../core'
import { isActive } from '../support/utils'
import { useRoute } from 'vitepress'
import type { NavItemWithChildren } from '../config'

const props = defineProps<{
  item: NavItemWithChildren
}>()

const route = useRoute()

isActive(route, props.item.activeMatch)
</script>

<template>
  <VTFlyout
    :class="{
      VPNavBarMenuGroup: true,
      active: isActive(route, item.activeMatch, true)
    }"
    :button="item.text"
    :items="item.items"
  />
</template>

<style scoped>
.VPNavBarMenuGroup.active {
  border-bottom: 1px solid var(--vt-c-green);
  height: var(--vt-nav-height);
}
</style>
