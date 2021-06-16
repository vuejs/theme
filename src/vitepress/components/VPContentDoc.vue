<script lang="ts" setup>
import { useData } from 'vitepress'
import VPContentDocOutline from './VPContentDocOutline.vue'
import VPContentDocFooter from './VPContentDocFooter.vue'

const { page, frontmatter } = useData()
</script>

<template>
  <div class="VPContentDoc">
    <div :class="{ container: true, 'has-aside': frontmatter.aside !== false }">
      <div class="content">
        <slot name="content-top" />
        <Content class="vt-doc" />
        <slot name="content-bottom" />
        <VPContentDocFooter />
      </div>

      <div class="aside" v-if="frontmatter.aside !== false">
        <div class="aside-container">
          <slot name="aside-top" />
          <VPContentDocOutline
            v-if="page.headers && frontmatter.outline !== false"
          />
          <slot name="aside-bottom" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPContentDoc {
  padding: 32px 24px 96px;
}

.vt-doc {
  margin-bottom: 96px;
}

@media (min-width: 768px) {
  .VPContentDoc {
    padding: 48px 32px 96px;
  }
}

@media (min-width: 960px) {
  .VPContentDoc {
    padding: 64px 64px 96px;
  }
}

@media (min-width: 1440px) {
  .VPContentDoc {
    padding: 64px 96px 96px;
  }
}

@media (min-width: 1280px) {
  .container {
    display: flex;
    margin: 0 auto;
    max-width: 592px;
  }
  .container.has-aside {
    max-width: 880px;
  }
}

.content {
  margin: 0 auto;
  max-width: 592px;
  position: relative;
}

@media (min-width: 1280px) {
  .content {
    margin: 0;
    min-width: 592px;
  }
}

.aside {
  position: relative;
  display: none;
  flex-shrink: 0;
  padding-left: 64px;
  width: 288px;
}

.aside-container {
  position: fixed;
}

@media (min-width: 1280px) {
  .aside {
    display: block;
  }
}

@media (min-width: 1440px) {
  .aside {
    padding-left: 96px;
    width: 320px;
  }
}
</style>
