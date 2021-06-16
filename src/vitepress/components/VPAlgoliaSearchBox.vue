<script setup lang="ts">
import '@docsearch/css'
// @ts-ignore
import docsearch from '@docsearch/js'
import { useRoute, useRouter, useData } from 'vitepress'
import { onMounted } from 'vue'
import type { DocSearchHit } from '@docsearch/react/dist/esm/types'
import type { AlgoliaSearchOptions } from '../config'

const { lang, theme } = useData()
const route = useRoute()
const router = useRouter()

onMounted(() => {
  initialize(theme.value.algolia)
})

function initialize(userOptions: AlgoliaSearchOptions) {
  // if the user has multiple locales, the search results should be filtered
  // based on the language
  const facetFilters = !!theme.value.locales ? ['language:' + lang.value] : []

  docsearch(
    Object.assign({}, userOptions, {
      container: '#docsearch',

      searchParameters: Object.assign({}, userOptions.searchParameters, {
        // pass a custom lang facetFilter to allow multiple language search
        // https://github.com/algolia/docsearch-configs/pull/3942
        facetFilters: facetFilters.concat(
          userOptions.searchParameters?.facetFilters || []
        )
      }),

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

      hitComponent: ({
        hit,
        children
      }: {
        hit: DocSearchHit
        children: any
      }) => {
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
  )
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
  --docsearch-primary-color: var(--vt-c-text-light-2);
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-text-color: var(--vt-c-text-light-1);
  --docsearch-muted-color: var(--vt-c-text-light-2);
  --docsearch-searchbox-shadow: none;
  --docsearch-key-gradient: transparent;
  --docsearch-key-shadow: none;
}

.DocSearch-Button {
  margin: 0;
  background: transparent;
}

.DocSearch-Button:hover {
  background: transparent;
}

.DocSearch-Button .DocSearch-Search-Icon {
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  fill: currentColor;
  width: 18px;
  height: 18px;
  position: relative;
  margin-right: 10px;
}

@media (min-width: 768px) {
  .DocSearch-Button .DocSearch-Search-Icon {
    width: 15px;
    height: 15px;
    top: 1px;
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

.DocSearch-Button-Keys {
  border: 1px solid var(--vt-c-divider);
  border-radius: 4px;
  display: none;
  padding: 4px;
  height: 20px;
  justify-content: center;
  align-items: center;
}

.DocSearch-Button:hover .DocSearch-Button-Keys {
  border-color: var(--vt-c-brand-light);
}

@media (min-width: 768px) {
  .DocSearch-Button-Keys {
    display: flex;
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
