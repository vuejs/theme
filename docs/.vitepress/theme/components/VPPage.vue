<template>
  <div class="VPPage">
    <div class="container">
      <Content class="vp-content" />
    </div>
  </div>
</template>

<style scoped>
.VPPage {
  padding: 32px 24px 96px;
}

@media (min-width: 768px) {
  .VPPage {
    padding: 48px 32px 96px;
  }
}

@media (min-width: 960px) {
  .VPPage {
    padding: 48px 32px 96px 280px;
  }
}

.container {
  margin: 0 auto;
  max-width: 592px;
}
</style>
