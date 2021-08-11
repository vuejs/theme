<script lang="ts" setup>
import { computed } from 'vue'
import VTIconExternalLink from './icons/VTIconExternalLink.vue'

const props = defineProps<{
  href?: string
  noIcon?: boolean
}>()

const OUTBOUND_REGEX = /^[a-z]+:/i
const isExternal = computed(() => props.href && OUTBOUND_REGEX.test(props.href))
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
    <VTIconExternalLink v-if="isExternal && !noIcon" class="vt-link-icon" />
  </component>
</template>
