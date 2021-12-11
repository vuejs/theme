<script lang="ts" setup>
import { nextTick, onMounted, onUpdated } from 'vue'
import { useData } from 'vitepress'
import VPContentDocOutline from './VPContentDocOutline.vue'
import VPContentDocFooter from './VPContentDocFooter.vue'
import VPCarbonAds from './VPCarbonAds.vue'

const { page, frontmatter, theme } = useData()


// TODO:  solve this challenge in Vitepress's markdown processing so this hack can be removed.
async function addAriaLabelsToHeaderAnchors() {
  await nextTick()
  const els = document?.querySelectorAll<HTMLAnchorElement>('.vt-doc a.header-anchor')
  els.forEach((el) => {
    el.addEventListener('focus',() => el.removeAttribute('aria-hidden'))
    el.addEventListener('blur',() => el.setAttribute('aria-hidden', 'true'))
    const text  = el.textContent
    el.textContent = ''
    const span = document.createElement('span')
    span.textContent = text
    span.setAttribute('aria-hidden', 'true')
    el.appendChild(span)
    el.setAttribute('aria-labelledby', el.getAttribute!('href')?.slice(1) ?? '')
  })
}

onMounted(() => {
  addAriaLabelsToHeaderAnchors()
})
onUpdated(() => {
  addAriaLabelsToHeaderAnchors()
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
  margin-bottom: 96px;
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
  top: calc(var(--vt-nav-height) + 24px);
  bottom: 0;
}

.aside-container::-webkit-scrollbar {
  display: none;
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
