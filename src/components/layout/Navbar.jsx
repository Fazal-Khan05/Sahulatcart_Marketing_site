'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ComingSoon from '../ui/ComingSoon';
import Logo from '../ui/Logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Demo', href: '/contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [comingSoonType, setComingSoonType] = useState('login');
  const pathname = usePathname();

  /* Mirrors react-router's NavLink: exact match for "/", prefix match elsewhere. */
  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const openComingSoon = (type) => {
    setComingSoonType(type);
    setComingSoonOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border transition-colors duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo className="relative z-10" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] transition-colors ${
                  isActive(link.href)
                    ? 'font-semibold text-primary'
                    : 'font-medium text-text-secondary hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => openComingSoon('login')}
              className="border border-primary text-primary rounded-full px-5 py-2 text-sm font-medium hover:bg-primary-light transition cursor-pointer"
            >
              Log in
            </button>
            <button
              onClick={() => openComingSoon('getStarted')}
              className="bg-primary text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-primary-dark transition cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-10 p-2 -mr-2 text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden pt-20 px-4"
          >
            <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="relative bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg border-b border-border/50 pb-3 transition-colors ${
                    isActive(link.href)
                      ? 'font-semibold text-primary'
                      : 'font-medium text-text-primary hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <button
                  onClick={() => openComingSoon('login')}
                  className="w-full border border-primary text-primary rounded-full px-5 py-3 text-base font-medium hover:bg-primary-light transition text-center cursor-pointer"
                >
                  Log in
                </button>
                <button
                  onClick={() => openComingSoon('getStarted')}
                  className="w-full bg-primary text-white rounded-full px-5 py-3 text-base font-medium hover:bg-primary-dark transition text-center cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Coming Soon Modal */}
      <ComingSoon
        isOpen={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        type={comingSoonType}
      />
    </>
  );
};

export default Navbar;
