'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plug, Package, Settings, Bot, ShoppingCart, Sparkles, BarChart3 } from 'lucide-react';
import FadeInView from '../animations/FadeInView';
import StaggerContainer from '../animations/StaggerContainer';

const steps = [
  { id: 1, title: 'Connect', description: 'Link your WhatsApp Business or Shopify store', icon: <Plug className="w-6 h-6" /> },
  { id: 2, title: 'Add Products', description: 'Upload your catalog or sync from Shopify', icon: <Package className="w-6 h-6" /> },
  { id: 3, title: 'Define Rules', description: 'Set pricing rules, discounts, and auto-responses', icon: <Settings className="w-6 h-6" /> },
  { id: 4, title: 'Let AI Sell', description: 'AI handles conversations, negotiates, and recommends', icon: <Bot className="w-6 h-6" /> },
  { id: 5, title: 'Get Orders', description: 'Orders flow in automatically with full tracking', icon: <ShoppingCart className="w-6 h-6" /> },
  { id: 6, title: 'Dashboard', description: 'Get realtime information in our dashboard', icon: <BarChart3 className="w-6 h-6" /> },
];

export default function HowItWorks() {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true, margin: '-100px 0px' });

  return (
    <section id="how-it-works" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <FadeInView className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <span>⚡ SIMPLE SETUP</span>
          </div>
          <h2 className="font-kaisei text-4xl lg:text-5xl font-bold text-center text-text-primary mb-4">
            From customer message to order — automatically.
          </h2>
          <p className="text-text-secondary text-center max-w-2xl text-lg">
            Get started in under 10 minutes.
          </p>
        </FadeInView>

        {/* Timeline */}
        <div className="relative mb-20 max-w-5xl mx-auto" ref={lineRef}>
          {/* Connecting Line Desktop */}
          <div className="hidden md:block absolute h-0.5 bg-border top-8 left-[10%] right-[10%] z-0">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-primary"
              initial={{ width: 0 }}
              animate={isLineInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>
          
          {/* Connecting Line Mobile */}
          <div className="md:hidden absolute w-0.5 bg-border top-8 bottom-8 left-8 z-0">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-primary"
              initial={{ height: 0 }}
              animate={isLineInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          <StaggerContainer className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id} 
                className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center w-full md:w-48 gap-4 md:gap-0"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-primary/20 relative z-10">
                    {step.icon}
                  </div>
                  {/* Pulsing ring on a specific step */}
                  {index === 3 && (
                     <motion.div 
                       className="absolute inset-0 rounded-full bg-primary"
                       animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                       transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                     />
                  )}
                </div>
                <div className="flex-1 md:mt-4">
                  <h3 className="font-semibold text-lg text-text-primary">{step.id}. {step.title}</h3>
                  <p className="text-sm text-text-secondary mt-1 md:mt-2 md:max-w-[160px] mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* Demo Section */}
        <FadeInView className="bg-white rounded-3xl shadow-xl border border-border/50 p-6 md:p-8 max-w-4xl mx-auto mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side: Chat Mockup */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-xs font-semibold text-primary">Smart Negotiation Active 🟢</span>
              </div>
              
              <div className="bg-surface rounded-2xl p-4 w-5/6 ml-auto rounded-tr-sm shadow-sm border border-border/30">
                <p className="text-sm text-text-primary">Bhai last price kya hai? 🤔</p>
              </div>

              <div className="flex gap-2 w-full mt-4 items-end">
                <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 rounded-tl-sm w-full max-w-[90%] shadow-sm">
                  {/* AI thinking indicator */}
                  <motion.div 
                    className="flex gap-1 mb-2"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, display: 'none' }}
                    transition={{ delay: 2, duration: 0.2 }}
                  >
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                  </motion.div>
                  
                  <motion.p 
                    className="text-sm text-text-primary leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                  >
                    Listed price Rs. 5,000 hai, lekin aaj special offer hai — <span className="font-bold text-primary">Rs. 4,500</span> with free delivery! Aur 2 khareedein to Rs. 8,000 mein.
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Right side: Stat display */}
            <div className="bg-surface-alt rounded-2xl p-6 border border-border flex flex-col justify-center relative overflow-hidden">
               {/* Visual background accents */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
               
               <div className="space-y-6 relative z-10">
                 <div className="flex justify-between items-end border-b border-border/50 pb-4">
                   <div>
                     <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">Listed Price</p>
                     <p className="text-text-secondary line-through text-lg">Rs. 5,000</p>
                   </div>
                 </div>
                 
                 <div className="flex justify-between items-end">
                   <div>
                     <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1 flex items-center gap-1">
                       <Sparkles className="w-3 h-3 text-primary" />
                       AI Offered
                     </p>
                     <p className="text-primary text-3xl md:text-4xl font-bold font-kaisei tracking-tight">Rs. 4,500</p>
                   </div>
                   <div className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-md border border-primary/20 flex items-center gap-1">
                     ✓ Margin Protected
                   </div>
                 </div>

                 <div className="pt-2">
                   {/* Price Bar Visualization */}
                   <div className="h-2 w-full bg-border rounded-full overflow-hidden flex relative">
                     <div className="absolute top-0 bottom-0 left-0 bg-red-500/20 w-1/4"></div>
                     <div className="absolute top-0 bottom-0 left-1/4 bg-primary w-3/4 rounded-full"></div>
                     <motion.div 
                        className="absolute top-1/2 -translate-y-1/2 left-[37.5%] w-3 h-3 bg-white border-2 border-primary rounded-full shadow-sm z-10 -ml-1.5"
                        initial={{ left: '100%' }}
                        animate={{ left: '37.5%' }}
                        transition={{ delay: 2.2, duration: 1, type: 'spring' }}
                     />
                   </div>
                   <div className="flex justify-between items-center mt-2">
                     <p className="text-xs text-red-500 font-medium flex items-center gap-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block"></span>
                       Absolute Minimum: Rs. 4,000
                     </p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
