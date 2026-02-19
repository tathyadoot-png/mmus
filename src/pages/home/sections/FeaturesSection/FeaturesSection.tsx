import { motion } from "framer-motion";
import { 
  Store, Tent, Ghost, Leaf, Heart, Megaphone, 
  Utensils, Palette, TreePine, Sparkles 
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const FeaturesSection = ({ lang }: { lang: "hi" | "en" }) => {
  const isHi = lang === "hi";

  const features = [
    { hi: "सेक्टर वाइज व्यवस्थित दुकानें", icon: <Store />, color: "bg-blue-50 text-blue-600" },
    { hi: "विभिन्न प्रकार के आकर्षक झूले", icon: <Tent />, color: "bg-purple-50 text-purple-600" },
    { hi: "भव्य सुव्यवस्थित प्रवेश द्वार", icon: <Ghost />, color: "bg-orange-50 text-orange-600" },
    { hi: "ऑर्गेनिक एवं जैविक स्टॉल", icon: <Leaf />, color: "bg-green-50 text-green-600" },
    { hi: "पारंपरिक तिलक स्वागत", icon: <Heart />, color: "bg-red-50 text-red-600" },
    { hi: "व्यापक प्रचार-प्रसार", icon: <Megaphone />, color: "bg-indigo-50 text-indigo-600" },
    { hi: "उच्च गुणवत्ता फूड स्टॉल", icon: <Utensils />, color: "bg-rose-50 text-rose-600" },
    { hi: "स्थानीय सांस्कृतिक कार्यक्रम", icon: <Palette />, color: "bg-amber-50 text-amber-600" },
    { hi: "पूर्णतः इको-फ्रेंडली आयोजन", icon: <TreePine />, color: "bg-emerald-50 text-emerald-600" },
  ];

  return (
    <section className="py-24 bg-[#FFFDFB] relative overflow-hidden">
      
      {/* Background Decor - मेले वाली फील के लिए */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f48220]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2d8a3c]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          subtitle={isHi ? "सुविधाएँ और आकर्षण" : "Features & Attractions"}
          title={isHi ? "मेले की प्रमुख विशेषताएँ" : "Major Attractions"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Decorative Corner (Indian Style) */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/20 group-hover:border-primary transition-colors rounded-tl-lg" />
              
              <div className="h-full bg-white p-8 rounded-2xl border border-orange-50 shadow-[0_10px_30px_-15px_rgba(244,130,32,0.1)] group-hover:shadow-[0_20px_40px_-15px_rgba(244,130,32,0.2)] transition-all duration-300">
                
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  {item.icon}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h4 className="text-xl font-bold text-slate-800 font-[Gotu] tracking-tight">
                      {isHi ? item.hi : "Feature Title"}
                    </h4>
                  </div>
                  
                  <div className="h-[2px] w-12 bg-primary/20 group-hover:w-full transition-all duration-500 rounded-full" />
                  
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {isHi 
                      ? "उच्च गुणवत्ता और स्वच्छता के साथ भव्य आयोजन का हिस्सा बनें।" 
                      : "Be a part of a grand event with high quality and hygiene."}
                  </p>
                </div>

                {/* Number Watermark */}
                <span className="absolute bottom-4 right-6 text-4xl font-black text-slate-50 group-hover:text-orange-50 transition-colors pointer-events-none">
                  0{idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Festive Line */}
        <div className="mt-20 flex justify-center items-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="flex gap-2">
             {[...Array(3)].map((_, i) => (
               <div key={i} className="w-2 h-2 rounded-full bg-primary/20" />
             ))}
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;