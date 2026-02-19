import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Globe, Menu, X, Home, Users, Info, Sparkles, Image, PhoneCall, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hi from "@/locales/hi";
import en from "@/locales/en";
import logo from "@/assets/logo.jpeg"; // आपका मेला लोगो

gsap.registerPlugin(ScrollTrigger);

type Lang = "hi" | "en";

interface NavbarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const Navbar = ({ lang, setLang }: NavbarProps) => {
  const t = lang === "hi" ? hi : en;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const targetId = id.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  // मेले के अनुसार नए नेविगेशन आइटम्स
  const navItems = [
    { label: lang === "hi" ? "मुख्य पृष्ठ" : "Home", href: "#home", icon: <Home size={18} /> },
    { label: lang === "hi" ? "हमारे बारे में" : "About Us", href: "#about", icon: <Info size={18} /> },
    { label: lang === "hi" ? "विशेषताएँ" : "Highlights", href: "#features", icon: <Sparkles size={18} /> },
    { label: lang === "hi" ? "सांस्कृतिक" : "Cultural", href: "#cultural", icon: <Calendar size={18} /> },
    // { label: lang === "hi" ? "संरक्षक" : "Patrons", href: "#patrons", icon: <Users size={18} /> },
    // { label: lang === "hi" ? "गैलरी" : "Gallery", href: "#gallery", icon: <Image size={18} /> },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-container", {
        y: -100, opacity: 0, duration: 1.2, ease: "expo.out",
      });
      ScrollTrigger.create({
        start: "top -20",
        onUpdate: (self) => {
          if (self.scroll() > 40) setScrolled(true);
          else setScrolled(false);
        },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 z-[100] w-full px-4 py-4 md:py-6 flex justify-center">
      <style>{`
        :root {
          --mela-blue: #0056b3;
          --mela-orange: #f48220;
          --mela-green: #2d8a3c;
        }
      `}</style>
      
      <div 
        className={`nav-container flex items-center justify-between px-5 md:px-8 py-2.5 transition-all duration-500 rounded-full border bg-white/90 backdrop-blur-md shadow-lg ${
          scrolled ? "w-full max-w-[1400px] border-orange-100" : "w-full max-w-[1500px] border-transparent"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer shrink-0">
          <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full border-2 border-[var(--mela-orange)]">
            <img src={logo} alt="Mela Logo" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-black text-[var(--mela-blue)] text-sm md:text-xl uppercase leading-none whitespace-nowrap tracking-tighter">
              {lang === "hi" ? "महानगर मेला" : "Mahanagar Mela"}
            </h1>
            <span className="text-[7px] md:text-[11.5px] font-bold text-[var(--mela-orange)] uppercase mt-0.5 tracking-widest">
              {lang === "hi" ? "उत्सव समिति भोपाल" : "Utsav Samiti Bhopal"}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center justify-center gap-1 mx-4">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-3 py-2 group relative overflow-hidden"
            >
              <span className="relative z-10 text-[14px] font-bold uppercase text-slate-700 group-hover:text-[var(--mela-blue)] transition-colors duration-300">
                {item.label}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--mela-orange)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Contact Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[var(--mela-blue)] to-blue-700 text-white px-5 py-2.5 rounded-full text-[11px] font-bold uppercase hover:shadow-blue-200 hover:scale-105 transition-all shadow-md"
          >
            <PhoneCall size={14} /> {lang === "hi" ? "संपर्क करें" : "Contact"}
          </a>

          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "hi" ? "en" : "hi")}
            className="flex items-center gap-2 px-3 py-2.5 rounded-full bg-slate-50 border border-slate-100 hover:bg-white hover:border-[var(--mela-orange)] transition-all group"
          >
            <Globe size={14} className="text-[var(--mela-orange)]" />
            <span className="text-[11px] font-bold">{lang === "hi" ? "ENG" : "हिन्दी"}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2.5 text-[var(--mela-blue)] bg-slate-50 rounded-full" 
            onClick={() => setIsOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[120] bg-white flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-10">
               <div className="flex items-center gap-3">
                  <img src={logo} className="h-12 w-12 rounded-full border-2 border-[var(--mela-orange)]" />
                  <p className="font-black text-[var(--mela-blue)] uppercase">Mahanagar Mela</p>
               </div>
               <button onClick={() => setIsOpen(false)} className="w-12 h-12 bg-slate-100 text-[var(--mela-blue)] rounded-full flex items-center justify-center">
                  <X size={24} />
               </button>
            </div>

            <div className="flex flex-col gap-3 overflow-y-auto">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 text-slate-700 hover:bg-orange-50 hover:text-[var(--mela-orange)] transition-all"
                >
                  <span className="p-2 bg-white rounded-lg shadow-sm">{item.icon}</span>
                  <span className="text-lg font-bold uppercase tracking-tight">{item.label}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                <button onClick={() => { setLang(lang === "hi" ? "en" : "hi"); setIsOpen(false); }} className="py-4 rounded-2xl bg-slate-100 font-bold uppercase text-xs flex items-center justify-center gap-2">
                  <Globe size={16} /> {lang === "hi" ? "English" : "हिंदी"}
                </button>
                <a 
                  href="#contact" onClick={(e) => scrollToSection(e, "#contact")}
                  className="py-4 rounded-2xl bg-[var(--mela-blue)] text-white font-bold uppercase text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <PhoneCall size={16} /> Contact
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;