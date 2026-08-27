import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, MessageSquare, Briefcase, LayoutGrid } from 'lucide-react';

const IntegrationBar = () => {
  const integrations = [
    { icon: ShoppingBag, name: 'Shopify', delay: 0 },
    { icon: MessageSquare, name: 'WhatsApp', delay: 0.2 },
    { icon: Briefcase, name: 'WhatsApp Business', delay: 0.4 },
    { icon: LayoutGrid, name: 'WB Catalog', delay: 0.6 },
  ];

  return (
    <section className="py-16 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-text-secondary mb-8">
          Seamlessly integrates with your ecosystem
        </h3>
        
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {integrations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                className="flex items-center gap-2 text-text-secondary text-lg font-medium opacity-60 hover:opacity-100 transition-opacity"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ 
                    duration: 2 + Math.random(), 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <Icon size={24} />
                </motion.div>
                <span>{item.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IntegrationBar;
