<script lang="ts" setup>
import { computed } from 'vue'
import { MenuBadgeItem } from '../types/menu'
import VTIconExternalLink from './icons/VTIconExternalLink.vue'
import VTMenuBadge from './VTMenuBadge.vue'

const props = defineProps<{
  href?: string
  noIcon?: boolean
  badge?: MenuBadgeItem
}>()
const isExternal = computed(() => props.href && /^[a-z]+:/i.test(props.href))
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    class="vt-link"
    :class="{ link: href }"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
    <VTMenuBadge v-if="badge" :item="badge" />
    <VTIconExternalLink v-if="isExternal && !noIcon" class="vt-link-icon" />
  </component>
</template>
