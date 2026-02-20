import { motion } from "framer-motion";
import { Send, Instagram, Facebook, Youtube, Mail, Sparkles, MapPin, Calendar, Heart, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const ContactSection = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();
  const isHi = lang === "hi";

  const labels = {
    title: isHi ? "आमंत्रण एवं संपर्क" : "Invite & Contact",
    subtitle: isHi ? "जुड़ें हमारे साथ" : "Get In Touch",
  };

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/mahanagarmela", color: "hover:bg-[#1877F2]" },
    { icon: Instagram, href: "https://www.instagram.com/mahanagarmela", color: "hover:bg-[#E4405F]" },
    { icon: FaXTwitter, href: "https://x.com/mahanagarmela", color: "hover:bg-black" },
    { icon: Youtube, href: "https://youtube.com/@mahanagarmela", color: "hover:bg-[#FF0000]" },
  ];

  return (
    <section id="contact" className="py-24 bg-[#fcfcfd] relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* वापस आ गई आपकी हेडिंग! */}
        <SectionHeading subtitle={labels.subtitle} title={labels.title} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">

          {/* LEFT: THE INVITATION MESSAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 flex flex-col justify-between p-10 md:p-14 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Light */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-primary mb-6">
                <Heart size={20} fill="currentColor" />
                <span className="text-xs font-black uppercase tracking-[0.3em]">{isHi ? "सप्रेम भेंट" : "Hearty Welcome"}</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-[Gotu] font-bold leading-tight mb-8">
                {isHi ? "सांस्कृतिक उत्सव का हिस्सा बनें" : "Be Part of the Culture"}
              </h3>

              <p className="text-white/60 text-lg leading-relaxed italic border-l-2 border-primary/30 pl-6">
                {isHi
                  ? "आइए, इस सांस्कृतिक उत्सव का हिस्सा बनें और परिवार सहित आनंद, आस्था और मनोरंजन से भरपूर इस मेले में सहभागिता करें।"
                  : "Experience joy, faith, and entertainment with your family at this grand mela."}
              </p>
            </div>

            <div className="relative z-10 mt-12 grid grid-cols-1 gap-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <MapPin className="text-primary" />
                <span className="font-bold">{isHi ? "दशहरा मैदान, भोपाल" : "Dussehra Maidan, Bhopal"}</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <Calendar className="text-green-500" />
                <span className="font-bold">19 March — 18 April 2026</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: THE MINIMAL FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <p className="text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">{isHi ? "पूरा नाम" : "Full Name"}</p>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none font-medium transition-all" placeholder="Rahul Singh" />
                </div>
                <div className="relative group">
                  <p className="text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">{isHi ? "मोबाइल" : "Mobile"}</p>
                  <input type="tel" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none font-medium transition-all" placeholder="+91 00000-00000" />
                </div>
              </div>

              <div className="relative group">
                <p className="text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">{isHi ? "ईमेल पता" : "Email Address"}</p>
                <input type="email" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none font-medium transition-all" placeholder="rahul@example.com" />
              </div>

              <div className="relative group">
                <p className="text-[10px] font-black uppercase text-slate-400 mb-2 tracking-widest">{isHi ? "आपका संदेश" : "Your Message"}</p>
                <textarea rows={4} className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none font-medium transition-all resize-none" placeholder={isHi ? "अपनी बात यहाँ लिखें..." : "How can we help?"} />
              </div>

              <button className="w-full h-16 bg-slate-900 hover:bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-4 transition-all duration-300 group shadow-lg shadow-slate-200">
                <span className="uppercase tracking-[0.2em] text-sm">{isHi ? "संदेश भेजें" : "Send Message"}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Social Icons Footer */}
            <div className="mt-12 pt-8 border-t border-slate-50 flex flex-wrap justify-between items-center gap-6">
              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`h-10 w-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 ${social.color} hover:text-white transition-all`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>

              <a href="mailto:mmusbhopal@gmail.com" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
                <Mail size={16} /> mmusbhopal@gmail.com
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;