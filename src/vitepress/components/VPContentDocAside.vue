<script setup lang="ts">
import { useData } from 'vitepress'
import type { Header, DefaultTheme } from 'vitepress'

const { page } = useData()

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
  <div class="VPContentDocAside">
    <ul>
      <li v-for="{ text, link } in resolveHeaders(page.headers)">
        <a :href="link">{{ text }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.VPContentDocAside {
  position: fixed;
}
</style>