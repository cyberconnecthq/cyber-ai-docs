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
          {
            text: 'Models',
            collapsed: true,
            items: [
              { text: 'BaseResponse', link: '/api-reference/models/base-response' },
              { text: 'CryptoSearchRequest', link: '/api-reference/models/crypto-search-request' },
              { text: 'CryptoSearchResponse', link: '/api-reference/models/crypto-search-response' },
              { text: 'CryptoSearchResult', link: '/api-reference/models/crypto-search-result' },
              { text: 'CryptoSearchType', link: '/api-reference/models/crypto-search-type' },
              { text: 'ProjectRequestSetting', link: '/api-reference/models/project-request-setting' },
              { text: 'ProjectResult', link: '/api-reference/models/project-result' },
              { text: 'TokenResult', link: '/api-reference/models/token-result' },
              { text: 'Tweet', link: '/api-reference/models/tweet' },
              { text: 'TweetSummary', link: '/api-reference/models/tweet-summary' },
              { text: 'TweetsRequestSetting', link: '/api-reference/models/tweets-request-setting' }
            ]
          }
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
