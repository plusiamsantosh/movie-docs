export default {
  title: 'Movie Service',
  description: 'technical documentation for movie service',
  base: '/base/',
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Directory Structure', link: '/guide/directory-structure' },
          { text: 'Override Config', link: '/guide/override-config' },
        ]
      },
      {
        text: 'Database',
        items: [
          { text: 'Database Setup', link: '/db/database.md' },
        ]
      }
    ]
  }
}