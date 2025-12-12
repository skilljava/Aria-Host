import React from 'react';
import { motion } from 'framer-motion';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -15, filter: 'blur(5px)' }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for very smooth "apple-like" motion
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;