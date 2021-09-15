<script setup lang="ts">
import '@docsearch/css'
import docsearch from '@docsearch/js'
import { useRoute, useRouter, useData } from 'vitepress'
import { onMounted } from 'vue'
import { DocSearchHit } from '@docsearch/react/dist/esm/types'
import { AlgoliaSearchOptions } from '../config'

const { theme } = useData()
const route = useRoute()
const router = useRouter()

onMounted(() => {
  initialize(theme.value.algolia)
})

function initialize(userOptions: AlgoliaSearchOptions) {
  // Note: multi-lang search support is removed since the theme
  // doesn't support multiple locales as of now

  const options = Object.assign({}, userOptions, {
    container: '#docsearch',

    navigator: {
      navigate: ({ suggestionUrl }: { suggestionUrl: string }) => {
        const { pathname: hitPathname } = new URL(
          window.location.origin + suggestionUrl
        )

        // Router doesn't handle same-page navigation so we use the native
        // browser location API for anchor navigation
        if (route.path === hitPathname) {
          window.location.assign(window.location.origin + suggestionUrl)
        } else {
          router.go(suggestionUrl)
        }
      }
    },

    transformItems: (items: DocSearchHit[]) => {
      return items.map((item) => {
        return Object.assign({}, item, {
          url: getRelativePath(item.url)
        })
      })
    },

    hitComponent: ({ hit, children }: { hit: DocSearchHit; children: any }) => {
      const relativeHit = hit.url.startsWith('http')
        ? getRelativePath(hit.url as string)
        : hit.url

      return {
        type: 'a',
        ref: undefined,
        constructor: undefined,
        key: undefined,
        props: {
          href: hit.url,
          onClick: (event: MouseEvent) => {
            if (isSpecialClick(event)) {
              return
            }

            // we rely on the native link scrolling when user is already on
            // the right anchor because Router doesn't support duplicated
            // history entries
            if (route.path === relativeHit) {
              return
            }

            // if the hits goes to another page, we prevent the native link
            // behavior to leverage the Router loading feature
            if (route.path !== relativeHit) {
              event.preventDefault()
            }

            router.go(relativeHit)
          },
          children
        }
      }
    }
  })

  docsearch(options)
}

function isSpecialClick(event: MouseEvent) {
  return (
    event.button === 1 ||
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey
  )
}

function getRelativePath(absoluteUrl: string) {
  const { pathname, hash } = new URL(absoluteUrl)

  return pathname + hash
}
</script>

<template>
  <div id="docsearch" />
</template>

<style>
.DocSearch {
  --docsearch-primary-color: var(--vt-c-brand);
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-text-color: var(--vt-c-text-1);
  --docsearch-muted-color: var(--vt-c-text-2);
  --docsearch-searchbox-shadow: none;
  --docsearch-searchbox-focus-background: transparent;
  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
  --docsearch-modal-background: var(--vt-c-bg-soft);
  --docsearch-footer-background: var(--vt-c-bg);
}

.dark .DocSearch {
  --docsearch-modal-shadow: none;
  --docsearch-footer-shadow: none;
  --docsearch-logo-color: var(--vt-c-text-2);
  --docsearch-hit-background: var(--vt-c-bg-mute);
  --docsearch-hit-color: var(--vt-c-text-2);
  --docsearch-hit-shadow: none;
}

.dark .DocSearch-Footer {
  border-top: 1px solid var(--vt-c-divider);
}

.dark .DocSearch-Form {
  background-color: var(--vt-c-bg-mute);
}

.DocSearch-Form {
  background-color: white;
  border: 1px solid var(--vt-c-brand);
}

.DocSearch-Button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 48px;
  height: 55px;
  background: transparent;
}

.DocSearch-Button:hover {
  background: transparent;
}

@media (min-width: 768px) {
  .DocSearch-Button {
    justify-content: flex-start;
    width: 100%;
  }
}

.DocSearch-Button .DocSearch-Search-Icon {
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  fill: currentColor;
  width: 18px;
  height: 18px;
  position: relative;
}

@media (min-width: 768px) {
  .DocSearch-Button .DocSearch-Search-Icon {
    top: 1px;
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
}

.DocSearch-Button:hover .DocSearch-Search-Icon {
  color: var(--vt-c-text-1);
}

.DocSearch-Button-Placeholder {
  transition: color 0.5s;
  font-size: 13px;
  font-weight: 500;
  color: var(--vt-c-text-2);
  display: none;
  padding: 0 10px 0 0;
}

@media (min-width: 960px) {
  .DocSearch-Button-Placeholder {
    display: inline-block;
  }
}

.DocSearch-Button:hover .DocSearch-Button-Placeholder {
  color: var(--vt-c-text-1);
}

.DocSearch-Button .DocSearch-Button-Key {
  margin-top: 2px;
  border: 1px solid var(--vt-c-divider);
  border-right: none;
  border-radius: 4px 0 0 4px;
  display: none;
  padding-left: 6px;
  height: 22px;
  line-height: 22px;
  transition: color 0.5s, border-color 0.5s;
  min-width: 0;
}

.DocSearch-Button .DocSearch-Button-Key + .DocSearch-Button-Key {
  border-right: 1px solid var(--vt-c-divider);
  border-left: none;
  border-radius: 0 4px 4px 0;
  padding-left: 2px;
  padding-right: 6px;
}

.DocSearch-Button:hover .DocSearch-Button-Key {
  border-color: var(--vt-c-brand-light);
  color: var(--vt-c-brand-light);
}

@media (min-width: 768px) {
  .DocSearch-Button .DocSearch-Button-Key {
    display: inline-block;
  }
}

.DocSearch-Button-Key {
  font-size: 12px;
  font-weight: 500;
  height: 20px;
  margin: 0;
  width: auto;
  color: var(--vt-c-text-3);
  transition: color 0.5s;
  display: inline-block;
  padding: 0 1px;
}
</style>
