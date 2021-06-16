import { onMounted, onUnmounted, onUpdated, Ref } from 'vue'

export function useActiveAnchor(el: Ref<HTMLElement>, linkSelector: string) {
  let activeLink: HTMLAnchorElement | null = null

  const onScroll = throttleAndDebounce(setActiveLink, 100)

  function setActiveLink(): void {
    const links = [].slice.call(
      el.value.querySelectorAll(linkSelector)
    ) as HTMLAnchorElement[]

    const anchors = [].slice
      .call(document.querySelectorAll('.content .header-anchor'))
      .filter((anchor: HTMLAnchorElement) =>
        links.some((link) => link.hash === anchor.hash)
      ) as HTMLAnchorElement[]

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

  function activateLink(hash: string | null): void {
    activeLink && activeLink.classList.remove('active')
    activeLink = el.value.querySelector(`a[href="${hash}"]`)
    if (activeLink) {
      activeLink.classList.add('active')
    }
  }

  onMounted(() => {
    requestAnimationFrame(setActiveLink)
    window.addEventListener('scroll', onScroll)
  })

  onUpdated(() => {
    // sidebar update means a route change
    activateLink(decodeURIComponent(location.hash))
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
  nextAnchor: HTMLAnchorElement
): [boolean, string | null] {
  const scrollTop = window.scrollY

  if (index === 0 && scrollTop === 0) {
    return [true, null]
  }

  if (scrollTop < getAnchorTop(anchor)) {
    return [false, null]
  }

  if (!nextAnchor || scrollTop < getAnchorTop(nextAnchor)) {
    return [true, decodeURIComponent(anchor.hash)]
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
