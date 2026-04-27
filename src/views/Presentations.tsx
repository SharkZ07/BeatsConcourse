import { motion } from 'motion/react';
import { Microscope } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Presentations() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           className="h-24 w-24 rounded-full bg-medical-light flex items-center justify-center mb-12"
        >
          <Microscope className="h-10 w-10 text-medical-blue" />
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-300 uppercase tracking-tight mb-4">
          Poster & Paper
        </h1>
        
        <motion.div
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="text-5xl md:text-[12rem] font-black text-medical-blue tracking-tighter leading-none"
        >
          SOON
        </motion.div>
        
        <div className="mt-12 max-w-lg text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 border-t border-slate-200 pt-8">
          Submission Portal Under Development
        </div>
        
        <div className="mt-20 flex gap-4">
            {[1, 2, 3].map(i => (
                <motion.div 
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                    className="h-3 w-3 rounded-full bg-medical-blue/10"
                />
            ))}
        </div>
      </div>
    </PageTransition>
  );
}
