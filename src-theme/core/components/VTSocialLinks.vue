<template>
  <div class="vt-social-links">
    <VTSocialLink
      v-for="link in links"
      :key="link.link"
      :size="size"
      :icon="link.icon"
      :link="link.link"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { SocialLinkSize, SocialLink } from '../composables/socialLink'
import VTSocialLink from './VTSocialLink.vue'

defineProps<{
  size?: SocialLinkSize
  links: SocialLink[]
}>()
</script>
