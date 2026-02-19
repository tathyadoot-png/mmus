import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  const words = title.split(" ");

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-16 md:mb-20 px-6 text-center">
      
      {/* 1. SUBTITLE: Minimal & Clean */}
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-3"
        >
          <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] text-primary/80">
            {subtitle}
          </span>
        </motion.div>
      )}

      {/* 2. MAIN TITLE: Elegant & Spaced */}
      <h2 className="relative flex flex-wrap justify-center items-center gap-x-3 md:gap-x-5">
        {words.map((word, i) => (
          <motion.span 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`font-[Gotu] text-4xl md:text-6xl font-[1000] tracking-tight
              ${i % 2 === 0 ? "text-slate-900" : "text-primary"}
            `}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {/* 3. UNDERLINE: Simple & Classy */}
      <div className="mt-6 flex justify-center items-center gap-3">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          className="h-[2px] bg-gradient-to-r from-transparent to-primary/40"
        />
        
        {/* Simple Square Accent */}
        <motion.div 
          initial={{ rotate: 0, scale: 0 }}
          whileInView={{ rotate: 45, scale: 1 }}
          className="w-2.5 h-2.5 bg-primary/20 border border-primary/60"
        />

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          className="h-[2px] bg-gradient-to-l from-transparent to-primary/40"
        />
      </div>

      {/* 4. VERY SUBTLE WATERMARK: To fill the void without clutter */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-full opacity-[0.03] select-none pointer-events-none -z-10">
        <span className="text-8xl md:text-[10rem] font-black uppercase text-slate-900">
          {words[0]}
        </span>
      </div>
      
    </div>
  );
};

export default SectionHeading;