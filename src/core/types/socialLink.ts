export interface SocialLink {
  icon: SocialLinkIcon
  link: string
}

export type SocialLinkIcon =
  | 'discord'
  | 'facebook'
  | 'github'
  | 'linkedin'
  | 'slack'
  | 'twitter'
  | 'x'
  | 'languages'

export type SocialLinkSize = 'small' | 'medium'
