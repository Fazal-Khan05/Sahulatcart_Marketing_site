'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Bell } from 'lucide-react';
import { submitToWeb3Forms } from '../../lib/web3forms';

const ComingSoon = ({ isOpen, onClose, type = 'login' }) => {
  const titles = {
    login: 'Login',
    getStarted: 'Get Started',
  };

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    try {
      const success = await submitToWeb3Forms({
        email: email,
        subject: 'New Waitlist Signup from Sahulatcart',
        from_name: 'Sahulatcart Waitlist',
      });

      if (success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {/* Decorative bg */}
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary-light opacity-50 pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-primary-light opacity-30 pointer-events-none" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-alt transition text-text-secondary hover:text-text-primary z-50"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ rotate: -10 }}
                  animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className="w-20 h-20 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-6"
                >
                  <Sparkles className="w-10 h-10 text-primary" />
                </motion.div>

                <h2 className="font-kaisei text-3xl font-bold text-text-primary mb-3">
                  Coming Soon
                </h2>

                <p className="text-text-secondary mb-2 text-lg">
                  {type === 'getStarted' ? (
                    <>
                      <span className="font-semibold text-primary">Get Early Access</span> to Sahulatcart.
                    </>
                  ) : (
                    <>
                      <span className="font-semibold text-primary">{titles[type]}</span> is under construction.
                    </>
                  )}
                </p>

                <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                  We're putting the finishing touches on this feature. Leave your email to be the first to know when it's ready!
                </p>

                {/* Email signup */}
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-primary-light/50 border border-primary/20 rounded-2xl p-6 mb-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-primary font-bold text-lg mb-1">You're on the list!</h3>
                    <p className="text-text-secondary text-sm">We'll let you know as soon as it's ready.</p>
                  </motion.div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="flex-1 px-4 py-3 rounded-full border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition w-full"
                      />
                      <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        whileHover={status !== 'loading' ? { scale: 1.05 } : {}}
                        whileTap={status !== 'loading' ? { scale: 0.95 } : {}}
                        className={`text-white rounded-full px-6 py-3 text-sm font-semibold transition flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto ${status === 'loading' ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark'}`}
                      >
                        {status === 'loading' ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <Bell className="w-4 h-4" />
                        )}
                        {status === 'loading' ? 'Sending...' : 'Notify Me'}
                      </motion.button>
                    </form>
                    {status === 'error' && (
                      <p className="text-red-500 text-xs mb-2">Oops! Something went wrong. Please try again.</p>
                    )}
                    <p className="text-text-secondary text-xs">
                      No spam, we promise. Only launch updates.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ComingSoon;
