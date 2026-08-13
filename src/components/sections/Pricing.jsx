import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import FadeInView from '../animations/FadeInView';
import ComingSoon from '../ui/ComingSoon';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const Pricing = () => {
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold mb-4 tracking-wide">
            💰 TRANSPARENT PRICING
          </span>
          <h2 className="font-kaisei text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Fluid Commerce, Scaled for You.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </FadeInView>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Starter */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl p-8 border border-border shadow-sm flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-text-primary mb-2">Starter</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-text-primary">Free</span>
              </div>
              <p className="text-text-secondary text-sm mt-2">Perfect to get started</p>
            </div>
            
            <div className="border-t border-border my-6"></div>
            
            <ul className="flex-1 space-y-4">
              {[
                'WhatsApp AI salesman — 24/7',
                'Bhao-taao engine + price guard',
                '5 conversations / day',
                'COD + bank transfer + slips',
                'Merchant portal + inbox'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => setComingSoonOpen(true)}
              className="border border-primary text-primary rounded-full w-full py-3 text-center font-medium hover:bg-primary-light transition mt-8"
            >
              Start Free
            </button>
          </motion.div>

          {/* Card 2: Growth */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="bg-primary rounded-2xl p-8 text-white shadow-2xl shadow-primary/20 relative flex flex-col"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">Rs. 5,000</span>
                <span className="text-white/60 text-lg">/mo</span>
              </div>
              <p className="text-white/70 text-sm mt-2">For growing businesses</p>
            </div>
            
            <div className="border-t border-white/20 my-6"></div>
            
            <ul className="flex-1 space-y-4">
              {[
                'Up to 500 conversations/mo',
                'Advanced AI with negotiation',
                'Shopify integration',
                'Priority support',
                'Analytics dashboard'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white/80 shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => setComingSoonOpen(true)}
              className="bg-white text-primary rounded-full w-full py-3 text-center font-bold hover:bg-white/90 transition mt-8 shadow-md"
            >
              Start Growing
            </button>
          </motion.div>

          {/* Card 3: Business */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl p-8 border border-border shadow-sm flex flex-col"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-text-primary mb-2">Business</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-text-primary">Custom</span>
              </div>
              <p className="text-text-secondary text-sm mt-2">For high-volume merchants</p>
            </div>
            
            <div className="border-t border-border my-6"></div>
            
            <ul className="flex-1 space-y-4">
              {[
                'Unlimited conversations',
                'Custom AI training',
                'Shopify integration',
                'Priority support',
                'Analytics dashboard',
                'CRM built for your business needs'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => setComingSoonOpen(true)}
              className="border border-primary text-primary rounded-full w-full py-3 text-center font-medium hover:bg-primary-light transition mt-8"
            >
              Contact Sales
            </button>
          </motion.div>
        </motion.div>
      </div>

      <ComingSoon 
        isOpen={comingSoonOpen} 
        onClose={() => setComingSoonOpen(false)} 
        type="getStarted" 
      />
    </section>
  );
};

export default Pricing;
