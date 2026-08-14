import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ComingSoon from '../ui/ComingSoon';
import Logo from '../ui/Logo';

const navLinks = [
  { name: 'Product', href: '#product' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Resources', href: '#resources' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [comingSoonType, setComingSoonType] = useState('login');
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    navLinks.forEach((link) => {
      if (link.href.startsWith('#')) {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveSection(href);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openComingSoon = (type) => {
    setComingSoonType(type);
    setComingSoonOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-border' : 'bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <Logo className="relative z-10" />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-[15px] transition-colors ${
                  activeSection === link.href 
                    ? 'font-semibold text-primary' 
                    : 'font-medium text-text-secondary hover:text-primary'
                }`}
              >
                {link.name}
              </a>
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
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`text-lg border-b border-border/50 pb-3 transition-colors ${
                    activeSection === link.href 
                      ? 'font-semibold text-primary' 
                      : 'font-medium text-text-primary hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
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
