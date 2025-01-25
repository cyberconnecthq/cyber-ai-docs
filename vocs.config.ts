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
        ],
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
      {
        text: 'Models',
        collapsed: false,
        items: [
          { text: 'BaseResponse', link: '/models/base-response' },
          { text: 'CryptoSearchRequest', link: '/models/crypto-search-request' },
          { text: 'CryptoSearchResponse', link: '/models/crypto-search-response' },
          { text: 'CryptoSearchResult', link: '/models/crypto-search-result' },
          { text: 'CryptoSearchType', link: '/models/crypto-search-type' },
          { text: 'ProjectRequestSetting', link: '/models/project-request-setting' },
          { text: 'ProjectResult', link: '/models/project-result' },
          { text: 'TokenResult', link: '/models/token-result' },
          { text: 'Tweet', link: '/models/tweet' },
          { text: 'TweetSummary', link: '/models/tweet-summary' },
          { text: 'TweetsRequestSetting', link: '/models/tweets-request-setting' },
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
