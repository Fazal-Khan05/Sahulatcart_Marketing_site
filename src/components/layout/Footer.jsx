import React from 'react';
import Link from 'next/link';
import Logo from '../ui/Logo';
import SocialLinks from '../ui/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div className="md:col-span-2">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-text-secondary text-sm max-w-xs mt-4 leading-relaxed">
              Sahulatcart: Seamless commerce through the metaphor of flow. Pakistani commerce, evolved.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/#product" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">About</Link></li>
              <li><Link href="/contact" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Contact</Link></li>
              <li><a href="mailto:sahulatcart2026@gmail.com?subject=Careers%20at%20Sahulatcart" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Careers</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/#product" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Features</Link></li>
              <li><Link href="/solutions" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Solutions</Link></li>
              <li><Link href="/pricing" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Pricing</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Documentation</Link></li>
              <li><Link href="/#resources" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-6 flex flex-col items-center">
          <p className="text-sm text-text-secondary text-center">
            © 2026 Sahulatcart. Fluid Commerce for the Modern Merchant.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
