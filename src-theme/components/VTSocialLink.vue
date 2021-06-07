<template>
  <a
    class="VPSocialLink"
    :class="[size]"
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <component :is="icon" class="icon" />
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

const size = computed(() => props.size ?? 'medium')

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
  color: var(--c-text-2);
  transition: color .5s;
}

.VPSocialLink.small {
  width: 36px;
  height: 36px;
}

.VPSocialLink.small .icon {
  width: 20px;
  height: 20px;
}

.VPSocialLink.medium {
  width: 48px;
  height: 48px;
}

.VPSocialLink.medium .icon {
  width: 24px;
  height: 24px;
}

.VPSocialLink:hover {
  color: var(--c-text-1);
  transition: color .25s;
}

.icon {
  fill: currentColor;
}
</style>
