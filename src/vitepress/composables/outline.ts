import { computed, inject, onMounted, onUnmounted, onUpdated, ref, Ref } from 'vue'
import { Header, useData } from 'vitepress'
import { useMediaQuery } from '@vueuse/core'
import { MenuItemWithLink } from '../../core'

export interface HeaderWithChildren extends Header {
  hidden?: boolean
}

export interface MenuItemWithLinkAndChildren extends MenuItemWithLink {
  children?: MenuItemWithLinkAndChildren[]
  hidden?: boolean
}

export function useOutlineHeaders() {
  const { page } = useData()
  const filterHeaders = inject('filter-headers', null) as any
  return computed(() => {
    return resolveHeaders(page.value.headers, filterHeaders)
  })
}

function resolveHeaders(
  headers: HeaderWithChildren[],
  filter?: (h: HeaderWithChildren) => boolean
): MenuItemWithLinkAndChildren[] {
  return headers.map((header) => ({
    text: header.title,
    link: header.link,
    children: header.children?.length
      ? resolveHeaders(header.children, filter)
      : undefined,
    hidden: filter ? !filter(header) : false
  }))
}

export function useActiveAnchor(
  container: Ref<HTMLElement>,
  bg: Ref<HTMLElement>
) {
  const isOutlineEnabled = useMediaQuery('(min-width: 1280px)')
  const clickedHash = ref<string | null>(null)
  const scrollTimer = ref<any>(null)

  const onScroll = throttleAndDebounce(() => {
    scrollTimer.value && clearTimeout(scrollTimer.value)

    scrollTimer.value = setTimeout(() => setActiveLink('scroll'), 150)
  }, 100)

  const handleAnchorLinkClick = (event: Event) => {
    const { target } = event as MouseEvent
    const anchor = target as HTMLAnchorElement

    if (!anchor.classList.contains('outline-link')) return

    clickedHash.value = anchor.hash
    setActiveLink('click')

    if (scrollTimer.value) {
      clearTimeout(scrollTimer.value)
      scrollTimer.value = null
    }
  }

  function setActiveLink(actionType: 'scroll' | 'click'): void {
    if (!isOutlineEnabled.value) {
      return
    }

    const links = [].slice.call(
      container.value.querySelectorAll('.outline-link')
    ) as HTMLAnchorElement[]

    const anchors = [].slice
      .call(document.querySelectorAll('.content .header-anchor'))
      .filter((anchor: HTMLAnchorElement) =>
        links.some(
          (link) => link.hash === anchor.hash && anchor.offsetParent !== null
        )
      ) as HTMLAnchorElement[]

    if (actionType === 'click' && clickedHash.value) {
      activateLink(clickedHash.value)
      return
    }

    // page bottom - highlight last one
    if (
      actionType === 'scroll' &&
      anchors.length &&
      // https://github.com/vuejs/theme/pull/74
      window.scrollY + window.innerHeight >= document.body.offsetHeight - 1
    ) {
      // if there was a click, and there was no scroll after that, keep the clicked element active
      const targetHash = clickedHash.value || anchors[anchors.length - 1].hash
      activateLink(targetHash)

      return
    }

    // regular behavior during scroll
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i]
      const nextAnchor = anchors[i + 1]

      const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor)

      if (isActive) {
        clickedHash.value = null
        activateLink(hash)
        return
      }
    }
  }

  let prevActiveLink: HTMLAnchorElement | null = null

  function activateLink(hash: string | null): void {
    if (prevActiveLink) {
      prevActiveLink.classList.remove('active')
    }

    const activeLink = (prevActiveLink =
      hash == null
        ? null
        : (container.value.querySelector(
            `a[href="${decodeURIComponent(hash)}"]`
          ) as HTMLAnchorElement))
    if (activeLink) {
      activeLink.classList.add('active')
      bg.value.style.opacity = '1'
      bg.value.style.top = activeLink.offsetTop + 33 + 'px'
    } else {
      bg.value.style.opacity = '0'
      bg.value.style.top = '33px'
    }
  }

  onMounted(() => {
    requestAnimationFrame(() => setActiveLink('scroll'))

    window.addEventListener('scroll', onScroll)
    container.value.addEventListener('click', handleAnchorLinkClick)
  })

  onUpdated(() => {
    // sidebar update means a route change
    activateLink(location.hash)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    container.value.removeEventListener('click', handleAnchorLinkClick)

    scrollTimer.value && clearTimeout(scrollTimer.value)
  })
}

// magic number to avoid repeated retrieval
const pageOffset = 56

function getAnchorTop(anchor: HTMLAnchorElement): number {
  return anchor.parentElement!.offsetTop - pageOffset - 15
}

function isAnchorActive(
  index: number,
  anchor: HTMLAnchorElement,
  nextAnchor: HTMLAnchorElement | undefined
): [boolean, string | null] {
  const scrollTop = window.scrollY

  if (index === 0 && scrollTop === 0) {
    return [true, null]
  }

  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null]
  }

  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, anchor.hash]
  }

  return [false, null]
}

function throttleAndDebounce(fn: () => void, delay: number): () => void {
  let timeout: any
  let called = false

  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }

    if (!called) {
      fn()
      called = true
      setTimeout(() => {
        called = false
      }, delay)
    } else {
      timeout = setTimeout(fn, delay)
    }
  }
}
