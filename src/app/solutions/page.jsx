import SolutionsSection from '@/components/sections/Solutions';
import ChatToCheckout from '@/components/sections/ChatToCheckout';
import FAQ from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Solutions — WhatsApp & Shopify Automation',
  description:
    'Turn WhatsApp into a 24/7 automated sales channel and keep Shopify in two-way sync. Built for the way modern Pakistani merchants actually sell.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      <SolutionsSection />
      <ChatToCheckout />
      <FAQ />
    </>
  );
}
