import { motion } from 'motion/react';
import { Mail, Instagram, Phone, MapPin, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  const contacts = [
    { name: "Parth Desai", phone: "9824095558", role: "Organizer" },
    { name: "Devam Patel", phone: "7016611266", role: "Organizer" },
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 tracking-[0.4em] mb-4">
             <MapPin className="h-4 w-4" />
             Communication Channels
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 uppercase leading-[0.9] tracking-tighter mb-8">
            CONTACT &<br />CONNECT
          </h1>
          <p className="text-sm text-slate-500 font-serif italic max-w-xl border-l-2 border-slate-200 pl-6 leading-relaxed">
            Have questions about registrations, workshop details, or sponsorships? Our team is available for any queries you may have.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-20">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-full grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.a
                href="mailto:beatsconcourse@gmail.com"
                whileHover={{ y: -5 }}
                className="flex flex-col gap-6 p-10 rounded-[2.5rem] bg-white border border-slate-200 group transition-all hover:border-medical-blue hover:shadow-xl hover:shadow-blue-900/5"
            >
                <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-medical-light group-hover:text-medical-blue transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-medical-blue">Email ID</p>
                  <p className="text-sm font-bold font-mono">beatsconcourse@gmail.com</p>
                </div>
            </motion.a>

            <motion.a
                href="https://instagram.com/beatsconcourse"
                target="_blank"
                rel="no-referrer"
                whileHover={{ y: -5 }}
                className="flex flex-col gap-6 p-10 rounded-[2.5rem] bg-white border border-slate-200 group transition-all hover:border-[#E1306C] hover:shadow-xl hover:shadow-pink-900/5"
            >
                <div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-pink-50 group-hover:text-[#E1306C] transition-colors">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-[#E1306C]">Follow Us</p>
                  <p className="text-sm font-bold font-mono">@beatsconcourse</p>
                </div>
            </motion.a>

            <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white flex flex-col justify-center">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Support Professionals</p>
                <div className="space-y-6">
                    {contacts.map((c) => (
                    <div key={c.name} className="flex flex-col gap-0.5">
                        <p className="text-lg font-black text-slate-100 tracking-tight">{c.name}</p>
                        <a href={`tel:${c.phone}`} className="text-xs font-bold text-blue-400 flex items-center gap-2 mt-1 hover:underline">
                        <Phone className="h-3 w-3" />
                        {c.phone}
                        </a>
                    </div>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-12 pb-32">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                    <h2 className="text-xs font-black uppercase text-slate-400 tracking-[0.4em] mb-4">Location</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">ASMITA BHAVAN,<br/>AHMEDABAD.</h3>
                </div>
                <a 
                  href="https://maps.app.goo.gl/aDGjg7RiPuaSLirH9?g_st=aw" 
                  target="_blank" 
                  rel="no-referrer"
                  className="flex items-center gap-3 px-8 py-4 bg-medical-blue text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
                >
                    <ExternalLink className="h-4 w-4" />
                    Open in Google Maps
                </a>
            </div>
            
            <div className="aspect-video w-full rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl shadow-blue-900/10 grayscale contrast-110 active:grayscale-0 transition-all duration-700">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2936279930777!2d72.5936!3d23.0494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f55928f559%3A0x6b86fb2756ba8597!2sB.J.%20Medical%20College!5e0!3m2!1sen!2sin!4v1714248000000!5m2!1sen!2sin"
                    className="w-full h-full border-none"
                    allowFullScreen
                    loading="lazy"
                    title="BJ Medical College Map"
                />
            </div>
        </section>
      </div>
    </PageTransition>
  );
}
