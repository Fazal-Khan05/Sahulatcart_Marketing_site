import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2 } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div className="md:col-span-2">
            <Link to="/">
              <Logo />
            </Link>
            <p className="text-text-secondary text-sm max-w-xs mt-4 leading-relaxed">
              Sahulatcart: Seamless commerce through the metaphor of flow. Pakistani commerce, evolved.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">About</a></li>
              <li><Link to="/contact" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Contact</Link></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Careers</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/product" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Features</Link></li>
              <li><Link to="/solutions" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Solutions</Link></li>
              <li><Link to="/pricing" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Pricing</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-text-primary mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Blog</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">Documentation</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-primary transition-colors block py-1">FAQ</a></li>
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
