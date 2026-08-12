import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageCircle, Shield, BarChart3, Sparkles, Check, ShoppingBag } from 'lucide-react';
import FadeInView from '../animations/FadeInView';
import StaggerContainer from '../animations/StaggerContainer';

const AISalesperson = () => {
  const chatContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.2,
      },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const typingVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        delay: 4.5, // Appears after all messages
        duration: 0.5 
      } 
    }
  };

  return (
    <section id="product" className="py-24 bg-surface relative overflow-hidden">
      {/* Subtle Background Curves */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 w-full h-full object-cover">
          <path d="M0 200C240 100 480 300 720 250C960 200 1200 100 1440 150V800H0V200Z" fill="currentColor" className="text-primary" />
          <path d="M0 400C240 450 480 350 720 400C960 450 1200 300 1440 350V800H0V400Z" fill="currentColor" className="text-primary-dark" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeInView className="text-center mb-16">
          <div className="inline-flex relative mb-6">
            <motion.div 
              className="absolute inset-0 rounded-full bg-primary/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center relative z-10 text-primary">
              <Bot size={32} />
            </div>
          </div>
          <h2 className="font-kaisei text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            AI Salesperson
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Your 24/7 intelligent agent that talks to customers in their preferred language, negotiates smartly, and closes deals automatically on WhatsApp.
          </p>
        </FadeInView>

        {/* Row 1: Live Chat Demo */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="bg-white rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
            {/* Window Chrome */}
            <div className="bg-surface-alt px-4 py-3 flex items-center gap-4 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-sm font-medium text-text-primary flex-1 text-center pr-8">
                WhatsApp Business — Sahulat AI
              </div>
            </div>

            {/* Chat Content */}
            <div className="p-6 bg-[#efeae2]">
              <motion.div 
                variants={chatContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-4"
              >
                {/* Message 1: Customer */}
                <motion.div variants={messageVariants} className="self-end max-w-[80%]">
                  <div className="bg-[#d9fdd3] text-[#111b21] rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm text-sm">
                    Yeh bag available hai? Price kya hai?
                  </div>
                </motion.div>

                {/* Message 2: AI */}
                <motion.div variants={messageVariants} className="self-start max-w-[85%]">
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white mb-1 shadow-sm">
                      <Sparkles size={12} />
                    </div>
                    <div className="bg-white text-[#111b21] rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm text-sm">
                      Jee bilkul! Yeh Premium Leather Bag hai. Price Rs. 3,200 hai. Free delivery bhi available hai!
                    </div>
                  </div>
                </motion.div>

                {/* Message 3: Customer */}
                <motion.div variants={messageVariants} className="self-end max-w-[80%]">
                  <div className="bg-[#d9fdd3] text-[#111b21] rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm text-sm">
                    Thora discount milega? 2,800 mein de do
                  </div>
                </motion.div>

                {/* Message 4: AI */}
                <motion.div variants={messageVariants} className="self-start max-w-[85%]">
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white mb-1 shadow-sm">
                      <Sparkles size={12} />
                    </div>
                    <div className="bg-white text-[#111b21] rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm text-sm">
                      Sir aapke liye special price Rs. 2,950 kar deta hun with free shipping. Best deal hai!
                    </div>
                  </div>
                </motion.div>

                {/* Message 5: Product Card */}
                <motion.div variants={messageVariants} className="self-start ml-8 max-w-[240px] w-full">
                  <div className="bg-white shadow-md rounded-xl p-3 border border-border/40">
                    <div className="h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mb-3">
                      <ShoppingBag className="text-amber-600" size={32} opacity={0.7} />
                    </div>
                    <h4 className="font-medium text-sm text-text-primary mb-1">Premium Leather Bag</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold">Rs. 2,950</span>
                      <span className="text-xs text-text-secondary line-through">Rs. 3,200</span>
                    </div>
                  </div>
                </motion.div>

                {/* Message 6: Customer Confirmation */}
                <motion.div variants={messageVariants} className="self-end max-w-[80%]">
                  <div className="bg-[#d9fdd3] text-[#111b21] rounded-2xl rounded-tr-sm px-4 py-2 shadow-sm text-sm">
                    Bhai done kar dain ✅
                  </div>
                </motion.div>

                {/* Message 7: AI Receipt */}
                <motion.div variants={messageVariants} className="self-start max-w-[85%]">
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-white mb-1 shadow-sm">
                      <Sparkles size={12} />
                    </div>
                    <div>
                      <div className="bg-white text-[#111b21] rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm text-sm mb-2">
                        Order confirmed! Yeh raha aapka receipt 👇
                      </div>
                      {/* PDF Receipt Card */}
                      <div className="bg-white rounded-xl shadow-md border border-border/40 overflow-hidden">
                        <div className="bg-red-50 px-3 py-2.5 flex items-center gap-3">
                          <div className="w-9 h-9 bg-red-500 rounded-lg flex items-center justify-center shrink-0">
                            <span className="text-white text-[10px] font-bold">PDF</span>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-text-primary">Invoice_#SC-7263.pdf</p>
                            <p className="text-[10px] text-text-secondary">Rs. 2,950 • 1 item</p>
                          </div>
                        </div>
                        <div className="px-3 py-1.5 border-t border-border/50 flex items-center justify-between">
                          <span className="text-[10px] text-text-secondary">Generated by Sahulat AI</span>
                          <span className="text-[10px] text-primary font-medium">Download ↓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Message 8: Order Confirmed */}
                <motion.div variants={messageVariants} className="self-center mt-2">
                  <div className="bg-primary text-white text-xs font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Check size={14} />
                    Order Confirmed
                  </div>
                </motion.div>

                {/* Typing Indicator */}
                <motion.div variants={typingVariants} className="self-start ml-8 mt-2">
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm flex gap-1 items-center h-8">
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-text-secondary/50" />
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-text-secondary/50" />
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-text-secondary/50" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Row 2: Feature Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white rounded-2xl p-7 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-5">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Contextual Replies</h3>
            <p className="text-text-secondary text-sm flex-grow">
              Understands natural language and intent, allowing customers to chat in their local languages and dialects fluidly.
            </p>
            
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex flex-col gap-2">
                <div className="self-end bg-surface-alt rounded-xl rounded-tr-sm px-3 py-1.5 text-[11px] text-text-secondary">
                  Yeh kitne ka hai?
                </div>
                <div className="self-start bg-primary-light rounded-xl rounded-tl-sm px-3 py-1.5 text-[11px] text-primary font-medium">
                  Rs. 2,500 with free delivery! 🚚
                </div>
                <div className="self-end bg-surface-alt rounded-xl rounded-tr-sm px-3 py-1.5 text-[11px] text-text-secondary">
                  Sahi hai, order kar do
                </div>
              </div>
              <div className="mt-3 text-[10px] text-text-secondary font-medium tracking-wide uppercase">
                Roman Urdu • English • Punjabi
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white rounded-2xl p-7 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-5">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Smart Negotiation</h3>
            <p className="text-text-secondary text-sm flex-grow">
              Automatically negotiates with customers within your predefined margin guardrails to maximize conversion without losing profit.
            </p>
            
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex justify-between text-xs text-text-secondary mb-2">
                <span>Listed: Rs. 5,000</span>
                <span className="text-primary font-bold">Final: Rs. 4,200</span>
              </div>
              <div className="h-2 bg-surface-alt rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: '84%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }} 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-light to-primary rounded-full" 
                />
              </div>
              <div className="mt-3 flex items-center gap-1 text-[10px] text-primary font-medium">
                <Check size={12} /> Margin Protected
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white rounded-2xl p-7 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-5">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-3">Product Intelligence</h3>
            <p className="text-text-secondary text-sm flex-grow">
              Reads your inventory in real-time. Suggests relevant cross-sells and alternative products when items are out of stock.
            </p>
            
            <div className="mt-6 pt-6 border-t border-border/50 flex flex-col justify-end h-[100px]">
              <div className="flex items-end gap-2 h-12 mb-3">
                <motion.div initial={{ height: 0 }} whileInView={{ height: '40%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="flex-1 bg-primary-light rounded-t-sm" />
                <motion.div initial={{ height: 0 }} whileInView={{ height: '70%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="flex-1 bg-accent rounded-t-sm" />
                <motion.div initial={{ height: 0 }} whileInView={{ height: '55%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="flex-1 bg-primary rounded-t-sm" />
                <motion.div initial={{ height: 0 }} whileInView={{ height: '85%' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.7 }} className="flex-1 bg-primary-dark rounded-t-sm" />
              </div>
              <div className="text-[10px] text-text-secondary font-medium tracking-wide uppercase text-center">
                Inventory Sync • Cross-sells • Upsells
              </div>
            </div>
          </motion.div>

        </StaggerContainer>
      </div>
    </section>
  );
};

export default AISalesperson;
