import ContactSection from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';
import { JsonLd, faqSchema } from '@/lib/structuredData';

export const metadata = pageMetadata({
  title: 'Book a Demo',
  description:
    'Demo mein hum aap ke 2-3 products bot mein daal kar live WhatsApp pe dikhate hain — bhao-taao, order, slip, sab kuch. Sirf 15 minute.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <ContactSection />
      <FAQ />
    </>
  );
}
