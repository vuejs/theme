<template>
  <div class="VTHamburger" :class="classes" role="button">
    <div class="container">
      <div class="top" />
      <div class="middle" />
      <div class="bottom" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps<{
  active: boolean
}>()

const classes = computed(() => ({
  active: props.active
}))
</script>

<style scoped>
.VTHamburger {
  display: flex;
  justify-content: center;
  align-items: center;
}

.VTHamburger:hover .top    { top: 0; left: 0; transform: translateX(4px); }
.VTHamburger:hover .middle { top: 6; left: 0; transform: translateX(0); }
.VTHamburger:hover .bottom { top: 12px; left: 0; transform: translateX(8px); }

.VTHamburger.active .top    { top: 6px; transform: translateX(0) rotate(225deg); }
.VTHamburger.active .middle { top: 6px; transform: translateX(16px); }
.VTHamburger.active .bottom { top: 6px; transform: translateX(0) rotate(135deg); }

.VTHamburger.active:hover .top,
.VTHamburger.active:hover .middle,
.VTHamburger.active:hover .bottom {
  background-color: var(--c-text-2);
  transition: top .25s, background-color .25s, transform .25s;
}

.container {
  position: relative;
  width: 16px;
  height: 14px;
  overflow: hidden;
}

.top,
.middle,
.bottom {
  position: absolute;
  width: 16px;
  height: 2px;
  background-color: var(--c-text-1);
  transition: top .25s, background-color .5s, transform .25s;
}

.top    { top: 0; left: 0; transform: translateX(0); }
.middle { top: 6px; left: 0; transform: translateX(8px); }
.bottom { top: 12px; left: 0; transform: translateX(4px); }
</style>
