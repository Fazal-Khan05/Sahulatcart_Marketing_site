import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ShoppingBag, RefreshCw, Check, Sparkles, X, CheckCircle2 } from 'lucide-react';
import FadeInView from '../animations/FadeInView';

const chatContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2
    }
  }
};

const chatBubbleVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }
};

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeInView direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary font-medium text-sm mb-6 border border-primary/20 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              🎯 TAILORED SOLUTIONS
            </div>
            <h2 className="font-kaisei text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Built for the way modern merchants sell.
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              Whether you sell on WhatsApp, Shopify, or Instagram — Sahulatcart adapts to your workflow.
            </p>
          </FadeInView>
        </div>

        {/* Card 1: WhatsApp Sellers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          {/* Left Text */}
          <div className="order-2 lg:order-1">
            <FadeInView direction="left">
              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6 shadow-sm border border-green-200">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="font-kaisei text-3xl font-bold text-text-primary mb-4">
                WhatsApp Commerce
              </h3>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Turn your WhatsApp into a 24/7 automated sales channel. Our AI handles inquiries in Roman Urdu, English, and local slang — while you sleep.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 p-5 rounded-2xl bg-red-50 border border-red-100">
                  <div className="flex-shrink-0 mt-1">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-1">Without Sahulatcart</h4>
                    <p className="text-red-700">Missed messages at 2 AM, lost sales, manual order tracking.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-5 rounded-2xl bg-green-50 border border-green-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles className="w-16 h-16 text-green-600" />
                  </div>
                  <div className="flex-shrink-0 mt-1 relative z-10">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-semibold text-green-900 mb-1">With Sahulatcart</h4>
                    <p className="text-green-800">AI auto-replies instantly, negotiates smartly, confirms orders automatically.</p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Right Visual: WhatsApp Mockup */}
          <div className="order-1 lg:order-2">
            <FadeInView direction="right">
              <div className="bg-surface-alt rounded-[2.5rem] p-3 max-w-sm mx-auto shadow-2xl border-4 border-white ring-1 ring-border relative">
                <div className="bg-[#EFEAE2] rounded-[2rem] overflow-hidden relative shadow-inner h-[500px] flex flex-col">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3 shadow-md z-10">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex flex-shrink-0 items-center justify-center overflow-hidden border border-white/30">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Sahulat AI</div>
                      <div className="text-xs text-white/80">online</div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="p-4 flex-1 flex flex-col justify-end">
                    <motion.div 
                      className="space-y-4"
                      variants={chatContainerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      {/* Customer Msg */}
                      <motion.div variants={chatBubbleVariants} className="flex justify-end">
                        <div className="bg-[#E2F7CB] p-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%] text-sm text-gray-800">
                          Salam, is this available in blue?
                          <div className="text-[10px] text-gray-500 text-right mt-1">10:42 PM</div>
                        </div>
                      </motion.div>

                      {/* AI Msg */}
                      <motion.div variants={chatBubbleVariants} className="flex justify-start">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm max-w-[90%] text-sm text-gray-800 border border-gray-100">
                          Wa alaikum salam! Yes, blue color available hai. Size select karein:
                          <div className="flex gap-2 mt-3 mb-1">
                            {['S', 'M', 'L', 'XL'].map((size) => (
                              <button key={size} className="px-3 py-1.5 rounded-full border border-primary text-primary text-xs font-medium hover:bg-primary hover:text-white transition-colors bg-primary-light/30">
                                {size}
                              </button>
                            ))}
                          </div>
                          <div className="text-[10px] text-gray-400 text-right mt-1">10:42 PM</div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Input area */}
                  <div className="bg-[#F0F0F0] p-3 flex items-center gap-2">
                    <div className="bg-white rounded-full flex-1 h-10 px-4 flex items-center text-gray-400 text-sm shadow-sm">
                      Type a message
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center shadow-sm text-white flex-shrink-0">
                      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>

        {/* Card 2: Shopify Merchants */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Visual: Shopify Dashboard */}
          <div className="order-1">
            <FadeInView direction="left">
              <div className="bg-white rounded-2xl shadow-2xl border border-border p-6 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary-light rounded-lg">
                      <ShoppingBag className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold text-text-primary">Shopify Sync</span>
                  </div>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <RefreshCw className="w-5 h-5 text-text-secondary" />
                  </motion.div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-surface rounded-xl border border-border">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-primary mb-1"
                    >
                      1,247
                    </motion.div>
                    <div className="text-xs text-text-secondary font-medium uppercase tracking-wider">Products</div>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-border">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-bold text-primary mb-1"
                    >
                      98.5%
                    </motion.div>
                    <div className="text-xs text-text-secondary font-medium uppercase tracking-wider">Sync Rate</div>
                  </div>
                  <div className="p-4 bg-surface rounded-xl border border-border flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="text-sm font-bold text-text-primary">24/7</span>
                    </div>
                    <div className="text-xs text-text-secondary font-medium uppercase tracking-wider">Active</div>
                  </div>
                </div>

                {/* Progress Visualization */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-medium text-text-secondary mb-1">
                    <span>Recent Sync Activity</span>
                    <span className="text-primary">Live</span>
                  </div>
                  {[85, 100, 65, 90, 45, 100, 75, 100, 95].map((height, i) => (
                    <div key={i} className="inline-block w-[8%] mx-[1.5%] h-16 bg-surface rounded-t-md relative overflow-hidden group-hover:bg-surface-alt transition-colors">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                        className="absolute bottom-0 w-full bg-primary/20 rounded-t-md"
                      >
                        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-primary/80 to-primary/40 rounded-t-md opacity-80" />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Right Text */}
          <div className="order-2">
            <FadeInView direction="right">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 shadow-sm border border-purple-200">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="font-kaisei text-3xl font-bold text-text-primary mb-4">
                Shopify Integration
              </h3>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Two-way product sync, automated inventory updates, and local logistics integration. COD verification built-in.
              </p>

              <ul className="space-y-4">
                {[
                  'Real-time inventory sync',
                  'COD verification & fraud detection',
                  'TCS, Leopards, Trax integration',
                  'Automatic order creation'
                ].map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex items-center gap-3 text-text-primary font-medium"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </FadeInView>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Solutions;
