<template>
  <div class="VPNavBar">
    <VPNavBarTitle />

    <div class="content">
      <VPNavBarSearch />
      <VPNavBarHamburger :active="isScreenOpen" @click="$emit('toggle-screen')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import VPNavBarTitle from './VPNavBarTitle.vue'
import VPNavBarSearch from './VPNavBarSearch.vue'
import VPNavBarHamburger from './VPNavBarHamburger.vue'

defineProps<{
  isScreenOpen: boolean
}>()
</script>

<style scoped>
.VPNavBar {
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--c-divider-light);
  padding: 0 12px 0 24px;
  height: 56px;
  background-color: var(--c-bg);
  transition: border-color .5s, background-color .5s;
}

.content {
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  padding-left: 24px;
}
</style>
