<template>
  <div class="VPSocialLinks">
    <VTSocialLink
      v-for="link in links"
      :key="link.link"
      :icon="link.icon"
      :link="link.link"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { SocialLink } from '../composables/socialLink'
import VTSocialLink from './VTSocialLink.vue'

defineProps<{
  links: SocialLink[]
}>()
</script>

<style scoped>
.VPSocialLinks {
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
