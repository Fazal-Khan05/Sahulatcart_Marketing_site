/**
 * Generated at build time so `lastModified` tracks deploys instead of going stale
 * the way the hand-written public/sitemap.xml did. Add new routes here.
 */
const SITE_URL = 'https://www.sahulatcart.com';

const routes = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/solutions', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/how-it-works', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/pricing', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/support', changeFrequency: 'monthly', priority: 0.6 },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
