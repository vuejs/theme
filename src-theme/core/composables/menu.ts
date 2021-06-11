export type MenuItem = MenuItemWithLink | MenuItemWithChildren

export interface MenuItemBase {
  text: string
}

export interface MenuItemWithLink extends MenuItemBase {
  link: string
}

export interface MenuItemWithChildren extends MenuItemBase {
  items: MenuItemChild[]
}

export type MenuItemChild = MenuItemWithLink | MenuItemChildWithChildren

export interface MenuItemChildWithChildren {
  text?: string
  items: MenuItemWithLink[]
}
