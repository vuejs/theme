<template>
  <VTFlyout
    class="VPNavBarMenuGroup"
    :button="text"
    :items="items"
  />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { VTFlyout } from '../../core'
import type { NavItemChild } from '../config'

defineProps<{
  text: string
  items: NavItemChild[]
}>()
</script>
