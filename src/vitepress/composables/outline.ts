import { onMounted, onUnmounted, onUpdated, Ref } from 'vue'
import { Header } from 'vitepress'
import { useMediaQuery } from '@vueuse/core'
import { MenuItemWithLink } from '../../core'

interface HeaderWithChildren extends Header {
  hidden?: boolean
}

interface MenuItemWithLinkAndChildren extends MenuItemWithLink {
  children?: MenuItemWithLinkAndChildren[]
  hidden?: boolean
}

export function resolveHeaders(
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
  const onScroll = throttleAndDebounce(setActiveLink, 100)

  function setActiveLink(): void {
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

    // page bottom - highlight last one
    if (
      anchors.length &&
      // https://github.com/vuejs/theme/pull/74
      window.scrollY + window.innerHeight >= document.body.offsetHeight - 1
    ) {
      activateLink(anchors[anchors.length - 1].hash)
      return
    }

    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i]
      const nextAnchor = anchors[i + 1]

      const [isActive, hash] = isAnchorActive(i, anchor, nextAnchor)

      if (isActive) {
        history.replaceState(null, document.title, hash ? hash : ' ')
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
    requestAnimationFrame(setActiveLink)
    window.addEventListener('scroll', onScroll)
  })

  onUpdated(() => {
    // sidebar update means a route change
    activateLink(location.hash)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
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
  let timeout: number
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
