<template>
  <div class="VTMenu">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss" scoped>
.VTMenu {
  border-radius: 8px;
  min-width: 192px;
  background: var(--c-bg);
  box-shadow: var(--shadow-3);
  transition: background-color .5s;
}

.dark .VTMenu {
  background: var(--c-bg-soft);
  box-shadow: var(--shadow-1);
}

.VTMenu >>> .group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  transition: border-color .5s;
}

.VTMenu >>> .group + .group {
  border-top: 1px solid var(--c-divider-light);
  padding: 12px 16px 11px;
}

.VTMenu >>> .label {
  line-height: 28px;
  font-size: 12px;
  font-weight: 500;
  color: var(--c-text-2);
  transition: color .5s;
}

.VTMenu >>> .action {
  padding-left: 24px;
}
</style>
