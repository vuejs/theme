<script lang="ts" setup>
import { useData } from 'vitepress'
import { useConfig } from '../composables/config'
import type { Config } from '../config'

const { page } = useData<Config>()
const { config } = useConfig()
</script>

<template>
  <div class="visually-hidden" aria-live="polite">
    {{ config.i18n?.ariaAnnouner?.before ?? '' }}{{ page.title
    }}{{ config.i18n?.ariaAnnouner?.after ?? ' has loaded' }}
  </div>
</template>
