<template>
  <VTSocialLinks
    v-if="config.socialLinks"
    class="VPNavScreenSocialLinks"
    size="medium"
    :links="config.socialLinks"
  />
</template>

<script lang="ts" setup>
import { VTSocialLinks } from 'vue-theme'
import { useConfig } from '../composables/config'

const { config } = useConfig()
</script>
