import type { SocialLink } from 'vue-theme'

export interface Config {
  /**
   * The appearance option to enable/disable light/dark mode.
   *
   * @default true
   */
  appearance?: boolean

  /**
   * The path to the logo file.
   *
   * @example `'/img/logo.svg'`
   */
  logo?: string

  /**
   * The path to the dark mode logo file. If it's undefined, still `logo` file
   * will be used in dark mode. If `logo` undefined, the option will be
   * ignored as well.
   *
   * @example `'/img/logo-dark.svg'`
   */
  logoDark?: string

  /**
   * The title text to be displayed on the navbar. If `logo` is set, the title
   * will be displayed right next to the logo. Set `null` to disable.
   *
   * @default 'VitePress Site'
   */
  title?: string | null

  /**
   * Algolia configuration for the site search.
   */
  algolia?: AlgoliaSearchOptions

  /**
   * The social links to be displayed at the end of the nav bar. Perfect for
   * placing links to social services such as GitHub, Twitter, Facebook, etc.
   */
  socialLinks?: SocialLink[]

  /**
   * The nav items.
   */
  nav?: NavItem[]

  /**
   * The sidebar items.
   */
  sidebar?: SidebarConfig
}

/**
 * The Algolia search options. Partially copied from
 * @docsearch/react/dist/esm/DocSearch.d.ts
 */
export interface AlgoliaSearchOptions {
  appId?: string
  apiKey: string
  indexName: string
  placeholder?: string
  searchParameters?: any
  disableUserPersonalization?: boolean
  initialQuery?: string
}

export type NavItem = NavItemWithLink | NavItemWithChildren

export interface NavItemBase {
  text: string
}

export interface NavItemWithLink extends NavItemBase {
  link: string
}

export interface NavItemWithChildren extends NavItemBase {
  items: NavItemChild[]
}

export type NavItemChild = NavItemWithLink | NavItemChildWithChildren

export interface NavItemChildWithChildren {
  text?: string
  items: NavItemWithLink[]
}

export type SidebarConfig = SidebarGroup[] | MultiSidebarConfig

export interface MultiSidebarConfig {
  [path: string]: SidebarGroup[]
}

export interface SidebarGroup {
  text: string
  items: SidebarLink[]
}

export interface SidebarLink {
  text: string
  link: string
}
