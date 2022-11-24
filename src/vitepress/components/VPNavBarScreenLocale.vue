<script lang="ts" setup>
import { useConfig } from '../composables/config'
import VPNavBarLocaleItems from './VPNavBarLocaleItems.vue';
import VPNavBarLocaleJoin from './VPNavBarLocaleJoin.vue';

const { config } = useConfig()
</script>

<template>
  <div v-if="config.appearance" class="VPNavBarLocaleScreen">
    <p class="title">{{ config.i18n?.locales ?? 'Translations' }}</p>
    <VPNavBarLocaleItems />
    <VPNavBarLocaleJoin />
  </div>
</template>

<style scoped>
.VPNavBarLocaleScreen {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 12px 14px 12px 16px;
  background-color: var(--vt-c-bg-soft);
  transition: background-color 0.5s;
  margin: 16px 0;
}

.title {
  line-height: 24px;
  font-size: 12px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  margin-bottom: 6px;
}
</style>