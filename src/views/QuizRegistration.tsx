import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Users, Calendar, MapPin, ClipboardList, Coins, Gift, ChevronDown, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { cn } from '../lib/utils';

const quizCategories = [
  { name: "Accumbens", type: "Preclinical", color: "bg-blue-50 border-blue-100", textColor: "text-blue-700", sub: "1st Year UG" },
  { name: "Callosum", type: "Paraclinical", color: "bg-indigo-50 border-indigo-100", textColor: "text-indigo-700", sub: "2nd Year UG" },
  { name: "Penumbra", type: "Clinical", color: "bg-slate-100 border-slate-200", textColor: "text-slate-700", sub: "Finals/Interns" },
];

function Section({ icon: Icon, title, children, defaultOpen = false }: { icon: any, title: string, children: React.ReactNode, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm transition-all hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-medical-light group-hover:border-medical-blue/20 transition-colors">
            <Icon className="h-4 w-4 md:h-5 md:w-5 text-medical-blue" />
          </div>
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-900">{title}</h2>
        </div>
        <ChevronDown className={cn("h-4 w-4 md:h-5 md:w-5 text-slate-300 transition-transform duration-300", isOpen && "rotate-180 text-medical-blue")} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 md:px-8 pb-8 md:pb-10 border-t border-slate-100 pt-6 md:pt-8 text-slate-600">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function QuizRegistration() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-20">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 tracking-[0.4em] mb-4">
             <Trophy className="h-4 w-4" />
             Competitive Excellence
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter mb-8">
            THE QUIZ<br />SERIES
          </h1>
          <p className="text-sm text-slate-500 font-serif italic max-w-xl border-l-2 border-slate-200 pl-6 leading-relaxed">
            Test your knowledge, compete with peers, and showcase your diagnostic acumen in Gujarat's most prestigious undergraduate medical quiz.
          </p>
        </header>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {quizCategories.map((q, idx) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-3xl border ${q.color} transition-all hover:shadow-xl hover:-translate-y-1`}
            >
              <p className={`text-[10px] font-black uppercase mb-3 tracking-[0.2em] ${q.textColor}`}>{q.type}</p>
              <h3 className="font-serif text-4xl font-bold text-slate-900 mb-6">{q.name}</h3>
              <p className={`text-[11px] font-black uppercase tracking-widest ${q.textColor} opacity-70`}>{q.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Info Accordions */}
        <div className="space-y-4 mb-32">
          <Section icon={ClipboardList} title="Overview" defaultOpen={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-sm md:text-base leading-[1.8] text-slate-600">
                  The Quiz Series at Concourse 2024 is designed to challenge the limits of clinical and theoretical knowledge. From the intricate systems of Preclinical years to the vast diagnostics of Clinical subjects, every round is a test of speed, accuracy, and team spirit.
                </p>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <p className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-tight leading-snug">Teams can consist of 2 persons or a Lone Wolf option is available.</p>
                   </div>
                   <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <p className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-tight leading-snug">Only intra-college teams are eligible. Cross-college collaborations are strictly prohibited.</p>
                   </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-5 bg-slate-50/50 rounded-xl border border-slate-100">
                   <span className="font-black text-slate-400 uppercase text-[10px] tracking-widest">Format</span>
                   <span className="font-black text-medical-blue text-[11px] uppercase text-right leading-tight">Preliminary Round<br/>(Online)</span>
                </div>
                <div className="flex items-center justify-between p-5 bg-slate-50/50 rounded-xl border border-slate-100">
                   <span className="font-black text-slate-400 uppercase text-[10px] tracking-widest">Format</span>
                   <span className="font-black text-medical-blue text-[11px] uppercase text-right leading-tight">Offline Round<br/>(Campus)</span>
                </div>
              </div>
            </div>
          </Section>

          <Section icon={Users} title="Eligibility">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { year: "1st & 2nd Semester", type: "Preclinical" },
                { year: "3rd, 4th & 5th Semester", type: "Paraclinical" },
                { year: "Final Year / Interns", type: "Clinical" }
              ].map(e => (
                <div key={e.type} className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors">
                  <p className="text-[10px] font-black text-slate-400 uppercase mb-3 tracking-[0.2em]">{e.type}</p>
                  <p className="text-lg font-black text-slate-900 tracking-tight leading-tight">{e.year}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={Calendar} title="Schedule">
            <div className="space-y-12">
              <div className="relative pl-10 border-l-2 border-medical-light py-2">
                  <div className="absolute top-0 -left-[11px] h-5 w-5 rounded-full bg-medical-blue border-4 border-white shadow-sm" />
                  <h4 className="font-black text-slate-900 text-lg mb-2 uppercase tracking-tight">10 MAY: SCREENING ROUND</h4>
                  <p className="text-[10px] text-medical-blue font-bold mb-4 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    Mode: Online | Duration: 45 Minutes
                  </p>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl">All teams must participate through a single device with audio and video enabled at all times. Top 25 teams will be shortlisted for the campus rounds.</p>
              </div>
              
              <div className="relative pl-10 border-l-2 border-medical-light py-2">
                  <div className="absolute top-0 -left-[11px] h-5 w-5 rounded-full bg-medical-blue border-4 border-white shadow-sm" />
                  <h4 className="font-black text-slate-900 text-lg mb-2 uppercase tracking-tight">22 MAY: CAMPUS FINALS</h4>
                  <p className="text-[10px] text-medical-blue font-bold mb-8 uppercase tracking-[0.2em] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    Venue: Asmita Bhavan, Ahmedabad
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                          <p className="font-black text-medical-blue text-[10px] uppercase tracking-widest mb-3">Written</p>
                          <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">30 mins. Selection of Top 18 teams for Pre-Finals.</p>
                      </div>
                      <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                          <p className="font-black text-indigo-600 text-[10px] uppercase tracking-widest mb-3">Pre-Finals</p>
                          <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">Interactive rounds. Top 2 from each pool advance.</p>
                      </div>
                      <div className="p-6 bg-slate-900 rounded-3xl shadow-xl shadow-blue-900/20">
                          <p className="font-black text-blue-400 text-[10px] uppercase tracking-widest mb-3">Grand Finale</p>
                          <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-medium">3.5 hours of high-intensity competitive rounds.</p>
                      </div>
                  </div>
              </div>
            </div>
          </Section>

          <Section icon={Coins} title="Registration Fees">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-8 md:p-10 rounded-[2.5rem] bg-medical-blue text-white overflow-hidden relative group">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-6 bg-blue-300 rounded-full" />
                    <h4 className="text-[10px] font-black uppercase text-blue-200 tracking-[0.2em]">Early Bird (Till 3rd May)</h4>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-blue-500/50 pb-4">
                       <span className="text-[10px] md:text-xs uppercase tracking-widest font-black text-blue-100">Lone Wolf</span>
                       <span className="text-3xl md:text-4xl font-serif font-black tracking-tighter">₹100</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-blue-500/50 pb-4">
                       <span className="text-[10px] md:text-xs uppercase tracking-widest font-black text-blue-100">Team of Two</span>
                       <span className="text-3xl md:text-4xl font-serif font-black tracking-tighter">₹125</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform" />
              </div>

              <div className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900 text-white overflow-hidden relative group">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-6 bg-slate-600 rounded-full" />
                    <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">After 3rd May</h4>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                       <span className="text-[10px] md:text-xs uppercase tracking-widest font-black text-slate-400">Lone Wolf</span>
                       <span className="text-3xl md:text-4xl font-serif font-black tracking-tighter text-white">₹150</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                       <span className="text-[10px] md:text-xs uppercase tracking-widest font-black text-slate-400">Team of Two</span>
                       <span className="text-3xl md:text-4xl font-serif font-black tracking-tighter text-white">₹200</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:scale-110 transition-transform" />
              </div>

              <div className="lg:col-span-2 p-6 md:p-8 rounded-3xl bg-slate-50 border border-slate-200 mt-2">
                 <p className="text-[11px] md:text-sm text-slate-500 font-bold uppercase tracking-widest text-center leading-relaxed">
                   *If delegate wishes to have lunch at the event on the day of offline round, extra charges will apply.
                 </p>
              </div>
            </div>
          </Section>

          <Section icon={Gift} title="Prizes for Winners">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="p-8 border border-yellow-100 bg-yellow-50/30 rounded-[2rem] text-center group hover:bg-yellow-50 transition-colors">
                    <Trophy className="h-10 w-10 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.2em] mb-2">First Position</p>
                    <p className="text-4xl font-serif font-black text-slate-900 tracking-tighter">₹10,000</p>
                 </div>
                 <div className="p-8 border border-slate-100 bg-slate-50/30 rounded-[2rem] text-center group hover:bg-slate-50 transition-colors">
                    <Trophy className="h-10 w-10 text-slate-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Second Position</p>
                    <p className="text-4xl font-serif font-black text-slate-900 tracking-tighter">₹5,000</p>
                 </div>
            </div>
          </Section>
        </div>

        {/* Registration Form Embed */}
        <section className="bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/5">
             <div className="p-12 text-center border-b border-slate-100">
                <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4">Official Registration Portal</h2>
                <p className="text-sm text-slate-400 uppercase font-bold tracking-[0.2em]">Secure your team's entry below</p>
             </div>
             <div className="w-full bg-white min-h-[800px] flex flex-col items-center justify-center relative">
                  <iframe 
                    src="https://tally.so/r/81JL2k" 
                    className="w-full h-[800px] border-none" 
                    title="Concourse Quiz Registration"
                    allowFullScreen
                  />
             </div>
        </section>
      </div>
    </PageTransition>
  );
}
