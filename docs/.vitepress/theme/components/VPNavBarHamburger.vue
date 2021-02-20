<template>
  <VTHamburger v-if="hasContent" class="VPNavBarHamburger" :active="active" />
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import { VTHamburger } from 'vue-theme'
import { useConfig } from '../composables/config'

defineProps<{
  active: boolean
}>()

const { config } = useConfig()

const hasContent = computed(() => {
  return config.value.appearance
})
</script>

<style scoped>
.VPNavBarHamburger {
  width: 40px;
  height: 55px;
}
</style>
