<template>
  <a class="VPSocialLink" :href="link" target="_blank" rel="noopener noreferrer">
    <component :is="icon" class="icon" />
  </a>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { SocialLinkIcon } from '../composables/socialLink'
import VTIconDiscord from './icons/VTIconDiscord.vue'
import VTIconFacebook from './icons/VTIconFacebook.vue'
import VTIconGitHub from './icons/VTIconGitHub.vue'
import VTIconLinkedIn from './icons/VTIconLinkedIn.vue'
import VTIconSlack from './icons/VTIconSlack.vue'
import VTIconTwitter from './icons/VTIconTwitter.vue'

const props = defineProps<{
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

<style scoped>
.VPSocialLink {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  color: var(--c-text-2);
  transition: color .5s;
}

.link:hover {
  color: var(--c-text-1);
  transition: color .25s;
}

.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}
</style>
