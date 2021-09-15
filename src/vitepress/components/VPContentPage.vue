<script lang="ts" setup>
import { useData } from 'vitepress'
import VPFooter from './VPFooter.vue'

const { frontmatter } = useData()
</script>

<template>
  <div class="VPContentPage">
    <Content />
    <VPFooter v-if="frontmatter.footer !== false" />
  </div>
</template>
