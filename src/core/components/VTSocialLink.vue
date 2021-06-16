<script lang="ts" setup>
import { defineProps } from 'vue'
import type { SocialLinkSize, SocialLinkIcon } from '../composables/socialLink'
import VTIconDiscord from './icons/VTIconDiscord.vue'
import VTIconFacebook from './icons/VTIconFacebook.vue'
import VTIconGitHub from './icons/VTIconGitHub.vue'
import VTIconLinkedIn from './icons/VTIconLinkedIn.vue'
import VTIconSlack from './icons/VTIconSlack.vue'
import VTIconTwitter from './icons/VTIconTwitter.vue'

defineProps<{
  size?: SocialLinkSize
  icon: SocialLinkIcon
  link: string
}>()

const icons = {
  discord: VTIconDiscord,
  facebook: VTIconFacebook,
  github: VTIconGitHub,
  linkedin: VTIconLinkedIn,
  slack: VTIconSlack,
  twitter: VTIconTwitter
}
</script>

<template>
  <a
    class="vt-social-link"
    :class="{
      'is-small': size === 'small',
      'is-medium': size === 'medium'
    }"
    :href="link"
    :title="icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <component :is="icons[icon]" class="vt-social-link-icon" />
  </a>
</template>
