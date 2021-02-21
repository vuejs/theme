import type { SidebarConfig, SidebarGroup } from '../config'
import { isArray, ensureStartingSlash } from './utils'

export function isSidebarGroup(
  sidebar: SidebarConfig
): sidebar is SidebarGroup[] {
  return isArray(sidebar)
}

/**
 * Get the `SidebarConfig` from sidebar option. This method will ensure to get
 * correct sidebar config from `MultiSideBarConfig` with various path
 * combinations such as matching `guide/` and `/guide/`. If no matching config
 * was found, it will return empty array.
 */
export function getSidebar(
  sidebar: SidebarConfig,
  path: string
): SidebarGroup[] {
  if (isSidebarGroup(sidebar)) {
    return sidebar
  }

  path = ensureStartingSlash(path)

  for (const dir in sidebar) {
    // make sure the multi sidebar key starts with slash too
    if (path.startsWith(ensureStartingSlash(dir))) {
      return sidebar[dir]
    }
  }

  return []
}
