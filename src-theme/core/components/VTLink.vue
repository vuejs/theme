<template>
  <component
    :is="tag"
    class="vt-link"
    :class="{ link: href }"
    :href="href"
    :target="target"
    :rel="rel"
  >
    <slot />
    <VTIconExternalLink v-if="showIcon" class="vt-link-icon" />
  </component>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import VTIconExternalLink from './icons/VTIconExternalLink.vue'

const OUTBOUND_REGEX = /^[a-z]+:/i

const props = defineProps<{
  href?: string
  noIcon?: boolean
}>()

const isExternal = computed(() => OUTBOUND_REGEX.test(props.href))
const tag = computed(() => props.href ? 'a' : 'span')
const target = computed(() => isExternal.value ? '_blank' : null)
const rel = computed(() => isExternal.value ? 'noopener noreferrer' : null)
const showIcon = computed(() => isExternal.value && !props.noIcon)
</script>
