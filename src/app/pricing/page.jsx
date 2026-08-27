import PricingSection from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Pricing — Start Free, Scale as You Grow',
  description:
    'Start free with 5 conversations a day. Growth at Rs. 5,000/mo with Shopify integration and smart negotiation. Custom plans for high-volume merchants.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <PricingSection />
      <FAQ />
    </>
  );
}
