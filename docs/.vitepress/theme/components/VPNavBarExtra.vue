<template>
  <VTFlyout v-if="hasContent" class="VPNavBarExtra">
    <div v-if="config.appearance" class="group">
      <p class="label">Appearance</p>
      <div class="action">
        <VTSwitchAppearance />
      </div>
    </div>

    <div v-if="config.socialLinks" class="group">
      <VTSocialLinks
        class="social-links"
        size="small"
        :links="config.socialLinks"
      />
    </div>
  </VTFlyout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { VTFlyout, VTSwitchAppearance, VTSocialLinks } from 'vue-theme'
import { useConfig } from '../composables/config'

const { config } = useConfig()

const hasContent = computed(() => {
  return config.value.appearance || config.value.socialLinks
})
</script>

<style scoped>
.VPNavBarExtra {
  display: none;
}

@media (min-width: 768px) {
  .VPNavBarExtra { display: block; }
}

@media (min-width: 1280px) {
  .VPNavBarExtra { display: none; }
}

.social-links {
  margin: -4px -8px;
}
</style>
