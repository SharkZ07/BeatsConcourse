import { motion } from 'motion/react';
import { Award, BookOpen, GraduationCap, Microscope, Calendar, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Logo from '../components/Logo';

const highlights = [
  {
    title: "Key Note Lectures",
    description: "Two inspiring sessions by distinguished experts, sharing insights on emerging and future trends in medicine.",
    icon: GraduationCap,
  },
  {
    title: "Workshops",
    description: "Hands on workshops conducted across three days to enhance practical and clinical skills.",
    icon: BookOpen,
  },
  {
    title: "Quizzes",
    description: "Competitive national-level academic quizzes covering pre-clinical, para-clinical and clinical subjects.",
    icon: Award,
  },
  {
    title: "Research Presentation",
    description: "Poster and paper presentations providing a platform to showcase innovation and scientific research.",
    icon: Microscope,
  }
];

const timeline = [
  { time: "8:30 – 9:30 AM", event: "Inauguration Ceremony" },
  { time: "9:30 AM – 12:30 PM", event: "Hands on Workshops" },
  { time: "1:00 – 2:00 PM", event: "Lunch" },
  { time: "2:00 – 2:45 PM", event: "First Lecture" },
  { time: "2:45 – 3:00 PM", event: "Q & A Session" },
  { time: "3:00 – 3:45 PM", event: "Second Lecture" },
  { time: "3:45 – 4:00 PM", event: "Q & A Session" },
  { time: "4:00 – 5:00 PM", event: "Panel Discussion" },
  { time: "5:00 PM Onwards", event: "Preclinical Quiz Final Round" },
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-32 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-10"
        >
          <Logo className="h-40 w-40 md:h-56 md:w-56" />
          <div className="space-y-4">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 uppercase leading-[0.8] md:leading-[0.8]">
              CONCOURSE
            </h1>
            <p className="text-sm md:text-base font-black text-medical-blue tracking-[0.4em] md:tracking-[0.6em] uppercase opacity-80">
              Where splendid minds come together
            </p>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 pb-32 items-stretch">
        
        {/* About & Highlights (Expanded) */}
        <div className="md:col-span-7">
          <section className="bg-white p-8 md:p-16 border border-slate-200 rounded-[2rem] md:rounded-[3rem] shadow-sm h-full flex flex-col justify-center">
            <h2 className="text-[10px] md:text-xs font-black uppercase text-medical-blue mb-6 md:mb-8 tracking-[0.3em]">About Concourse</h2>
            <p className="text-base md:text-2xl leading-relaxed text-slate-800 font-sans font-medium">
              Concourse is the annual UG medical conference of BJMC. It has been one of the pioneering UG medical conferences of Gujarat, consistently hosting interactive hands-on sessions led by highly experienced educators. This aims at bridging the gap between the theoretical knowledge and the real-world applications.
            </p>
            
            <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-slate-100 italic font-serif text-slate-400">
               "Empowering future physicians through hands-on excellence and collective wisdom."
            </div>
          </section>
        </div>
        
        <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
          <section className="bg-slate-900 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-white flex flex-col">
            <h2 className="text-[10px] md:text-xs font-black uppercase text-blue-400 mb-8 md:mb-10 tracking-[0.3em]">Key Highlights</h2>
            <div className="space-y-8 md:space-y-10 flex-1">
              {highlights.map((item, idx) => (
                <div key={item.title} className="flex gap-6 group">
                  <div className="w-10 h-10 shrink-0 bg-blue-600/20 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-black text-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest mb-2 text-slate-100">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 pt-10 border-t border-slate-800">
               <div className="flex items-center gap-3 mb-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.4em]">Bulletin</p>
               </div>
               <p className="text-lg font-serif italic text-blue-400">More details coming soon</p>
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
