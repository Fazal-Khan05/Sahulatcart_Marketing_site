import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * A scroll-linked parallax wrapper component.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elements to apply parallax to
 * @param {string} [props.className] - Additional CSS classes for the outer wrapper
 * @param {number} [props.speed=0.5] - Multiplier for scroll offset
 * @param {'up' | 'down'} [props.direction='up'] - Direction of the parallax movement relative to scroll
 */
const ParallaxLayer = ({ children, className = '', speed = 0.5, direction = 'up' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const distance = speed * 100;
  
  const yValues = direction === 'up' 
    ? [distance, -distance]
    : [-distance, distance];

  const y = useTransform(scrollYProgress, [0, 1], yValues);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxLayer;
