<script lang="ts" setup>
import { defineProps } from 'vue'
import { VTFlyout } from '../../core'
import type { MenuItemChild } from '../../core'

defineProps<{
  text: string
  items: MenuItemChild[]
}>()
</script>

<template>
  <VTFlyout class="VPNavBarMenuGroup" :button="text" :items="items" />
</template>
