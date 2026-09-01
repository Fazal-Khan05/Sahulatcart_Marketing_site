import PricingSection from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';
import { JsonLd, faqSchema } from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Pricing — Start Free, Scale as You Grow',
  description:
    'Start free with 5 conversations a day. Custom pricing for Growth tier with Shopify integration and smart negotiation. Custom plans for high-volume merchants.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <PricingSection />
      <FAQ />
    </>
  );
}
