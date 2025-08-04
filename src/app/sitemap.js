export default function sitemap() {
  const baseUrl = "https://tradesmanweb.co.uk";

  const blogPosts = [
    "2025-uk-tradesperson-report",
    "why-tradespeople-need-websites-2024",
    "birmingham-tradespeople-digital-marketing",
    "trade-directories-vs-websites",
    "google-my-business-tradespeople",
    "website-content-tradespeople",
    "mobile-first-trade-websites",
    "customer-reviews-west-midlands-trades",
    "emergency-callout-websites-uk-trades",
    "social-media-tradespeople-west-midlands",
  ];

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
