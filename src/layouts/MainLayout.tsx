import { useEffect, useState, useMemo, useRef } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import gsap from "gsap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickySocial from "@/components/layout/StickySocial";
import ScrollToTop from "@/components/layout/ScrollToTop";

import melaLogo from "@/assets/logo.jpeg"; 

export type Lang = "hi" | "en";

const MainLayout = () => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "hi";
    return localStorage.getItem("lang") === "en" ? "en" : "hi";
  });

  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isHi = lang === "hi";

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const timer = setTimeout(() => setLoading(false), 3500); // थोड़ा फास्ट अनुभव के लिए

    if (loading) {
      const ctx = gsap.context(() => {
        // लोगो के चारों ओर एक सात्विक आभा (Halo Effect)
        gsap.to(".logo-halo", {
          scale: 1.5,
          opacity: 0,
          duration: 2,
          repeat: -1,
          ease: "power1.out",
        });
      }, containerRef);
      return () => { ctx.revert(); clearTimeout(timer); };
    }
  }, [loading]);

  const splitText = (text: string) => {
    if (!text) return [];
    const segmenter = new (Intl as any).Segmenter(isHi ? "hi" : "en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text)).map((s: any) => s.segment);
  };

  const firstName = useMemo(() => splitText(isHi ? "महानगर" : "MAHANAGAR"), [isHi]);
  const lastName = useMemo(() => splitText(isHi ? "मेला" : "MELA"), [isHi]);

  return (
    <>
      <style>{`
        :root {
          --mela-blue: #0056b3; /* लोगो का नीला रंग */
          --mela-orange: #f48220; /* लोगो का केसरिया रंग */
          --mela-green: #2d8a3c; /* लोगो का हरा रंग */
        }
        .loader-container { 
          background: #ffffff;
          background-image: 
            radial-gradient(circle at 20% 30%, #f4822008 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #0056b308 0%, transparent 50%);
        }
        .text-mela-gradient {
          background: linear-gradient(135deg, var(--mela-blue) 0%, var(--mela-orange) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            ref={containerRef}
            className="fixed inset-0 z-[9999] loader-container flex flex-col items-center justify-center"
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="relative flex flex-col items-center">
              {/* Logo Animation with Halo */}
              <div className="relative mb-12">
                <div className="logo-halo absolute inset-0 bg-orange-100 rounded-full scale-100 opacity-50" />
                <motion.img 
                  src={melaLogo} 
                  className="w-32 h-32 md:w-44 md:h-44 relative z-10 rounded-full drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>

              {/* Text Animation */}
              <div className="text-center space-y-4">
                <h2 className="flex flex-wrap justify-center text-[10vw] md:text-[5vw] font-black tracking-tighter text-mela-gradient">
                  {firstName.map((l, i) => (
                    <motion.span key={i} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: i*0.05}}>{l}</motion.span>
                  ))}
                  <span className="mx-2"></span>
                  {lastName.map((l, i) => (
                    <motion.span key={i} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.4 + (i*0.05)}}>{l}</motion.span>
                  ))}
                </h2>
                
                <motion.div 
                  initial={{ opacity: 0, letterSpacing: "0.2em" }}
                  animate={{ opacity: 1, letterSpacing: "0.5em" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="flex items-center justify-center gap-3 text-[var(--mela-green)] font-bold text-[10px] md:text-sm uppercase"
                >
                  <span className="h-[1px] w-8 bg-[var(--mela-green)] opacity-30" />
                  संस्कृति • समर्पण • संगम
                  <span className="h-[1px] w-8 bg-[var(--mela-green)] opacity-30" />
                </motion.div>
              </div>
            </div>

            {/* Bottom Tagline */}
            <motion.div 
              className="absolute bottom-10 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 2 }}
            >
              <p className="text-[var(--mela-blue)] text-[10px] tracking-[0.3em] font-semibold uppercase">
                महानगर मेला उत्सव समिति, भोपाल
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Navbar lang={lang} setLang={setLang} />
          <StickySocial /> 
          <ScrollToTop />
          <main className="min-h-screen selection:bg-[var(--mela-orange)] selection:text-white">
            <Outlet context={{ lang }} />
          </main>
          <Footer lang={lang} />
        </motion.div>
      )}
    </>
  );
};

export default MainLayout;