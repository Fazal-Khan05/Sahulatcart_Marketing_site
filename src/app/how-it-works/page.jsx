import HowItWorksSection from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'How It Works — Setup in Under 10 Minutes',
  description:
    'Connect WhatsApp or Shopify, add your products, set your pricing rules, and let the AI sell. From customer message to confirmed order, automatically.',
  path: '/how-it-works',
});

export default function HowItWorksPage() {
  return (
    <>
      <HowItWorksSection />
      <FAQ />
    </>
  );
}
