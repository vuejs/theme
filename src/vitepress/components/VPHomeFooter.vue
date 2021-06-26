<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <footer v-if="frontmatter.footer" class="VPHomeFooter">
    <div class="container">
      <p class="text" v-html="frontmatter.footer"></p>
    </div>
  </footer>
</template>

<style scoped>
.VPHomeFooter {
  background: var(--vt-c-bg-soft);
  margin-top: 64px;
  text-align: center;
  border-top: 1px solid var(--vt-c-divider-light);
  color: var(--vt-c-text-2);
  padding: 24px;
  font-size: 12px;
  line-height: 20px;
}
</style>
