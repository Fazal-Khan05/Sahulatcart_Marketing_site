import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import FadeInView from '../animations/FadeInView';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    business: '',
    products: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '36dc09ed-8b31-44e3-ae72-39ca50010617',
          subject: 'New Demo Request from Sahulatcart',
          from_name: 'Sahulatcart Contact Form',
          name: formData.name,
          whatsapp_number: formData.whatsapp,
          business: formData.business,
          products: formData.products,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', whatsapp: '', business: '', products: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark-surface pt-32 pb-24 overflow-hidden">
        {/* Decorative top stripe */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary via-accent to-primary-light" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInView>
            <h1 className="font-kaisei text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
              15 minute. Aap ki dukaan, chalti hui.
            </h1>
          </FadeInView>
          <FadeInView delay={0.15}>
            <p className="mt-6 text-white/70 text-lg max-w-xl leading-relaxed">
              Demo mein hum aap ke 2-3 products bot mein daal kar live WhatsApp
              pe dikhate hain — bhao-taao, order, slip, sab kuch. Aap ke apne phone se.
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
                      Shukriya!
                    </h3>
                    <p className="text-text-secondary leading-relaxed max-w-sm mx-auto">
                      Hum 24 ghante mein aap ko WhatsApp pe contact karenge. Demo ka setup sirf 15 minute ka hai.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-kaisei text-2xl font-bold text-text-primary mb-1">
                      Demo book karein
                    </h2>
                    <p className="text-text-secondary text-sm mb-8">
                      Form bharein — hum 24 ghante mein WhatsApp pe rabta karenge.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Naam */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                          Naam
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ahmed Raza"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition placeholder:text-text-secondary/50"
                        />
                      </div>

                      {/* WhatsApp number */}
                      <div>
                        <label htmlFor="whatsapp" className="block text-sm font-semibold text-text-primary mb-2">
                          WhatsApp number
                        </label>
                        <input
                          id="whatsapp"
                          name="whatsapp"
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={handleChange}
                          placeholder="+92 3XX XXXXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition placeholder:text-text-secondary/50"
                        />
                      </div>

                      {/* Dukaan / business */}
                      <div>
                        <label htmlFor="business" className="block text-sm font-semibold text-text-primary mb-2">
                          Dukaan / business
                        </label>
                        <input
                          id="business"
                          name="business"
                          type="text"
                          required
                          value={formData.business}
                          onChange={handleChange}
                          placeholder="Ali Garments, Lahore"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition placeholder:text-text-secondary/50"
                        />
                      </div>

                      {/* Kya bechte hain? */}
                      <div>
                        <label htmlFor="products" className="block text-sm font-semibold text-text-primary mb-2">
                          Kya bechte hain?
                        </label>
                        <textarea
                          id="products"
                          name="products"
                          rows={4}
                          required
                          value={formData.products}
                          onChange={handleChange}
                          placeholder="Ladies wear, shoes, mobile accessories..."
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
                        {status === 'loading' ? 'Bhej rahe hain...' : 'Demo Book Karein'}
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
                    <h3 className="font-semibold text-text-primary mb-0.5">Email</h3>
                    <a href="mailto:sahulatcart2026@gmail.com" className="text-text-secondary text-sm hover:text-primary transition-colors">
                      sahulatcart2026@gmail.com
                    </a>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.2}>
                <div className="bg-white rounded-2xl border border-border p-6 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">Demo mein kya hota hai?</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      5 min: aap ke products bot mein · 5 min: aap khud bot se bhao-taao karte hain · 5 min: portal + pricing. Bas.
                    </p>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.3}>
                <div className="bg-primary rounded-2xl p-6 shadow-sm">
                  <h3 className="font-semibold text-white mb-2">Koi commitment nahi</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Demo ke baad aap decide karein. Koi payment nahi, koi contract nahi. Sirf 15 minute mein dekhein ke bot kaise kaam karta hai.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
