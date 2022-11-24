<script lang="ts" setup>
import { computed, inject } from 'vue';
import { useRouter } from 'vitepress';
import { useConfig } from '../composables/config'

const router = useRouter()
const { config } = useConfig()
const closeScreen = inject<() => void>('close-screen')!
const localeLinks = config.value.localeLinks
const translationsDesc = computed(() => localeLinks?.find(
  item => item.isTranslationsDesc
))
const navigateToJoinTranslation = () => {
  if (translationsDesc.value) {
    closeScreen()
    router.go(translationsDesc.value.link)
  }
}
</script>

<template>
  <template v-if="translationsDesc">
    <div class="vt-locales-menu-hr-divider" />
    <div class="vt-locales-menu-item join-translations">
      <div class="vt-locales-menu-item-text" @click="navigateToJoinTranslation">
        {{ translationsDesc.text }}
      </div>
    </div>
  </template>
</template>

<style scoped>
.vt-locales-menu-item {
  padding-bottom: 0;
}
</style>