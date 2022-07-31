<script lang="ts" setup>
import { useData } from 'vitepress'

const { page, theme } = useData()
</script>

<template>
  <div class="visually-hidden" aria-live="polite">{{
    theme?.messages?.announcer?.before ??
    ''
  }}{{ page.title }}{{
    theme?.messages?.announcer?.after ??
    ' has loaded'
  }}</div>
</template>
