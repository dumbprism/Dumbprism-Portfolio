export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'dumbprism',
  DESCRIPTION:
    'my personal portfolio that showcases all my works and achievements in the form of a minimalistic UI',
  EMAIL: 'arhantk915@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://astro-erudite.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/', label: 'home' },
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'works' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/dumbprism', label: 'GitHub' },
  { href: 'https://twitter.com/dumbprism', label: 'Twitter' },
  { href: 'arhantk915@gmail.com', label: 'Email' },
  
]
