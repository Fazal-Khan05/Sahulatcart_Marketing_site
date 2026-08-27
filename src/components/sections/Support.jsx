'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircleQuestion, Send, CheckCircle, Loader2, Headset } from 'lucide-react';
import FadeInView from '../animations/FadeInView';
import { submitToWeb3Forms } from '../../lib/web3forms';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    business: '',
    issue: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const success = await submitToWeb3Forms({
        subject: 'New Support Request from Sahulatcart',
        from_name: 'Sahulatcart Support Form',
        name: formData.name,
        contact: formData.contact,
        business: formData.business,
        issue: formData.issue,
      });

      if (success) {
        setStatus('success');
        setFormData({ name: '', contact: '', business: '', issue: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark-surface pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary via-accent to-primary-light" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInView>
            <h1 className="font-kaisei text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
              Hum yahan hain. Baat karein.
            </h1>
          </FadeInView>
          <FadeInView delay={0.15}>
            <p className="mt-6 text-white/70 text-lg max-w-xl leading-relaxed">
              Koi sawal ho, koi masla ho — form bharein aur humari team 24 ghante mein aap se rabta karegi.
            </p>
          </FadeInView>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80V40C240 0 480 0 720 20C960 40 1200 60 1440 40V80H0Z"
              fill="#F5F7FA"
            />
          </svg>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left — Form */}
            <FadeInView className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-border p-8 sm:p-10 shadow-sm">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-kaisei text-2xl font-bold text-text-primary mb-2">
                      Request Received!
                    </h3>
                    <p className="text-text-secondary leading-relaxed max-w-sm mx-auto">
                      Humari team aap ke masle ko dekh rahi hai. Hum 24 ghante mein aap se rabta karenge.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-kaisei text-2xl font-bold text-text-primary mb-1">
                      Support Request
                    </h2>
                    <p className="text-text-secondary text-sm mb-8">
                      Apna masla ya sawal neeche likhen — hum jaldi se jaldi jawab denge.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="support-name" className="block text-sm font-semibold text-text-primary mb-2">
                          Naam
                        </label>
                        <input
                          id="support-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ahmed Raza"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition placeholder:text-text-secondary/50"
                        />
                      </div>

                      {/* Contact */}
                      <div>
                        <label htmlFor="support-contact" className="block text-sm font-semibold text-text-primary mb-2">
                          WhatsApp / Email
                        </label>
                        <input
                          id="support-contact"
                          name="contact"
                          type="text"
                          required
                          value={formData.contact}
                          onChange={handleChange}
                          placeholder="+92 3XX XXXXXXX or you@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition placeholder:text-text-secondary/50"
                        />
                      </div>

                      {/* Business name */}
                      <div>
                        <label htmlFor="support-business" className="block text-sm font-semibold text-text-primary mb-2">
                          Business name
                        </label>
                        <input
                          id="support-business"
                          name="business"
                          type="text"
                          required
                          value={formData.business}
                          onChange={handleChange}
                          placeholder="Ali Garments, Lahore"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition placeholder:text-text-secondary/50"
                        />
                      </div>

                      {/* Issue / Question */}
                      <div>
                        <label htmlFor="support-issue" className="block text-sm font-semibold text-text-primary mb-2">
                          Aapka masla ya sawal
                        </label>
                        <textarea
                          id="support-issue"
                          name="issue"
                          rows={5}
                          required
                          value={formData.issue}
                          onChange={handleChange}
                          placeholder="Bot kaam nahi kar raha, ya koi sawal hai pricing ke baare mein..."
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none placeholder:text-text-secondary/50"
                        />
                      </div>

                      {status === 'error' && (
                        <p className="text-red-500 text-sm">Kuch masla ho gaya. Dubara try karein.</p>
                      )}

                      <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        whileHover={status !== 'loading' ? { y: -2 } : {}}
                        whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                        className={`w-full rounded-full py-3.5 text-white font-semibold text-sm flex items-center justify-center gap-2 transition ${
                          status === 'loading'
                            ? 'bg-primary/70 cursor-not-allowed'
                            : 'bg-primary hover:bg-primary-dark'
                        }`}
                      >
                        {status === 'loading' ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                        {status === 'loading' ? 'Bhej rahe hain...' : 'Submit Request'}
                      </motion.button>
                    </form>
                  </>
                )}
              </div>
            </FadeInView>

            {/* Right — Info Cards */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <FadeInView delay={0.1}>
                <div className="bg-white rounded-2xl border border-border p-6 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-0.5">Email us directly</h3>
                    <a href="mailto:sahulatcart2026@gmail.com" className="text-text-secondary text-sm hover:text-primary transition-colors">
                      sahulatcart2026@gmail.com
                    </a>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.2}>
                <div className="bg-white rounded-2xl border border-border p-6 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <MessageCircleQuestion className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Kya kya pooch sakte hain?</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Bot setup · Pricing queries · Technical issues · Feature requests · Account problems · Anything else!
                    </p>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.3}>
                <div className="bg-primary rounded-2xl p-6 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Headset className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Response time</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Hum 24 ghante ke andar jawab dete hain. Growth aur Business customers ko priority support milta hai.
                    </p>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
