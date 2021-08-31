<template>
  <div class="vt-switch" role="button">
    <div class="vt-switch-check">
      <div class="vt-switch-icon" v-if="$slots.default">
        <slot />
      </div>
    </div>
  </div>
</template>
