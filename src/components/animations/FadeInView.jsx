'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * A scroll-triggered fade-in animation wrapper.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elements to animate
 * @param {string} [props.className] - Additional CSS classes
 * @param {'up' | 'down' | 'left' | 'right'} [props.direction='up'] - Direction to fade in from
 * @param {number} [props.delay=0] - Delay before animation starts (seconds)
 * @param {number} [props.duration=0.6] - Duration of the animation (seconds)
 */
const FadeInView = ({ children, className = '', direction = 'up', delay = 0, duration = 0.6 }) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up': return { y: 40, x: 0 };
      case 'down': return { y: -40, x: 0 };
      case 'left': return { x: -40, y: 0 };
      case 'right': return { x: 40, y: 0 };
      default: return { y: 40, x: 0 };
    }
  };

  const initialOffset = getInitialOffset();

  return (
    <motion.div
      className={className}
      initial={{ ...initialOffset, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
