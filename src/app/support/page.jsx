import SupportSection from '@/components/sections/Support';
import FAQ from '@/components/sections/FAQ';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Support',
  description:
    'Koi sawal ho, koi masla ho — form bharein aur humari team 24 ghante mein aap se rabta karegi. Bot setup, pricing, technical issues, sab kuch.',
  path: '/support',
});

export default function SupportPage() {
  return (
    <>
      <SupportSection />
      <FAQ />
    </>
  );
}
