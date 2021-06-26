<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
// import NavLink from './NavLink.vue'

const { site, frontmatter } = useData()
const showHero = computed(() => {
  const {
    heroImage,
    heroText,
    tagline,
    actionLink,
    actionText
  } = frontmatter.value
  return heroImage || heroText || tagline || (actionLink && actionText)
})

const heroText = computed(() => frontmatter.value.heroText || site.value.title)
</script>

<template>
  <header v-if="showHero" class="VPHomeHero">
    <div class="wrapper">
      <div class="main">
        <figure v-if="frontmatter.heroImage" class="figure">
          <img class="image" :src="withBase(frontmatter.heroImage)" :alt="frontmatter.heroAlt" />
        </figure>

        <h1 v-if="heroText" id="main-title" class="title">{{ heroText }}</h1>
        <h2 v-if="frontmatter.tagline" class="tagline" v-html="frontmatter.tagline"></h2>
        <p v-if="frontmatter.description" class="description" v-html="frontmatter.description"></p>

        <div class="action-buttons" v-if="frontmatter.actionButtons?.length">
          <a
            class="action-button"
            :class="button.extraClass"
            :style="button.extraStyle"
            :href="button.link"
            :target="button.target"
            v-for="button of frontmatter.actionButtons"
          >
            <!-- TOOD: icon -->
            {{ button.text }}
          </a>
        </div>
      </div>

      <div class="aside">
        <!-- TOOD: aside -->
        <slot />
      </div>
    </div>
  </header>
</template>

<style scoped>
.VPHomeHero {
  display: grid;
  min-height: 500px;
  padding: 50px 100px;
}

.VPHomeHero .wrapper {
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 800px;
}

.VPHomeHero .main {
  margin: auto;
  display: grid;
}

.title {
  color: var(--vt-c-brand);
  font-size: 42px;
  line-height: 52px;
}

.tagline {
  font-size: 42px;
  line-height: 52px;
}

.description {
  margin-top: 8px;
  color: var(--vt-c-text-2);
  line-height: 26px;
}

.action-buttons {
  padding: 20px 0;
  display: flex;
  gap: 12px;
}
</style>
