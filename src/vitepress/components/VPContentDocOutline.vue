<script setup lang="ts">
import { useData } from 'vitepress'
import type { Header, DefaultTheme } from 'vitepress'
import { useActiveAnchor } from '../composables/activeAnchor'
import { ref } from 'vue'

const { page } = useData()
const container = ref()
useActiveAnchor(container, '.outline-link')

interface HeaderWithChildren extends Header {
  children?: Header[]
}

function resolveHeaders(headers: Header[]) {
  return mapHeaders(groupHeaders(headers))
}

function groupHeaders(headers: Header[]): HeaderWithChildren[] {
  headers = headers.map((h) => Object.assign({}, h))
  let lastH2: HeaderWithChildren
  headers.forEach((h) => {
    if (h.level === 2) {
      lastH2 = h
    } else if (lastH2) {
      ;(lastH2.children || (lastH2.children = [])).push(h)
    }
  })
  return headers.filter((h) => h.level === 2)
}

function mapHeaders(headers: HeaderWithChildren[]): DefaultTheme.SideBarItem[] {
  return headers.map((header) => ({
    text: header.title,
    link: `#${header.slug}`,
    children: header.children ? mapHeaders(header.children) : undefined
  }))
}
</script>

<template>
  <div class="VPContentDocOutline" ref="container" v-if="page.headers">
    <div class="outline-title">On this page</div>
    <ul>
      <li v-for="{ text, link } in resolveHeaders(page.headers)">
        <a class="outline-link" :href="link">{{ text }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.VPContentDocOutline {
  position: fixed;
  font-size: 13px;
  font-weight: 500;
}

.outline-title {
  font-weight: 600;
  margin-bottom: 4px;
  text-transform: uppercase;
  font-size: 12px;
}

.outline-link {
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  line-height: 28px;
  display: block;
}

.outline-link.active {
  color: var(--vt-c-green);
}
</style>
