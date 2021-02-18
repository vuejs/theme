<template>
  <div class="VTSwitchAppearance" role="button" @click="toggle">
    <div class="check">
      <div class="icon">
        <VTIconSun class="svg sun" />
        <VTIconMoon class="svg moon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppearance } from '../composables/appearance'
import VTIconSun from './icons/VTIconSun.vue'
import VTIconMoon from './icons/VTIconMoon.vue'

const { toggle } = useAppearance()
</script>

<style scoped>
.VTSwitchAppearance {
  position: relative;
  border-radius: 11px;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid var(--c-divider);
  background-color: var(--c-bg-mute);
  transition: border-color .25s, background-color .25s;
}

.VTSwitchAppearance:hover {
  border-color: var(--c-gray);
}

.check {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--c-white);
  box-shadow: var(--shadow-1);
  transition: background-color .25s, transform .25s;
}

.dark .check {
  background-color: var(--c-black);
  transform: translateX(18px);
}

.icon {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  overflow: hidden;
}

.svg {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  fill: var(--c-text-2);
}

.dark .svg {
  fill: var(--c-text-1);
  transition: opacity .25s;
}

.sun  { opacity: 1; }
.moon { opacity: 0; }

.dark .sun  { opacity: 0; }
.dark .moon { opacity: 1; }
</style>
