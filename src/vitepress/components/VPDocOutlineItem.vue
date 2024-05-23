<script setup lang="ts">
import { decode } from 'tiny-decode'
import { useData } from 'vitepress'
import type { MenuItemWithLinkAndChildren } from '../composables/outline.js'

defineProps<{
  headers: MenuItemWithLinkAndChildren[]
  nested?: boolean
}>()

const { frontmatter } = useData()

function onClick({ target: el }: Event) {
  const id = '#' + (el as HTMLAnchorElement).href!.split('#')[1]
  const heading = document.querySelector<HTMLAnchorElement>(
    decodeURIComponent(id)
  )
  heading?.focus()
}
</script>

<template>
  <ul :class="nested ? 'nested' : 'root'">
    <li v-for="{ children, link, text, hidden } in headers">
      <a class="outline-link" :href="link" @click="onClick" v-show="!hidden">
        {{ decode(text) }}
      </a>
      <template v-if="children?.length && frontmatter.outline === 'deep'">
        <VPDocOutlineItem :headers="children" :nested="true" />
      </template>
    </li>
  </ul>
</template>

<style scoped>
.root {
  position: relative;
  z-index: 1;
}

.nested {
  padding-left: 1em;
}

.outline-link {
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  line-height: 28px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.outline-link:hover,
.outline-link.active {
  color: var(--vt-c-text-1);
  transition: color 0.25s;
}
</style>
