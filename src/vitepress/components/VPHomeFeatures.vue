<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { VTIconChevronRight } from '../../core'

const { frontmatter } = useData()
const hasFeatures = computed(() => {
  return frontmatter.value.features && frontmatter.value.features.length > 0
})
interface Feature {
  title?: string
  details?: string
  actionLink?: string
  actionText?: string
}
const features = computed<Feature[]>(() => {
  return frontmatter.value.features ? frontmatter.value.features : []
})
</script>

<template>
  <div v-if="hasFeatures" class="VPHomeFeatures">
    <div class="wrapper">
      <div class="container">
        <div class="features">
          <section
            v-for="(feature, index) in features"
            :key="index"
            class="feature"
          >
            <h2 class="title" v-if="feature.title">{{ feature.title }}</h2>
            <p class="details" v-if="feature.details">{{ feature.details }}</p>
            <a class="action" :href="feature.actionLink" v-if="feature.actionText && feature.actionLink">
              {{ feature.actionText}}
              <VTIconChevronRight class="vt-link-icon"/>
            </a>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPHomeFeatures {
  padding: 10px;
}

.VPHomeFeatures .features {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
  border-radius: 8px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .VPHomeFeatures .features {
    grid-template-columns: 1fr;
  }
}

.container {
  display: flex;
  margin: 0 auto;
  max-width: 1080px;
}

.feature {
  background: var(--vt-c-bg-soft);
  padding: 26px;
}

.feature .title {
  font-weight: bold;
  margin-bottom: 14px;
}

.feature .action {
  display: block;
  color: var(--vt-c-brand);
  margin-top: 14px;
}

.feature .action .vt-link-icon {
  height: 16px;
  width: 16px;
  margin-left: -2px;
  fill: var(--vt-c-brand);
  vertical-align: middle;
}
</style>
