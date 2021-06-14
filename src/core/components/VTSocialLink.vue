<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { SocialLinkSize, SocialLinkIcon } from '../composables/socialLink'
import VTIconDiscord from './icons/VTIconDiscord.vue'
import VTIconFacebook from './icons/VTIconFacebook.vue'
import VTIconGitHub from './icons/VTIconGitHub.vue'
import VTIconLinkedIn from './icons/VTIconLinkedIn.vue'
import VTIconSlack from './icons/VTIconSlack.vue'
import VTIconTwitter from './icons/VTIconTwitter.vue'

const props = defineProps<{
  size?: SocialLinkSize
  icon: SocialLinkIcon
  link: string
}>()

const icon = computed(() => {
  switch (props.icon) {
    case 'discord':
      return VTIconDiscord
    case 'facebook':
      return VTIconFacebook
    case 'github':
      return VTIconGitHub
    case 'linkedin':
      return VTIconLinkedIn
    case 'slack':
      return VTIconSlack
    case 'twitter':
      return VTIconTwitter
  }
})
</script>

<template>
  <a
    class="vt-social-link"
    :class="{
      'is-small': size === 'small',
      'is-medium': size === 'medium'
    }"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <component :is="icon" class="vt-social-link-icon" />
  </a>
</template>
