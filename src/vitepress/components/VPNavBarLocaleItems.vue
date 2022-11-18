<script setup lang="ts">
import type { LocaleLinkItem } from '../../core'
import { VTIconExternalLink } from '../../core';
import { useConfig } from '../composables/config'
import VTIconGitHub from '../../core/components/icons/VTIconGitHub.vue';

const { config } = useConfig()
const localeLinks = config.value.localeLinks?.filter(
  item => !item.isTranslationsDesc
)

const autoAppendSlash = (url: string) => url.endsWith('/') ? url : url + '/'
const onLocaleSelect = (item: LocaleLinkItem) => {
  const { href: currentHref, origin: currentOrigin } = window.location
    , startOfOrigin = currentHref.indexOf(currentOrigin)
  window.location.href = autoAppendSlash(item.link) + currentHref.slice(startOfOrigin + currentOrigin.length)
}
</script>

<template>
  <div v-for="item in localeLinks" :key="item.text" class="vt-locales-menu-item">
    <div 
      :href="item.link"
      class="vt-locales-menu-item-text"
      @click="onLocaleSelect(item)"
    >
      {{ item.text }}
      <VTIconExternalLink class="vt-link-icon" />
    </div>
    <a :href="item.repo ?? ''" target="_blank" class="vt-locales-btn-icon-container">
      <VTIconGitHub class="vt-locales-btn-icon repo" />
    </a>
  </div>
</template>
