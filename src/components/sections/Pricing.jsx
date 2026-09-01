'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import FadeInView from '../animations/FadeInView';
import ComingSoon from '../ui/ComingSoon';

/**
 * Plan tiers. Edit prices and features here — the card markup below is shared.
 * `featured` switches a tier to the dark green treatment with the "Most Popular" badge.
 */
const plans = [
  {
    name: 'Starter',
    price: 'Free',
    blurb: 'Perfect to get started',
    cta: 'Start Free',
    features: [
      'WhatsApp AI salesman — 24/7',
      'Bhao-taao engine + price guard',
      '5 conversations / day',
      'COD + bank transfer + slips',
      'Merchant portal + inbox',
    ],
  },
  {
    name: 'Growth',
    price: 'Custom',
    blurb: 'For growing businesses',
    cta: 'Start Growing',
    featured: true,
    features: [
      'Up to 500 conversations/mo',
      'Advanced AI with negotiation',
      'Shopify integration',
      'Priority support',
      'Analytics dashboard',
      'Voice notes — Urdu/Punjabi samajhta hai',
      'Smart upsell — basket size barhao',
    ],
  },
  {
    name: 'Business',
    price: 'Custom',
    blurb: 'For high-volume merchants',
    cta: 'Contact Sales',
    features: [
      'Unlimited conversations',
      'Custom AI training',
      'Shopify integration',
      'Priority support (On WhatsApp)',
      'Analytics dashboard',
      'CRM built for your business needs',
      'Voice notes — Urdu/Punjabi samajhta hai',
      'Smart upsell — basket size barhao',
    ],
  },
];

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

const PlanCard = ({ plan, onSelect }) => {
  const { name, price, period, blurb, cta, features, featured } = plan;

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className={
        featured
          ? 'bg-primary rounded-2xl p-8 text-white shadow-2xl shadow-primary/20 relative flex flex-col'
          : 'bg-white rounded-2xl p-8 border border-border shadow-sm flex flex-col'
      }
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-2 ${featured ? 'text-white' : 'text-text-primary'}`}>
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-bold ${featured ? 'text-white' : 'text-text-primary'}`}>
            {price}
          </span>
          {period && <span className="text-white/60 text-lg">{period}</span>}
        </div>
        <p className={`text-sm mt-2 ${featured ? 'text-white/70' : 'text-text-secondary'}`}>
          {blurb}
        </p>
      </div>

      <div className={`border-t my-6 ${featured ? 'border-white/20' : 'border-border'}`}></div>

      <ul className="flex-1 space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className={`w-5 h-5 shrink-0 ${featured ? 'text-white/80' : 'text-primary'}`} />
            <span className={featured ? 'text-white/90' : 'text-text-secondary'}>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={
          featured
            ? 'bg-white text-primary rounded-full w-full py-3 text-center font-bold hover:bg-white/90 transition mt-8 shadow-md'
            : 'border border-primary text-primary rounded-full w-full py-3 text-center font-medium hover:bg-primary-light transition mt-8'
        }
      >
        {cta}
      </button>
    </motion.div>
  );
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
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              onSelect={() => setComingSoonOpen(true)}
            />
          ))}
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
