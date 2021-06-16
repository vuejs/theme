import { withBase } from 'vitepress'

export const hashRE = /#.*$/
export const extRE = /(index)?\.(md|html)$/
export const outboundRE = /^[a-z]+:/i

export function isExternal(path: string): boolean {
  return outboundRE.test(path)
}

export function ensureStartingSlash(path: string): string {
  return /^\//.test(path) ? path : `/${path}`
}

export function normalizeLink(url: string): string {
  if (isExternal(url)) {
    return url
  }
  const { pathname, search, hash } = new URL(url, 'http://vuejs.org')
  return withBase(
    pathname.endsWith('/') || pathname.endsWith('.html')
      ? url
      : `${pathname.replace(/(\.md)?$/, '.html')}${search}${hash}`
  )
}

export function isActive(
  currentPath: string,
  matchPath?: string,
  asRegex = false
): boolean {
  if (matchPath === undefined) {
    return false
  }
  currentPath = normalize(`/${currentPath}`)
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath)
  } else {
    return normalize(matchPath) === currentPath
  }
}

export function normalize(path: string): string {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '')
}
