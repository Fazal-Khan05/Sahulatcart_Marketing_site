import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Settings, ShieldCheck, TrendingUp } from 'lucide-react';
import FadeInView from '../animations/FadeInView';

const Counter = ({ from, to }) => {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      let current = from;
      const step = Math.ceil((to - from) / 40);
      const timer = setInterval(() => {
        current += step;
        if (current >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, from, to]);

  return <span ref={ref}>{count}</span>;
};

const RuleEngine = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column (Mockup) */}
        <FadeInView direction="left" className="relative h-full flex flex-col justify-center items-center lg:items-start py-8">
          <div className="bg-white rounded-2xl shadow-xl border border-border p-6 max-w-md w-full relative z-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-wider font-bold text-text-primary">
                Rule Engine
              </span>
              <Settings className="w-4 h-4 text-text-secondary" />
            </div>
            
            <div className="border-b border-border mb-4" />
            
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-text-primary text-sm">Maximum Discount</span>
                <span className="bg-primary-light text-primary text-[10px] px-2 py-0.5 rounded-full font-medium">
                  Active
                </span>
              </div>
              <p className="text-sm text-text-secondary">
                If customer asks for "final price", offer up to 10% off on orders above Rs. 3,000.
              </p>
            </div>
            
            <div className="border-b border-border mb-4" />
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-text-primary text-sm">Out of Stock Behavior</span>
                <span className="bg-surface-alt text-text-secondary text-[10px] px-2 py-0.5 rounded-full font-medium">
                  Default
                </span>
              </div>
              <p className="text-sm text-text-secondary">
                If requested variant is unavailable, suggest alternatives in same category.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-4 lg:bottom-12 -left-4 lg:-left-12 z-20">
            <div className="bg-primary text-white rounded-2xl px-6 py-4 inline-flex items-center gap-3 shadow-lg">
              <div className="font-bold text-3xl">
                +<Counter from={0} to={42} />%
              </div>
              <div className="text-[10px] uppercase tracking-wider font-semibold max-w-[80px] leading-tight">
                Conversion Rate
              </div>
            </div>
          </div>
        </FadeInView>

        {/* Right Column */}
        <FadeInView direction="right">
          <h2 className="font-kaisei text-4xl font-bold text-text-primary leading-tight mb-6">
            You set the boundaries. AI navigates the conversation.
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            Don't lose a sale over a few rupees. Sahulat AI employs smart negotiation tactics within parameters you strictly control. It acts as a polite, patient salesperson who knows exactly when to offer a deal to close the cart.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-text-primary block mb-1">Dynamic Pricing Guards</span>
                <span className="text-text-secondary text-sm">
                  Protect margins while setting floor prices for specific SKUs.
                </span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <TrendingUp className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-text-primary block mb-1">Volume Incentives</span>
                <span className="text-text-secondary text-sm">
                  AI automatically constructs bundles to increase Average Order Value.
                </span>
              </div>
            </div>
          </div>
        </FadeInView>
        
      </div>
    </section>
  );
};

export default RuleEngine;
