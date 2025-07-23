export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://tradesmanwebsolutions.co.uk/sitemap.xml',
  }
}