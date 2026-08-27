import Hero from '@/components/sections/Hero';
import IntegrationBar from '@/components/sections/IntegrationBar';
import AISalesperson from '@/components/sections/AISalesperson';
import RuleEngine from '@/components/sections/RuleEngine';
import FAQ from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';
import { JsonLd, faqSchema } from '@/lib/structuredData';

export const metadata = pageMetadata({
  // Kept under ~155 chars so Google doesn't truncate it mid-sentence.
  description:
    'WhatsApp AI salesperson for Pakistani merchants. Answers in Roman Urdu, negotiates prices, and closes orders automatically. Trusted by 2000+ merchants.',
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
