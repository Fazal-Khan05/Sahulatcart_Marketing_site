import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Check } from 'lucide-react';
import ComingSoon from '../ui/ComingSoon';

const FadeInView = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.5, delayChildren: 0.3 } }
  };
  const bubbleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-surface pt-32 pb-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg 
          className="absolute w-full h-full text-primary opacity-10" 
          preserveAspectRatio="none" 
          viewBox="0 0 1440 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-100 400 C 300 200, 600 600, 1500 300" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <path d="M-100 500 C 400 300, 800 700, 1500 400" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <path d="M-100 600 C 500 400, 900 800, 1500 500" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column */}
        <div>
          <FadeInView delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>✦ MEET YOUR NEW AI SALESPERSON</span>
            </div>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h1 className="font-kaisei text-5xl lg:text-6xl font-bold leading-tight text-text-primary mb-6">
              Aap so jao.<br />
              <span className="text-primary italic">AI karega sab kuch.</span>
            </h1>
          </FadeInView>

          <FadeInView delay={0.2}>
            <p className="text-lg text-text-secondary max-w-lg mb-8 leading-relaxed">
              Sahulatcart turns customer conversations into automated sales with AI that answers questions, recommends products, negotiates prices, and helps close orders.
            </p>
          </FadeInView>

          <FadeInView delay={0.3}>
            <div className="flex flex-wrap gap-4 mb-10">
              <motion.button 
                onClick={() => setComingSoonOpen(true)}
                whileHover={{ y: -2 }} 
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-primary text-white rounded-full px-7 py-3.5 font-semibold text-[15px] hover:bg-primary-dark shadow-lg shadow-primary/25 transition-colors cursor-pointer"
              >
                Start Automating <ArrowRight className="w-4 h-4" />
              </motion.button>
              <button 
                onClick={(e) => { e.preventDefault(); document.querySelector('#product')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="flex items-center gap-2 border-2 border-primary text-primary rounded-full px-7 py-3.5 font-semibold text-[15px] hover:bg-primary-light transition-colors cursor-pointer"
              >
                View Demo <Play className="w-4 h-4 fill-current" />
              </button>
            </div>
          </FadeInView>

          <FadeInView delay={0.4}>
            <div className="flex items-center gap-4">
              <div className="flex">
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-gradient-to-tr from-green-400 to-green-600 flex items-center justify-center text-white text-xs font-bold -ml-0">A</div>
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-gradient-to-tr from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold -ml-3">M</div>
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-gradient-to-tr from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-bold -ml-3">S</div>
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary-light text-primary text-xs font-bold flex items-center justify-center -ml-3 z-10">
                  +2k
                </div>
              </div>
              <p className="text-sm text-text-secondary">
                Trusted by 2000+ modern merchants in Pakistan.
              </p>
            </div>
          </FadeInView>
        </div>

        {/* Right Column */}
        <div 
          className="relative w-full h-[600px] flex items-center justify-center lg:justify-end"
          style={{ perspective: '1000px' }}
        >
          <motion.div 
            className="w-full max-w-md bg-transparent"
            style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-5deg) rotateX(2deg)' }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* User message */}
            <motion.div variants={bubbleVariants} className="flex flex-col items-end mb-6">
              <div className="bg-white text-text-primary px-5 py-3.5 rounded-2xl rounded-tr-sm shadow-md max-w-[85%] text-[15px] leading-relaxed">
                Bhai yeh shoes available hain size 42 mein?
              </div>
              <span className="text-xs text-text-secondary mt-1.5 mr-1">10:42 PM</span>
            </motion.div>

            {/* AI Response */}
            <motion.div variants={bubbleVariants} className="flex flex-col items-start mb-6">
              <div className="flex items-center gap-1.5 mb-1.5 ml-1">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary">Sahulat AI</span>
              </div>
              <div className="bg-primary text-white px-5 py-3.5 rounded-2xl rounded-tl-sm shadow-lg shadow-primary/20 max-w-[85%] text-[15px] leading-relaxed">
                Jee sir! Size 42 available hai. Black aur brown color mein. Price Rs. 4,500 hai. Order confirm kar dein?
              </div>
            </motion.div>

            {/* Product Card */}
            <motion.div variants={bubbleVariants} className="ml-8 mb-6 bg-white p-4 rounded-xl shadow-md border border-border/50 max-w-[70%]">
              <div className="flex gap-3 items-center">
                <div className="bg-surface-alt rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                  <span className="text-xl">👞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-text-primary">Premium Oxford Shoes</h4>
                  <p className="text-primary font-bold text-sm">Rs. 4,500</p>
                </div>
              </div>
            </motion.div>

            {/* Customer Confirmation */}
            <motion.div variants={bubbleVariants} className="flex flex-col items-end mb-6">
              <div className="bg-white text-text-primary px-5 py-3.5 rounded-2xl rounded-tr-sm shadow-md max-w-[85%] text-[15px] leading-relaxed">
                Bhai done kar dain ✅
              </div>
              <span className="text-xs text-text-secondary mt-1.5 mr-1">10:44 PM</span>
            </motion.div>

            {/* AI Receipt */}
            <motion.div variants={bubbleVariants} className="flex flex-col items-start mb-6">
              <div className="flex items-center gap-1.5 mb-1.5 ml-1">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-semibold text-primary">Sahulat AI</span>
              </div>
              <div className="bg-primary text-white px-5 py-3 rounded-2xl rounded-tl-sm shadow-lg shadow-primary/20 max-w-[85%] text-[15px] leading-relaxed mb-2">
                Order confirmed! Yeh raha aapka receipt 👇
              </div>
              {/* PDF Receipt Card */}
              <div className="ml-4 bg-white rounded-xl shadow-md border border-border/50 max-w-[75%] overflow-hidden">
                <div className="bg-red-50 px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">PDF</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">Invoice_#SC-4821.pdf</p>
                    <p className="text-xs text-text-secondary">Rs. 4,500 • 1 item</p>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-text-secondary">Generated by Sahulat AI</span>
                  <span className="text-xs text-primary font-medium">Download ↓</span>
                </div>
              </div>
            </motion.div>

            {/* Order Confirmed */}
            <motion.div variants={bubbleVariants} className="flex justify-center mt-6">
              <div className="bg-primary text-white rounded-full px-6 py-2.5 text-center font-medium shadow-lg shadow-primary/20 flex items-center gap-2 text-sm">
                <Check className="w-4 h-4" />
                Order Confirmed
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <ComingSoon
        isOpen={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        type="getStarted"
      />
    </section>
  );
}
