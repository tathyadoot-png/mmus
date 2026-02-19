import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed  bottom-5 right-6 md:bottom-10 md:right-6 z-[999] group"
        >
          {/* Animated Background Ring (Theme Colors) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0056b3] via-[#f48220] to-[#2d8a3c] blur-sm opacity-40 group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-spin-slow" />
          
          {/* Main Button Body */}
          <div className="relative h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-white shadow-2xl border-2 border-[#f48220]/20 overflow-hidden">
            {/* Hover Color Fill */}
            <div className="absolute inset-0 bg-[#0056b3] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo" />
            
            {/* Icon */}
            <ArrowUp className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-[#0056b3] group-hover:text-white transition-colors duration-300" />
            
            {/* Progress Bar Style (Bottom Accent) */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2d8a3c]" />
          </div>

          {/* Tooltip for Mela Feel */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-blue-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
            ऊपर जाएँ
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;