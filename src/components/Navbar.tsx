import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Registrations', path: '/registrations' },
  { name: 'Quiz', path: '/quiz' },
  { name: 'Presentations', path: '/presentations' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 border-b",
        scrolled ? "bg-white shadow-sm py-3 border-slate-200" : "bg-white border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-4">
          <Logo className="h-10 w-10 md:h-12 md:w-12" />
          <div className="hidden sm:block">
            <h1 className="text-xl md:text-2xl font-black tracking-tight text-slate-900 uppercase leading-none">CONCOURSE</h1>
            <p className="text-[10px] font-medium text-medical-blue tracking-widest uppercase mt-0.5">BJ Medical College, Ahmedabad</p>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "relative text-xs font-bold uppercase tracking-tighter transition-all pb-1 border-b-2",
                isActive ? "border-medical-blue text-slate-900" : "border-transparent text-slate-400 hover:text-slate-900"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => cn(
                    "text-lg font-medium transition-colors py-2",
                    isActive ? "text-medical-blue translate-x-2" : "text-slate-600"
                  )}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
