/**
 * Social profile URLs, used in two places that must agree:
 *   - the footer buttons (components/ui/SocialLinks.jsx)
 *   - `sameAs` in the Organization schema (lib/structuredData.js)
 *
 * URLs are the canonical profile links, not share/QR links — tracking params
 * (igsi, utm_source, rdid) are stripped so search engines see a stable URL.
 */
export const socialProfiles = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/sahulatcart' },
  { name: 'Facebook', href: 'https://www.facebook.com/people/sahulatcart/61593379073165/' },
  { name: 'Instagram', href: 'https://www.instagram.com/sahulat_cart' },
];
