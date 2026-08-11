import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'filled',
  className = '',
  icon,
  ...rest
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-semibold text-[15px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2";
  
  const variants = {
    filled: "bg-primary text-white hover:bg-primary-dark shadow-sm border border-transparent",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon && <span className="flex items-center justify-center">{icon}</span>}
    </motion.button>
  );
};

export default Button;
