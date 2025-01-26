import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Cyber Docs',
  titleTemplate: '%s – Cyber Docs',
  theme: {
    accentColor: { light: '#0c9b00', dark: '#07DC10' },
  },
  sidebar: {
    '/': [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Cyber AI', link: '/' },
          { text: 'Crypto Social Data All-in-One API', link: '/introduction/cyber-ai' },
          { text: 'Early Access', link: '/early-access' },
        ],
      },
      {
        text: 'API Reference',
        collapsed: false,
        items: [
          {
            text: 'Semantic Search',
            link: '/api-reference/semantic-search',
          },
          {
            text: 'Keyword Search',
            link: '/api-reference/keyword-search',
          },
          {
            text: 'Trending Projects',
            link: '/api-reference/trending-projects',
          },
        ],
      },
    ],
  },
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/cyberconnecthq',
    },
    {
      icon: 'x',
      link: 'https://twitter.com/cyberconnecthq',
    },
    // {
    //   icon: "discord",
    //   link: "https://discord.gg/cyberconnecthq",
    // },
  ],
  logoUrl: { dark: '/assets/logo.svg', light: '/assets/logo-black.svg' },
})
