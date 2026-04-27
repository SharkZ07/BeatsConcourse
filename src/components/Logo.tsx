import { motion } from 'motion/react';

export default function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden bg-white ${className}`}
    >
      <img 
        src="https://i.imgur.com/W9yGtjo.png" 
        alt="Concourse Logo" 
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}
