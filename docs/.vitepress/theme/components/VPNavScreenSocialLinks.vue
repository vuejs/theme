<template>
  <div v-if="config.socialLinks" class="VPNavScreenSocialLinks">
    <a
      v-for="link in config.socialLinks"
      :key="link.link"
      class="link"
      :href="link.link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <component :is="icon(link)" class="icon" />
    </a>
  </div>
</template>

<script lang="ts" setup>
import {
  VTIconDiscord,
  VTIconFacebook,
  VTIconGitHub,
  VTIconLinkedIn,
  VTIconSlack,
  VTIconTwitter
} from 'vue-theme'
import type { SocialLink } from '../config'
import { useConfig } from '../composables/config'

const { config } = useConfig()

function icon(link: SocialLink) {
  switch (link.icon) {
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
}
</script>

<style scoped>
.VPNavScreenSocialLinks {
  display: flex;
  justify-content: center;
}

.link {
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
