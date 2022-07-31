<script setup lang="ts">
import { useData, useRoute } from 'vitepress'

const { theme } = useData()
const route = useRoute()
</script>

<template>
  <div class="vt-doc">
    <h1>{{
      theme?.messages?.pageNotFound ??
      'Page Not Found'
    }}</h1>
    <p>{{
      theme?.messages?.deadLinkFound?.before ??
      'You found a dead link: '
    }}<span class="not-found-path">{{ route.path }}</span>{{
      theme?.messages?.deadLinkFound?.after ??
      ''
    }}<br /><span v-if="theme.repo">{{
      theme?.messages?.deadLinkReport?.before ??
      'Please '
    }}<a :href="`https://github.com/${theme.repo}`" target="_blank">{{
      theme?.messages?.deadLinkReport?.content ??
      'let us know'
    }}</a>{{
      theme?.messages?.deadLinkReport?.after ??
      ' so we can fix it.'
    }}</span>
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
