import React from 'react';
import { motion } from 'framer-motion';

/**
 * A container that staggers the animations of its children.
 * Children should be motion components with their own variants to animate when this container becomes visible.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to stagger
 * @param {string} [props.className] - Additional CSS classes
 * @param {number} [props.staggerDelay=0.15] - Delay between each child's animation
 * @param {number} [props.delayStart=0] - Delay before the stagger sequence starts
 */
const StaggerContainer = ({ children, className = '', staggerDelay = 0.15, delayStart = 0 }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayStart
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
