<template>
  <div class="VPContentDoc">
    <div class="container">
      <div class="content">
        <Content class="vp-doc" />
      </div>

      <div class="aside">
        <VPContentDocAside />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import VPContentDocAside from './VPContentDocAside.vue'
</script>

<style scoped>
.VPContentDoc {
  padding: 32px 24px 96px;
}

@media (min-width: 768px) {
  .VPContentDoc { padding: 48px 32px 96px; }
}

@media (min-width: 960px) {
  .VPContentDoc { padding: 64px 64px 96px; }
}

@media (min-width: 1280px) {
  .VPContentDoc { padding: 64px 64px 96px; }
}

@media (min-width: 1440px) {
  .VPContentDoc { padding: 64px 96px 96px; }
}

@media (min-width: 1280px) {
  .container {
    display: flex;
    margin: 0 auto;
    max-width: 880px;
  }
}

.content {
  margin: 0 auto;
  max-width: 592px;
}

@media (min-width: 1280px) {
  .content { margin: 0; }
}

.aside {
  position: relative;
  display: none;
  flex-shrink: 0;
  padding-left: 64px;
  width: 288px;
}

@media (min-width: 1280px) {
  .aside { display: block; }
}
</style>
