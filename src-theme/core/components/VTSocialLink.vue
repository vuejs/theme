<template>
  <a
    class="vt-social-link"
    :class="classes"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <component :is="icon" class="vt-social-link-icon" />
  </a>
</template>

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

const classes = computed(() => ({
  'is-small': props.size === 'small',
  'is-medium': props.size === 'medium'
}))

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
