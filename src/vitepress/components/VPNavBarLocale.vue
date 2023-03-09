<script setup lang="ts">
import { useConfig } from '../composables/config'
import { VTFlyout } from '../../core'
import VTIconLanguagesVue from '../../core/components/icons/VTIconLanguages.vue';
import VPNavBarLocaleItems from './VPNavBarLocaleItems.vue'
import VPNavBarLocaleJoin from './VPNavBarLocaleJoin.vue';

const { config } = useConfig()
const localeLinks = config.value.localeLinks
</script>

<template>
  <VTFlyout
    :label="config.i18n?.ariaLanguage ?? 'Select Language'"
    class="VPNavBarMenuGroup active VPNavBarLocale"
  >
    <template #btn-slot>
      <div class="vt-locales-btn-icon-container">
        <VTIconLanguagesVue class="vt-locales-btn-icon" />
      </div>
    </template>

    <template v-if="localeLinks">
      <div class="vt-menu-items x-padding">
        <VPNavBarLocaleItems />
      </div>
      <VPNavBarLocaleJoin />
    </template>
  </VTFlyout>
</template>

<style scoped>
.vt-locales-btn-icon-container::before,
.vt-locales-btn-icon-container::after {
  width: 1px;
  height: 24px;
  background-color: var(--vt-c-divider-light);
  content: "";
}

.vt-locales-btn-icon-container::before {
  margin-right: 4px;
}

.vt-locales-btn-icon-container::after {
  margin-left: 4px;
}

.vt-menu-items {
  padding: 0 14px;
}
</style>
