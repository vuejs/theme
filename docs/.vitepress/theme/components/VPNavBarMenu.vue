<template>
  <nav v-if="config.nav" class="VPNavBarMenu">
    <template v-for="item in config.nav">
      <VPNavBarMenuLink
        v-if="item.link"
        :key="item.text"
        :text="item.text"
        :link="item.link"
      />

      <VPNavBarMenuGroup
        v-else
        :key="item.text"
        :text="item.text"
        :items="item.items"
      />
    </template>
  </nav>
</template>

<script lang="ts" setup>
import { useConfig } from '../composables/config'
import VPNavBarMenuLink from './VPNavBarMenuLink.vue'
import VPNavBarMenuGroup from './VPNavBarMenuGroup.vue'

const { config } = useConfig()
</script>

<style scoped>
.VPNavBarMenu {
  display: none;
}

@media (min-width: 768px) {
  .VPNavBarMenu { display: flex; }
}
</style>
