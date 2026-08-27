import { faqs } from './faqs';
import { socialProfiles } from './socialProfiles';

const SITE_URL = 'https://www.sahulatcart.com';

/**
 * Spellings people actually type when they mean this product. Declaring them as
 * `alternateName` is the supported way to tell search engines that a brand goes by
 * several forms, so a misspelled query still resolves here.
 *
 * Deliberately excluded: "Sehat Card" and "Sehat Sahulat". Those name Pakistan's
 * national government health insurance programme — a different thing entirely, with
 * government and encyclopaedia results we would never outrank. Claiming them would
 * pull in people looking for free hospital treatment, who bounce immediately; that
 * bounce rate then drags down the terms this site can genuinely win.
 */
const BRAND_VARIANTS = [
  'Sahulat Cart',
  'SahulatCart',
  'Sahulatcard',
  'Sahulat Card',
  'Sahulat',
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Sahulatcart',
  alternateName: BRAND_VARIANTS,
  url: SITE_URL,
  // Ties the social profiles to this brand, which helps search engines resolve
  // "sahulatcart" to this entity rather than the other Sahulat-named businesses.
  sameAs: socialProfiles.map((p) => p.href),
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    'AI sales agent for Pakistani merchants. Handles WhatsApp conversations, negotiates prices in Roman Urdu, and closes orders automatically.',
  email: 'sahulatcart2026@gmail.com',
  areaServed: {
    '@type': 'Country',
    name: 'Pakistan',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'sahulatcart2026@gmail.com',
    areaServed: 'PK',
    availableLanguage: ['en', 'ur'],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Sahulatcart',
  alternateName: BRAND_VARIANTS,
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-PK',
};

/**
 * Describes the product itself. `offers` mirrors the live pricing tiers — if those
 * change in components/sections/Pricing.jsx, change them here too, or the markup
 * will claim a price the page doesn't show.
 */
export const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Sahulatcart',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: SITE_URL,
  description:
    'WhatsApp AI salesperson for Pakistani merchants — answers customer questions in Roman Urdu, negotiates within your margin rules, syncs with Shopify, and confirms COD orders automatically.',
  provider: { '@id': `${SITE_URL}/#organization` },
  offers: [
    {
      '@type': 'Offer',
      name: 'Starter',
      price: '0',
      priceCurrency: 'PKR',
      description: 'Free — 5 conversations per day.',
    },
    {
      '@type': 'Offer',
      name: 'Growth',
      price: '5000',
      priceCurrency: 'PKR',
      description: 'Up to 500 conversations per month, Shopify integration, analytics.',
    },
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
};

/**
 * Renders one or more schema objects as a JSON-LD script tag.
 * Safe against `</script>` injection via the forward-slash escape.
 */
export function JsonLd({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  );
}
