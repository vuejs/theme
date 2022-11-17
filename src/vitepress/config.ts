import {
  LocaleLinkItem,
  MenuItemChildWithChildren,
  MenuItemWithLink,
  SocialLink
} from '../core'

export interface Config {
  /**
   * The appearance option to enable/disable light/dark mode.
   *
   * @default true
   */
  appearance?: boolean

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

  /**
   * The i18n messages.
   */
  i18n?: i18nConfig

  /**
   * Info for the edit link
   */
  editLink?: {
    /**
     * Repo of the site.
     * e.g. `vuejs/docs#next`
     *
     * If a branch isn't specified, it defaults to `main`.
     */
    repo?: string
    text?: string
  }

  /**
   * Global footer settings. The footer will only be displayed when a page has
   * the frontmatter option `page: true`.  You may pass `footer: false` to the
   * frontmatter to hide the footer.
   */
  footer?: {
    license?: {
      text: string
      link: string
    }

    copyright?: string
  }

  /**
   * Algolia configuration for the site search.
   */
  algolia?: AlgoliaSearchOptions

  /**
   * CarbonAds configuration
   */
  carbonAds?: {
    code: string
    placement: string
  }

  /**
   * Translation/Locales links
   */
  localeLinks?: LocaleLinkItem[]
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
  translations?: Partial<DocSearchTranslations>
}

export interface DocSearchTranslations {
  button?: ButtonTranslations
  modal?: ModalTranslations
}

export interface ButtonTranslations {
  buttonText?: string
  buttonAriaLabel?: string
}
export interface ModalTranslations extends ScreenStateTranslations {
  searchBox?: {
    resetButtonTitle?: string
    resetButtonAriaLabel?: string
    cancelButtonText?: string
    cancelButtonAriaLabel?: string
  }
  footer?: {
    selectText?: string
    selectKeyAriaLabel?: string
    navigateText?: string
    navigateUpKeyAriaLabel?: string
    navigateDownKeyAriaLabel?: string
    closeText?: string
    closeKeyAriaLabel?: string
    searchByText?: string
  }
}
export interface ScreenStateTranslations {
  errorScreen?: {
    titleText?: string
    helpText?: string
  }
  startScreen?: {
    recentSearchesTitle?: string
    noRecentSearchesText?: string
    saveRecentSearchButtonTitle?: string
    removeRecentSearchButtonTitle?: string
    favoriteSearchesTitle?: string
    removeFavoriteSearchButtonTitle?: string
  }
  noResultsScreen?: {
    noResultsText?: string
    suggestedQueryText?: string
    reportMissingResultsText?: string
    reportMissingResultsLinkText?: string
  }
}

export type NavItem = NavItemWithLink | NavItemWithChildren

export type NavItemWithLink = MenuItemWithLink & {
  /**
   * activeMatch is expected to be a regex string
   * We can't use actual RegExp object here because it isn't serializable
   */
  activeMatch?: string
}

export interface NavItemWithChildren {
  text?: string
  activeMatch?: string
  items: (NavItemWithLink | MenuItemChildWithChildren)[]
}

export type SidebarConfig = SidebarGroup[] | MultiSidebarConfig

export interface MultiSidebarConfig {
  [path: string]: SidebarGroup[]
}

export interface SidebarGroup {
  text: string
  items: MenuItemWithLink[]
}

export interface i18nConfig {
  search?: string
  menu?: string
  toc?: string
  returnToTop?: string
  appearance?: string
  previous?: string
  next?: string
  pageNotFound?: string
  locales?: string
  joinTranslation?: string
  deadLink?: MessageWithLink
  deadLinkReport?: MessageWithLink
  footerLicense?: MessageWithLink

  ariaAnnouncer?: MessageWithLink
  ariaDarkMode?: string
  ariaSkipToContent?: string
  ariaToC?: string
  ariaMainNav?: string
  ariaMobileNav?: string
  ariaSidebarNav?: string
}

export interface MessageWithLink {
  before?: string
  link?: string
  after?: string
}
