import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }}
      className={`bg-white rounded-2xl p-6 border border-border shadow-sm transition-shadow ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </motion.div>
  );
};

export default FeatureCard;
