<script lang="ts" setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import VPContentDocOutline from './VPContentDocOutline.vue'
import VPContentDocFooter from './VPContentDocFooter.vue'
import VPCarbonAds from './VPCarbonAds.vue'
import type { Config } from '../config'
import { VTLink } from '../../core'

const { page, frontmatter, theme } = useData<Config>()

const hashMatch = /#(\w+)$/
const repoUrl = computed(() => {
  const repo = theme.value.editLink?.repo || 'vuejs/docs'
  const branch = repo.match(hashMatch)?.[1] || 'main'
  return `https://github.com/vuejs/docs/edit/${branch}/src/${page.value.relativePath}`
})
</script>

<template>
  <div
    class="VPContentDoc"
    :class="{ 'has-aside': frontmatter.aside !== false }"
  >
    <div class="container">
      <div class="aside" v-if="frontmatter.aside !== false">
        <div class="aside-container">
          <slot name="aside-top" />
          <VPContentDocOutline
            v-if="page.headers && frontmatter.outline !== false"
          />
          <slot name="aside-mid" />
          <VPCarbonAds v-if="theme.carbonAds && frontmatter.ads !== false" />
          <slot name="aside-bottom" />
        </div>
      </div>
      <div class="content">
        <slot name="content-top" />
        <main>
          <Content class="vt-doc" />
          <p
            class="edit-link"
            v-if="theme.editLink && frontmatter.editLink !== false"
          >
            <VTLink :href="repoUrl">{{ theme.editLink.text }}</VTLink>
          </p>
        </main>
        <slot name="content-bottom" />
        <VPContentDocFooter v-if="frontmatter.footer !== false" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPContentDoc {
  padding: 32px 24px 96px;
}

.vt-doc {
  margin-bottom: 54px;
}

.content {
  margin: 0 auto;
  max-width: 688px;
  position: relative;
}

.aside {
  position: relative;
  display: none;
  flex-shrink: 0;
  padding-left: 64px;
  width: 320px;
}

.aside-container {
  position: sticky;
  width: 224px;
  top: calc(var(--vt-nav-height) + var(--vt-banner-height, 0px) + 24px);
  bottom: 0;
}

.aside-container::-webkit-scrollbar {
  display: none;
}

.edit-link {
  margin: 0 0 32px;
  /* text-align: center; */
}

.edit-link .vt-link {
  font-size: 14px;
  color: var(--vt-c-brand);
  font-weight: 500;
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

@media (min-width: 1280px) {
  .VPContentDoc {
    padding: 64px 0 96px 64px;
  }
  .VPContentDoc:not(.has-sidebar.has-aside) {
    padding-left: calc((100vw - 688px) / 2);
  }
  .VPContentDoc.has-aside:not(.has-sidebar) {
    padding-left: calc((100vw - 688px - 320px) / 2);
  }
  .container {
    display: flex;
  }
  .content {
    min-width: 620px;
    margin: 0;
    order: 1;
  }
  .VPContentDoc:not(.has-aside) .content {
    min-width: 688px;
  }
  .aside {
    display: block;
    order: 2;
  }
}

@media (min-width: 1440px) {
  .VPContentDoc {
    padding: 64px 0 96px 96px;
  }
  .aside {
    padding-left: 96px;
  }
}
</style>
