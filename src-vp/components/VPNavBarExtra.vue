<template>
  <VTFlyout v-if="hasContent" class="VPNavBarExtra">
    <div v-if="config.appearance" class="group">
      <div class="item">
        <p class="label">Appearance</p>
        <div class="action">
          <VTSwitchAppearance />
        </div>
      </div>
    </div>

    <div v-if="config.socialLinks" class="group">
      <div class="item">
        <VTSocialLinks
          class="social-links"
          size="small"
          :links="config.socialLinks"
        />
      </div>
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

.item {
  display: flex;
  align-items: center;
}

.action {
  margin-right: -2px;
}

.social-links {
  margin: -4px -8px;
}
</style>
