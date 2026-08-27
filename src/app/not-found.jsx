import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="min-h-screen bg-surface flex items-center justify-center px-6 pt-32 pb-24">
      <FadeInView className="text-center max-w-lg">
        <span className="font-kaisei text-7xl lg:text-8xl font-bold text-primary/20 block mb-4">
          404
        </span>
        <h1 className="font-kaisei text-3xl lg:text-4xl font-bold text-text-primary mb-4">
          Yeh page nahi mila.
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white rounded-full px-7 py-3 font-semibold text-[15px] hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25 w-full sm:w-auto"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary rounded-full px-7 py-3 font-semibold text-[15px] hover:bg-primary-light transition-colors w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Support
          </Link>
        </div>
      </FadeInView>
    </section>
  );
}
