<script lang="ts" setup>
import { useData } from 'vitepress'
import { ref, inject, onMounted, watchPostEffect } from 'vue'
import { MenuItemWithLink } from '../../core'
import VTMenuBadge from '../../core/components/VTMenuBadge.vue'
import { isActive } from '../support/utils'

const props = defineProps<{
  item: MenuItemWithLink
}>()

const { page } = useData()
const closeSideBar = inject('close-sidebar') as () => void

// https://github.com/vuejs/theme/issues/97#issuecomment-1666562964
const active = ref(false)
const updateActive = () => {
  active.value = isActive(page.value.relativePath, props.item.link)
}
onMounted(updateActive)
watchPostEffect(updateActive)
</script>

<template>
  <a
    :class="{ link: true, active }"
    :href="item.link"
    @click="closeSideBar"
  >
    <p class="link-text">
      {{ item.text }}<VTMenuBadge v-if="item.badge" :item="item.badge" />
    </p>
  </a>
</template>

<style scoped>
.link {
  display: block;
  padding: 6px 0;
}

@media (min-width: 960px) {
  .link {
    padding: 4px 0;
  }
}

.link:hover .link-text {
  color: var(--vt-c-brand-text-1);
  transition: color 0.25s;
}

.link.active .link-text {
  font-weight: 600;
  color: var(--vt-c-brand);
  transition: color 0.25s;
}

.link-text {
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
}
</style>
