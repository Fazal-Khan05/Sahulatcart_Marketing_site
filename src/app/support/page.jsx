import SupportSection from '@/components/sections/Support';
import FAQ from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';
import { JsonLd, faqSchema } from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Support',
  description:
    'Koi sawal ho, koi masla ho — form bharein aur humari team 24 ghante mein aap se rabta karegi. Bot setup, pricing, technical issues, sab kuch.',
  path: '/support',
});

export default function SupportPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <SupportSection />
      <FAQ />
    </>
  );
}
