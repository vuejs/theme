<script setup lang="ts">
import VPHomeHero from './VPHomeHero.vue'
import VPHomeFeatures from './VPHomeFeatures.vue'
import VPHomeFooter from './VPHomeFooter.vue'
</script>

<template>
  <main class="home" aria-labelledby="main-title">
    <VPHomeHero />
    <slot name="hero" />
    <VPHomeFeatures />
    <div class="home-content">
      <Content />
    </div>
    <slot name="features" />
    <VPHomeFooter />
    <slot name="footer" />
  </main>
</template>
