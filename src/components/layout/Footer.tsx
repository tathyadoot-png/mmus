import { ArrowUpRight, Heart, MapPin, Mail, Phone, Calendar } from "lucide-react";
import logo2 from "@/assets/SociyoLogo.png"; // आपकी एजेंसी का लोगो
import type { Lang } from "@/layouts/MainLayout";

const Footer = ({ lang }: { lang: Lang }) => {
  const isHi = lang === "hi";

  const navLinks = [
    { label: isHi ? "मुख्य पृष्ठ" : "Home", path: "#home" },
    { label: isHi ? "हमारे बारे में" : "About", path: "#about" },
    { label: isHi ? "सांस्कृतिक" : "Cultural", path: "#cultural" },
    { label: isHi ? "विशेषताएँ" : "Highlights", path: "#features" },
    { label: isHi ? "संपर्क" : "Contact", path: "#contact" },
  ];

  return (
    <footer className="relative bg-[#fffdfa] pt-20 overflow-hidden border-t border-orange-100">
      {/* Top Gradient Line (Logo Colors) */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-700 via-orange-500 to-green-600" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-16">
          
          {/* 1. Brand Section */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter">
                {isHi ? "महानगर मेला" : "MAHANAGAR MELA"}
              </h2>
              <p className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.3em] mt-1">
                {isHi ? "उत्सव समिति भोपाल" : "Utsav Samiti Bhopal"}
              </p>
            </div>
            <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-sm mx-auto lg:mx-0">
              {isHi 
                ? "भोपाल की समृद्ध सांस्कृतिक विरासत और व्यापारिक परंपरा का एक अद्भुत संगम। आइए, इस उत्सव का हिस्सा बनें।" 
                : "A grand confluence of Bhopal's rich cultural heritage and trading traditions. Come, be a part of this celebration."}
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col items-center justify-center space-y-6">
            <h3 className="text-xs font-black text-blue-900 uppercase tracking-widest underline decoration-orange-500 decoration-2 underline-offset-8">
              {isHi ? "त्वरित संपर्क" : "Quick Links"}
            </h3>
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {navLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.path} 
                  className="text-[11px] font-black text-slate-500 hover:text-blue-900 transition-colors uppercase group relative"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* 3. Venue Info */}
          <div className="bg-blue-50/50 p-6 rounded-3xl space-y-4 border border-blue-100/50">
            <div className="flex items-center gap-4 text-blue-900">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-orange-600">
                <MapPin size={18} />
              </div>
              <p className="text-xs font-bold uppercase tracking-tight">
                {isHi ? "दशहरा मैदान, टी.टी. नगर, भोपाल" : "Dussehra Maidan, T.T. Nagar, Bhopal"}
              </p>
            </div>
            <div className="flex items-center gap-4 text-blue-900">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-600">
                <Calendar size={18} />
              </div>
              <p className="text-xs font-bold uppercase tracking-tight">
                {isHi ? "19 मार्च - 18 अप्रैल 2026" : "19 March - 18 April 2026"}
              </p>
            </div>
          </div>
        </div>

        {/* Agency Bar - The "Mela" Way */}
        <div className="mb-10 rounded-[2.5rem] bg-blue-900 p-3 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl shadow-blue-900/20">
          <div className="flex items-center gap-6 pl-6 py-2 md:py-0">
            <p className="text-white/30 text-[9px] font-black uppercase hidden lg:block tracking-[0.2em]">
              © {new Date().getFullYear()} Mahanagar Mela Samiti
            </p>
            <div className="hidden lg:block h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-white/80 text-[10px] font-bold uppercase flex items-center gap-2">
                Made with <Heart className="w-3 h-3 text-orange-500 fill-orange-500" /> in Bhopal
              </span>
            </div>
          </div>

          <a 
            href="https://www.inedconetworks.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-between gap-8 bg-white/5 hover:bg-white/10 pl-8 pr-1 py-1 rounded-full border border-white/5 transition-all group"
          >
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Digital Partner</span>
            <div className="flex items-center gap-4">
               <img 
                 src={logo2} 
                 alt="Inedco Networks" 
                 className="h-7 md:h-9 w-auto object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" 
               />
               <div className="h-11 w-11 rounded-full bg-orange-500 flex items-center justify-center group-hover:bg-white transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-blue-900" />
               </div>
            </div>
          </a>
        </div>

        {/* Decorative Bottom */}
        <div className="pb-8 flex flex-col items-center gap-3">
          <div className="flex gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
          </div>
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em]">
           शिक्षा • संस्कृति • रोज़गार
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;