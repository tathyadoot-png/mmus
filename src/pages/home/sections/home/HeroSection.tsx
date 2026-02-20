import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { Calendar, MapPin, Sparkles } from "lucide-react";

// Images
import slid1 from "@/assets/img6.jpg";
import slid15 from "@/assets/img5.jpg";
import slid13 from "@/assets/img7.jpg";

const HeroSection = ({ lang = "hi" }: { lang?: "hi" | "en" }) => {
  const isHi = lang === "hi";
  const images = [slid1, slid15, slid13];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[100dvh] min-h-[580px] w-full overflow-hidden bg-slate-900">
      
      {/* 1. Background Slider with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img src={images[currentIndex]} className="w-full h-full object-cover object-center" alt="Mela" />
            {/* Darker overlays for better text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 md:via-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-5 text-center pt-10 md:pt-0">
        
        {/* Top Floating Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 md:mb-8 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2"
        >
          <Sparkles className="text-[#f48220] w-3 h-3" />
          <span className="text-white text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em]">
            {isHi ? "सबसे भव्य सांस्कृतिक महोत्सव" : "Grand Cultural Festival"}
          </span>
        </motion.div>

        {/* Responsive Typography Area */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl"
        >
          <h2 className="text-[#f48220] font-bold text-xs md:text-2xl italic mb-1 md:mb-8 tracking-wide">
            {isHi ? "शिक्षा • संस्कृति • रोज़गार" : "Education • Culture • Employment"}
          </h2>
          
          <h1 className="text-white text-[clamp(2rem,11vw,6rem)] font-[1000] uppercase leading-[1.05] md:leading-[0.9] tracking-tighter">
            {isHi ? "महानगर" : "MAHANAGAR"}<br className="md:hidden" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f48220] via-white to-[#2d8a3c] drop-shadow-sm">
               {isHi ? " मेला उत्सव" : " MELA UTSAV"}
            </span>
          </h1>
          
          <p className="mt-4 md:mt-8 text-white/80 text-[11px] md:text-lg max-w-md md:max-w-lg mx-auto leading-relaxed px-4 md:px-0">
            {isHi 
              ? "सांस्कृतिक गरिमा, स्वच्छता और सुव्यवस्था का गौरवशाली संगम। परंपरा और आधुनिकता का महाकुंभ।" 
              : "A glorious confluence of culture and order. Join the grand celebration."}
          </p>
        </motion.div>

        {/* Action Buttons Area */}
        <div className="mt-8 md:mt-12 flex flex-col items-center gap-5 w-full max-w-[260px] md:max-w-none">
          <a href="#about" className="w-full md:w-auto">
            <button className="w-full md:w-auto bg-[#f48220] text-white px-8 py-3.5 md:py-4 rounded-xl font-black text-[10px] md:text-sm uppercase flex items-center justify-center gap-3 shadow-[0_10px_30px_-10px_rgba(244,130,32,0.5)] active:scale-95 transition-all">
              {isHi ? "मेला परिचय" : "Explore More"} 
              <HiArrowRight size={18} />
            </button>
          </a>

          {/* Location Badge (Compact for Mobile) */}
          <div className="flex items-center gap-3 bg-black/50 backdrop-blur-xl p-1.5 rounded-2xl pr-5 border border-white/10 shadow-2xl">
            <div className="flex -space-x-2.5">
               <div className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-orange-500 bg-slate-800" />
               <div className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-orange-500 bg-slate-800" />
            </div>
            <div className="text-left">
              <p className="text-[#f48220] text-[7px] md:text-[9px] font-black uppercase leading-none mb-0.5">Venue</p>
              <p className="text-white text-[10px] md:text-xs font-bold leading-none">
                {isHi ? "दशहरा मैदान, भोपाल" : "Bhopal, MP"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Decorative Elements (Hidden on Mobile) */}
<div className="absolute bottom-10 left-0 w-full z-20 px-10 hidden md:block">
  <div className="max-w-7xl mx-auto flex justify-between items-center border-t border-white/10 pt-8">
    <div className="flex gap-12">
      
      {/* Date Section */}
      <div className="flex items-center gap-3">
        <Calendar className="text-[#f48220]" size={18} />
        <div className="text-left">
          <p className="text-white/80 text-[12px] font-black uppercase tracking-tighter">
            {isHi ? "प्रारंभ तिथि" : "Start Date"}
          </p>
          <p className="text-white text-sm font-bold uppercase">
            {isHi ? "19 मार्च 2026" : "19 March 2026"}
          </p>
        </div>
      </div>

      {/* Location Section */}
      <div className="flex items-center gap-3">
        <MapPin className="text-[#2d8a3c]" size={18} />
        <div className="text-left">
          <p className="text-white/80 text-[12px] font-black uppercase tracking-tighter">
            {isHi ? "स्थान" : "Location"}
          </p>
          <p className="text-white text-sm font-bold uppercase">
            {isHi ? "टी.टी. नगर, भोपाल" : "TT Nagar, Bhopal"}
          </p>
        </div>
      </div>

    </div>

    {/* Optional: Right side indicator if you want to add slider dots here too */}
    <div className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
       Mahanagar Mela 2026
    </div>

  </div>
</div>
    </section>
  );
};

export default HeroSection;