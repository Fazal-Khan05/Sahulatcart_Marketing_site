'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import FadeInView from '../animations/FadeInView';
import { faqs } from '@/lib/faqs';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="resources" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold mb-4 tracking-wide">
            FAQ
          </span>
          <h2 className="font-kaisei text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Everything you need to know about Sahulatcart.
          </p>
        </FadeInView>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-border mb-3 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full flex justify-between items-center p-5 text-left cursor-pointer hover:bg-surface-alt/50 transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-text-primary pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-text-secondary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-text-secondary text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <FadeInView delay={0.2}>
          <div className="bg-primary rounded-2xl p-8 text-center text-white max-w-3xl mx-auto mt-12 shadow-xl shadow-primary/10">
            <h3 className="font-kaisei text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-white/80 mb-8">Our team is here to help you get started.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/support" className="bg-white text-primary rounded-full px-6 py-3 font-medium hover:bg-white/90 transition shadow-sm w-full sm:w-auto text-center">
                Contact Support
              </Link>

            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};

export default FAQ;
