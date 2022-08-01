<script setup lang="ts">
import { useRoute } from 'vitepress'
import { useConfig } from '../composables/config'

const route = useRoute()
const { config } = useConfig()
</script>

<template>
  <div class="vt-doc">
    <h1>{{ config.i18n?.pageNotFound ?? 'Page Not Found' }}</h1>
    <p>
      {{ config.i18n?.deadLink?.before ?? 'You found a dead link: '
      }}<span class="not-found-path">{{ route.path }}</span
      >{{ config.i18n?.deadLink?.after ?? '' }}<br /><span
        v-if="config.editLink?.repo"
        >{{ config.i18n?.deadLinkReport?.before ?? 'Please '
        }}<a
          :href="`https://github.com/${config.editLink?.repo}`"
          target="_blank"
          >{{ config.i18n?.deadLinkReport?.link ?? 'let us know' }}</a
        >{{ config.i18n?.deadLinkReport?.after ?? ' so we can fix it.' }}</span
      >
    </p>
  </div>
</template>

<style scoped>
.vt-doc {
  padding: 32px 48px;
  background-color: var(--vt-c-bg-soft);
  margin: 32px;
  border-radius: 8px;
}

.not-found-path {
  font-family: var(--vt-font-family-mono);
  color: var(--vt-c-text-code);
}
</style>
