import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const DESCRIPTION =
  'Sahulatcart turns customer conversations into automated sales with AI that answers questions, recommends products, negotiates prices, and helps close orders. Trusted by 2000+ merchants in Pakistan.';

const OG_DESCRIPTION =
  'Your AI sales team, built into your conversations. Transform WhatsApp inquiries into completed orders instantly.';

export const metadata = {
  metadataBase: new URL('https://www.sahulatcart.com'),
  title: {
    default: 'Sahulatcart — AI-Powered Commerce for Modern Merchants',
    template: '%s | Sahulatcart',
  },
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  icons: { icon: '/logo.png?v=2' },
  openGraph: {
    title: 'Sahulatcart — AI-Powered Commerce for Modern Merchants',
    description: OG_DESCRIPTION,
    type: 'website',
    url: '/',
    siteName: 'Sahulatcart',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Sahulatcart — Aap so jao. AI karega sab kuch.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahulatcart — AI-Powered Commerce for Modern Merchants',
    description: OG_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        alt: 'Sahulatcart — Aap so jao. AI karega sab kuch.',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-surface overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
