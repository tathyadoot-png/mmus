import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";
import melaImg from "@/assets/img8.jpg";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const AboutSection = ({ lang }: { lang: "hi" | "en" }) => {
  const isHi = lang === "hi";
  
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          subtitle={isHi ? "संस्कृति • समर्पण • संगम" : "Culture • Dedication • Confluence"}
          title={isHi ? "हमारे बारे में" : "About Us"}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900 font-[Gotu]">
              {isHi ? "महानगर मेला उत्सव समिति" : "Mahanagar Mela Utsav Samiti"}
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed text-justify">
              {isHi 
                ? "महानगर मेला उत्सव समिति द्वारा शहरवासियों के लिए सांस्कृतिक, सामाजिक एवं पारंपरिक मूल्यों से ओतप्रोत भव्य मेले का आयोजन किया जा रहा है। समिति की बैठक दिनांक 25 जनवरी 2026 को आयोजित की गई, जिसमें आगामी मेले की रूपरेखा और व्यवस्थाओं पर विस्तृत चर्चा की गई।"
                : "Organizing a grand fair imbued with cultural and traditional values for citizens. A meeting was held on Jan 25, 2026, to discuss the roadmap and arrangements."}
            </p>
            <div className="p-6 bg-[#f48220]/5 rounded-2xl border-l-4 border-[#f48220] italic relative">
              <Quote className="absolute top-2 right-4 opacity-10 size-10 text-[#f48220]" />
              <p className="text-slate-700 font-medium">
                {isHi 
                  ? "हमारा उद्देश्य है कि यह मेला सांस्कृतिक गरिमा, स्वच्छता, सुव्यवस्था और सामाजिक समरसता का आदर्श उदाहरण बने। यह आयोजन परंपरा और आधुनिकता का सुंदर संगम होगा।"
                  : "Our goal is for this fair to be an ideal example of cultural dignity, cleanliness, and harmony."}
              </p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <img src={melaImg} className="rounded-[2.5rem] shadow-2xl aspect-video object-cover border-8 border-slate-50" alt="Mela" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;