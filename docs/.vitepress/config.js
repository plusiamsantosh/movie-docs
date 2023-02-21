export default {
  title: 'Movie Service',
  description: 'technical documentation for movie service',
  base: '/movie-docs/',
  outDir:'../public',
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
          { text: 'Database Migration', link: '/db/db-migration.md' },
          { text: 'Add New Table', link: '/db/add-new-table.md' },
        ]
      },
      {
        text: 'Code',
        items: [
          { text: 'Add API', link: '/code/add-api.md' },
          { text: 'New Service', link: '/code/new-service.md' },
          { text: 'New Repository', link: '/code/new-repository.md' },
          
        ]
      }
    ]
  }
}