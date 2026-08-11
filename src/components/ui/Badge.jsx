import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Badge;
