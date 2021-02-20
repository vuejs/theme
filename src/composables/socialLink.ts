export interface SocialLink {
  icon: SocialLinkIcon
  link: string
}

export type SocialLinkSize = 'small' | 'medium'

export type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'linkedin'
  | 'slack'
  | 'twitter'
