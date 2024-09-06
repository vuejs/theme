export type MenuItem = MenuItemWithLink | MenuItemWithChildren

export interface MenuItemWithLink {
  text: string
  link: string
  badge?: MenuBadgeItem
}

export interface MenuItemWithChildren {
  text?: string
  items: MenuItemChild[]
}

export type MenuItemChild = MenuItemWithLink | MenuItemChildWithChildren

export interface MenuItemChildWithChildren {
  text?: string
  items: MenuItemWithLink[]
}

export interface MenuBadgeItem {
  text: string
  type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
}

export type LocaleLinkItem = MenuItemWithLink & {
  repo?: string
  isTranslationsDesc?: boolean
}
