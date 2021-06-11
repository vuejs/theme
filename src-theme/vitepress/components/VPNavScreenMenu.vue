<template>
  <nav v-if="config.nav" class="VPNavScreenMenu">
    <template v-for="item in config.nav">
      <VPNavScreenMenuLink
        v-if="item.link"
        :key="item.text"
        :text="item.text"
        :link="item.link"
        @jump="$emit('jump')"
      />

      <VPNavScreenMenuGroup
        v-else
        :key="item.text"
        :text="item.text"
        :items="item.items"
        @jump="$emit('jump')"
      />
    </template>
  </nav>
</template>

<script lang="ts" setup>
import { useConfig } from '../composables/config'
import VPNavScreenMenuLink from './VPNavScreenMenuLink.vue'
import VPNavScreenMenuGroup from './VPNavScreenMenuGroup.vue'

const { config } = useConfig()
</script>
