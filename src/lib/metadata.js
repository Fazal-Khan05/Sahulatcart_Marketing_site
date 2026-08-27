const SITE_NAME = 'Sahulatcart';
const DEFAULT_TITLE = 'Sahulatcart — AI-Powered Commerce for Modern Merchants';

const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  type: 'image/png',
  alt: 'Sahulatcart — Aap so jao. AI karega sab kuch.',
};

/**
 * Builds a page's metadata with a complete openGraph/twitter block.
 *
 * Next shallow-merges metadata: a page that defines `openGraph` replaces the
 * layout's copy outright rather than merging into it. So every page has to
 * spell the whole object out, otherwise it silently inherits the layout's
 * og:url and every route claims to be the homepage.
 *
 * @param {Object} opts
 * @param {string} [opts.title] - Page title, without the "| Sahulatcart" suffix. Omit on the homepage.
 * @param {string} opts.description - Meta description, also used for og/twitter unless overridden.
 * @param {string} opts.path - Route path, used for both canonical and og:url.
 * @param {string} [opts.ogDescription] - Overrides `description` for social cards.
 */
export function pageMetadata({ title, description, path, ogDescription }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const socialDescription = ogDescription ?? description;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description: socialDescription,
      type: 'website',
      url: path,
      siteName: SITE_NAME,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: socialDescription,
      images: [{ url: OG_IMAGE.url, alt: OG_IMAGE.alt }],
    },
  };
}
