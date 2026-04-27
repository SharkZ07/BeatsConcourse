import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 px-8 py-3 flex justify-between items-center text-white border-t border-slate-800">
      <p className="text-[9px] uppercase tracking-widest font-black opacity-60">© 2026 BJ Medical College Ahmedabad</p>
      <div className="flex gap-6">
        <span className="text-[9px] font-black text-medical-blue uppercase tracking-widest">Beats Concourse</span>
        <span className="hidden sm:inline text-[9px] font-black text-slate-500 uppercase italic tracking-widest">BJMC Ahmedabad</span>
      </div>
    </footer>
  );
}
