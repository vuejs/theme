<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getSidebar } from '../support/sidebar'
import type { SidebarGroup } from '../config'
import type { MenuItemWithLink } from '../../core'
import { isActive, normalizeLink } from '../support/utils'
import { VTIconChevronLeft, VTIconChevronRight } from '../../core'

const { page, theme } = useData()

const links = computed(() => {
  const sidebar = getSidebar(theme.value.sidebar, page.value.relativePath)
  const candidates = getFlatSideBarLinks(sidebar)
  const index = candidates.findIndex((link) =>
    isActive(page.value.relativePath, link.link)
  )
  return {
    prev: candidates[index - 1],
    next: candidates[index + 1]
  }
})

function getFlatSideBarLinks(sidebar: SidebarGroup[]): MenuItemWithLink[] {
  const links: MenuItemWithLink[] = []
  for (const group of sidebar) {
    for (const link of group.items) {
      links.push(link)
    }
  }
  return links
}
</script>

<template>
  <footer v-if="links.prev || links.next" class="VPContentDocFooter">
    <a
      v-if="links.prev"
      class="prev-link"
      :href="normalizeLink(links.prev.link)"
    >
      <VTIconChevronLeft class="vt-link-icon" />
      {{ links.prev.text }}
    </a>
    <a
      v-if="links.next"
      class="next-link"
      :href="normalizeLink(links.next.link)"
    >
      {{ links.next.text }}
      <VTIconChevronRight class="vt-link-icon" />
    </a>
  </footer>
</template>

<style scoped>
.VPContentDocFooter {
  border-top: 1px solid var(--vt-c-divider-light);
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
}

.prev-link,
.next-link {
  display: inline-block;
  color: var(--vp-c-brand);
  font-weight: 500;
  font-size: 14px;
  transition: color 0.25s;
}

.prev-link:hover,
.next-link:hover {
  color: var(--vp-c-brand-dark);
}

.next-link {
  margin-left: auto;
}

.vt-link-icon {
  margin-left: 0;
}
</style>
