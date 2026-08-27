import Hero from '@/components/sections/Hero';
import IntegrationBar from '@/components/sections/IntegrationBar';
import AISalesperson from '@/components/sections/AISalesperson';
import RuleEngine from '@/components/sections/RuleEngine';
import FAQ from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';
import { JsonLd, faqSchema } from '@/lib/structuredData';

export const metadata = pageMetadata({
  description:
    'Sahulatcart turns customer conversations into automated sales with AI that answers questions, recommends products, negotiates prices, and helps close orders. Trusted by 2000+ merchants in Pakistan.',
  ogDescription:
    'Your AI sales team, built into your conversations. Transform WhatsApp inquiries into completed orders instantly.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <Hero />
      <IntegrationBar />
      <AISalesperson />
      <RuleEngine />
      <FAQ />
    </>
  );
}
