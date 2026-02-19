import { motion } from "framer-motion";
import { Star, Users, Quote, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const CulturalSection = ({ lang }: { lang: "hi" | "en" }) => {
  const isHi = lang === "hi";
  const protectors = [
    { name: "पूज्य सुदेश शांडिल्य महाराज", ashram: "करुणाधाम आश्रम" },
    { name: "श्री राम प्रवेश दास जी महाराज", ashram: "गुफा मंदिर" },
    { name: "श्री कन्हैया दास जी महाराज", ashram: "मरघटिया महावीर मंदिर" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Soft Artistic Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-orange-50/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          subtitle={isHi ? "आध्यात्मिक सानिध्य" : "Spiritual Guidance"}
          title={isHi ? "सांस्कृतिक आयाम" : "Cultural Soul"}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-20">
          
          {/* 1. THE DIVINE ANNOUNCEMENT CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute -top-6 -left-6 opacity-10 text-primary">
              <Sparkles size={120} strokeWidth={1} />
            </div>

            <div className="h-full relative overflow-hidden bg-white p-10 md:p-14 rounded-[3rem] border border-orange-100 shadow-[0_30px_60px_-20px_rgba(244,130,32,0.1)]">
              {/* Vertical Decorative Bar */}
              <div className="absolute top-10 left-0 w-1.5 h-20 bg-primary rounded-r-full" />
              
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 rounded-full border border-orange-100">
                  <Star className="text-primary" fill="currentColor" size={14} />
                  <span className="text-xs font-black uppercase tracking-widest text-primary">
                    {isHi ? "विशेष स्वीकृति" : "Special Acceptance"}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="text-orange-100 absolute -top-10 -left-6 scale-[3] -z-0" />
                  <p className="relative z-10 text-2xl md:text-4xl font-bold text-slate-900 font-[Gotu] leading-[1.3]">
                    {isHi 
                      ? "पं. प्रदीप मिश्रा जी (सीहोर वाले) द्वारा एक दिवसीय प्रवचन एवं आध्यात्मिक मार्गदर्शन।" 
                      : "One-day discourse by Pt. Pradeep Mishra Ji with spiritual guidance."}
                  </p>
                </div>

                <p className="text-slate-500 font-medium leading-relaxed max-w-md">
                  {isHi 
                    ? "समिति संरक्षकों के सानिध्य में एक भव्य आध्यात्मिक संध्या का आयोजन।" 
                    : "A grand spiritual evening organized under the guidance of our mentors."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 2. PROTECTORS LIST (Minimalist Sacred List) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-slate-200" />
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">
                {isHi ? "समिति संरक्षक" : "Spiritual Mentors"}
              </h4>
            </div>

            <div className="space-y-4">
              {protectors.map((p, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 15 }}
                  className="group flex items-center justify-between p-6 bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 rounded-3xl transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all">
                      <Users size={20} />
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-slate-800">{isHi ? p.name : "Protector"}</h5>
                      <p className="text-sm text-slate-400 font-medium tracking-wide uppercase">{isHi ? p.ashram : "Location"}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CulturalSection;