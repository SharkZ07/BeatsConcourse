import { motion } from 'motion/react';
import { Layers, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const day1Workshops = ["Surgery", "Ophthalmology", "Nephrology", "Cardiology", "Orthopedics", "Research", "Oncopathology", "Pulmonology"];
const day2Workshops = ["Psychiatry", "Obstetrics & Gynecology", "Dermatology", "Nuclear Medicine", "Pediatrics", "ENT", "Neurology"];

export default function Registrations() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        <header className="md:col-span-12 mb-12">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-medical-blue tracking-[0.3em] mb-4">
            <Layers className="h-4 w-4 shrink-0" />
            Curated Workshops
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter">
            Register Here
          </h1>
          <p className="mt-8 text-sm text-slate-500 font-serif italic max-w-xl border-l-2 border-slate-200 pl-6">
            Embark on a journey of discovery with our tiered registration plans. Whether you choose to master a single specialty or expand your horizon across multiple disciplines, we have crafted options that respect your pace and passion for medical excellence.
          </p>
        </header>

        <div className="md:col-span-12 space-y-12">
          {/* Day 1 */}
          <section className="bg-white p-8 border border-slate-200 rounded-[2rem] shadow-sm">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">Day 01</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {day1Workshops.map((ws, idx) => (
                <motion.div
                  key={ws}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 group hover:bg-white hover:border-medical-blue transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-medical-blue" />
                  <p className="font-bold text-[11px] uppercase tracking-tight text-slate-600 group-hover:text-slate-900">{ws}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Day 2 */}
          <section className="bg-white p-8 border border-slate-200 rounded-[2rem] shadow-sm">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-400">Day 02</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {day2Workshops.map((ws, idx) => (
                <motion.div
                  key={ws}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 group hover:bg-white hover:border-medical-blue transition-all"
                >
                  <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-medical-blue" />
                  <p className="font-bold text-[11px] uppercase tracking-tight text-slate-600 group-hover:text-slate-900">{ws}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Registrations Starting Soon CTA */}
          <section className="py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl md:text-6xl font-black text-medical-blue tracking-tighter">Registrations Starting Soon</h2>
              <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">Keep your notifications on for the big reveal</p>
              <div className="h-1 w-24 bg-slate-100 mx-auto rounded-full" />
            </motion.div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
}
