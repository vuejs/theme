<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vitepress'
import { useConfig } from '../composables/config'
import { VTIconExternalLink } from '../../core';
import VTIconGitHub from '../../core/components/icons/VTIconGitHub.vue';

const route = useRoute()
const { config } = useConfig()
const localeLinks = computed(() => {
  const items = config.value.localeLinks || []
  const pathname = route.path || ''
  return items
    .filter(({ isTranslationsDesc }) => !isTranslationsDesc)
    .map(({ text, link, repo }) => {
      return {
        text,
        link: new URL(pathname, link).toString(),
        repo,
      }
    })
})
</script>

<template>
  <div v-for="item in localeLinks" :key="item.text" class="vt-locales-menu-item">
    <a 
      :href="item.link"
      target="_blank"
      class="vt-locales-menu-item-text"
    >
      {{ item.text }}
      <VTIconExternalLink class="vt-link-icon" />
    </a>
    <a
      v-if="item.repo"
      :href="item.repo"
      :title="`${config.i18n?.ariaRepo?.before ?? ''}${item.text}${config.i18n?.ariaRepo?.after ?? ' Repository'}`"
      target="_blank"
      class="vt-locales-btn-icon-container"
    >
      <VTIconGitHub class="vt-locales-btn-icon repo" />
    </a>
  </div>
</template>
