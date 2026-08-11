import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const bubbleVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ChatBubble = ({ direction = 'left', children, className = '', type = 'message' }) => {
  const isAI = direction === 'left';

  if (type === 'confirmation') {
    return (
      <motion.div variants={bubbleVariants} className={`flex w-full justify-center my-2 ${className}`}>
        <div className="bg-primary text-white rounded-full px-6 py-2 text-center font-medium shadow-sm text-sm">
          {children}
        </div>
      </motion.div>
    );
  }

  if (type === 'product-card') {
    return (
      <motion.div variants={bubbleVariants} className={`flex w-full my-2 ${isAI ? 'justify-start' : 'justify-end'} ${className}`}>
        <div className="bg-white rounded-2xl p-3 shadow-md border border-border w-64">
          {children}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div variants={bubbleVariants} className={`flex flex-col w-full my-2 ${isAI ? 'items-start' : 'items-end'} ${className}`}>
      {isAI && (
        <div className="flex items-center gap-1.5 mb-1.5 ml-1">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-semibold text-primary">Sahulat AI</span>
        </div>
      )}
      
      <div className={`px-4 py-3 text-[15px] leading-relaxed max-w-[85%] ${
        isAI 
          ? 'bg-primary text-white rounded-2xl rounded-tl-sm shadow-sm' 
          : 'bg-white text-text-primary border border-border rounded-2xl rounded-tr-sm shadow-sm'
      }`}>
        {children}
      </div>

      {!isAI && (
        <span className="text-[10px] text-text-secondary mt-1.5 mr-1 font-medium">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      )}
    </motion.div>
  );
};

export default ChatBubble;
