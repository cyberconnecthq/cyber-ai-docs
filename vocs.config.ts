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
        items: [{ text: 'Cyber AI', link: '/' }],
      },
      {
        text: 'API Reference',
        collapsed: false,
        items: [
          {
            text: 'Search',
            link: '/api-reference/search',
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
