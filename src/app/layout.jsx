import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HydrationFlag from '@/components/utils/HydrationFlag';

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
      <head>
        {/*
          Loaded here rather than via an @import in globals.css: a CSS @import
          serialises the font request behind the stylesheet. next/font is not an
          option — Kaisei Decol is a Japanese family and next/font fetches dozens
          of subset chunks at build time, which times out.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Kaisei+Decol:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <HydrationFlag />
        <div className="min-h-screen bg-surface overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
