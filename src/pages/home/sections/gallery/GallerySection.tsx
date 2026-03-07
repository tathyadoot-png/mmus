import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { X, ChevronLeft, ChevronRight, ArrowUpRight, FileText, ImageIcon, Calendar, MapPin, Star, Info, Users, Utensils, Music, ArrowLeft } from "lucide-react";

// --- IMAGES IMPORT ---
import img1 from "@/assets/event/e1.jpeg";
import img2 from "@/assets/event/e2.jpeg";
import img3 from "@/assets/event/e3.jpeg";
import img4 from "@/assets/event/e4.jpeg";
import img5 from "@/assets/event/e5.jpeg";
import img6 from "@/assets/event/e6.jpeg";
import img7 from "@/assets/event/e7.jpeg";
import img8 from "@/assets/event/e8.jpeg";
import img9 from "@/assets/event/e9.jpeg";


export interface GalleryCategory {
  id: string;
  type: "image" | "press"; 
  date?: string;           
  titleHi: string;
  titleEn: string;
  thumbnail: string;
  images: string[];
}

const galleryCategories: GalleryCategory[] = [
  {
    id: "press-meet-2026",
    type: "press", 
    date: "27 Feb 2026",
    titleHi: "भव्य नववर्ष मेला महोत्सव: प्रेस वार्ता एवं रूपरेखा",
    titleEn: "Grand New Year Fair Festival: Press Conference",
    thumbnail: img8, 
    images: [img1, img2, img3, img4, img5, img6, img7, img8, img9] 
  },
];

const GallerySection = ({ lang: propLang }: { lang?: Lang }) => {
  const context = useOutletContext<{ lang: Lang }>() || {};
  const lang = propLang || context.lang || "hi";
  const isHi = lang === "hi";

  const [filter, setFilter] = useState<"all" | "image" | "press">("all");
  const [activeCat, setActiveCat] = useState<GalleryCategory | null>(null);
  const [imgIndex, setImgIndex] = useState(0);
  const [showFullArticle, setShowFullArticle] = useState(false);

  const filteredCategories = useMemo(() => {
    if (filter === "all") return galleryCategories;
    return galleryCategories.filter((cat) => (cat.type || "image") === filter);
  }, [filter]);

  const handleNext = () => {
    if (activeCat && imgIndex < activeCat.images.length - 1) setImgIndex(prev => prev + 1);
    else closeGallery();
  };

  const handlePrev = () => { if (imgIndex > 0) setImgIndex(prev => prev - 1); };

  const closeGallery = () => {
    setActiveCat(null);
    setImgIndex(0);
    setShowFullArticle(false);
  };

  const isSingle = filteredCategories.length === 1;

  return (
    <section id="gallery" className="relative py-24 bg-[#FCFCFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeading subtitle={isHi ? "मीडिया सेंटर" : "Media Center"} title={isHi ? "प्रेस और गैलरी" : "News & Moments"} />
          
          <div className="flex bg-slate-100 p-1.5 rounded-2xl self-start border border-slate-200">
            {[{ id: "all", label: isHi ? "सब देखें" : "All" }, { id: "image", label: isHi ? "गैलरी" : "Gallery", icon: ImageIcon }, { id: "press", label: isHi ? "प्रेस" : "Press", icon: FileText }].map((tab) => (
              <button key={tab.id} onClick={() => setFilter(tab.id as any)} className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all ${filter === tab.id ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-primary"}`}>
                {tab.icon && <tab.icon size={14} />} {tab.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className={`grid gap-8 ${isSingle ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => (
              <motion.div 
                key={cat.id} 
                layout 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }} 
                onClick={() => { setActiveCat(cat); setImgIndex(0); }} 
                className={`group relative overflow-hidden rounded-[3rem] cursor-pointer bg-white border border-slate-100 shadow-2xl transition-all hover:shadow-primary/10 ${isSingle ? 'h-[500px]' : 'aspect-video'}`}
              >
                <img src={cat.thumbnail} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className={`absolute inset-0 p-8 md:p-12 flex flex-col justify-end ${isSingle ? 'md:max-w-3xl' : ''}`}>
                  <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase mb-4 flex items-center gap-2 w-fit bg-primary text-white">
                    <Star size={14} className="fill-white" /> {isHi ? "ताज़ा अपडेट" : "Latest Update"}
                  </span>
                  <h3 className={`${isSingle ? 'text-3xl md:text-5xl' : 'text-xl'} text-white font-black leading-tight mb-4 group-hover:text-primary transition-colors`}>
                    {isHi ? cat.titleHi : cat.titleEn}
                  </h3>
                  <div className="flex items-center gap-6">
                    <p className="text-white/70 text-sm font-bold flex items-center gap-2"><Calendar size={16} /> {cat.date}</p>
                    <p className="text-white/70 text-sm font-bold flex items-center gap-2"><ImageIcon size={16} /> {cat.images.length} Photos</p>
                  </div>
                </div>
                <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-primary transition-all">
                   <ArrowUpRight size={28} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeCat && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-y-auto">
            {!showFullArticle ? (
              /* LIGHTBOX VIEW */
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                <button onClick={closeGallery} className="fixed top-8 right-8 p-4 bg-white/10 text-white rounded-full hover:bg-red-500 transition-all z-[10010] shadow-xl border border-white/20">
                  <X size={24} />
                </button>
                
                <motion.div key={imgIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-[10002] max-w-5xl flex flex-col items-center">
                  <img src={activeCat.images[imgIndex]} className="max-h-[75vh] w-auto object-contain rounded-3xl shadow-2xl border border-white/10" alt="" />
                  {activeCat.type === 'press' && (
                    <button onClick={() => setShowFullArticle(true)} className="mt-8 px-12 py-5 bg-primary text-white rounded-full font-black flex items-center gap-4 shadow-2xl hover:scale-105 transition-all">
                      <FileText size={24} /> {isHi ? "पूरी प्रेस विज्ञप्ति पढ़ें" : "Read Full Press Release"}
                    </button>
                  )}
                </motion.div>

                <div className="flex gap-6 mt-8">
                  <button onClick={handlePrev} className="p-5 bg-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all"><ChevronLeft size={30}/></button>
                  <button onClick={handleNext} className="p-5 bg-white/10 text-white rounded-full hover:bg-white hover:text-black transition-all"><ChevronRight size={30}/></button>
                </div>
              </div>
            ) : (
<motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25 }} className="bg-white w-full min-h-screen overflow-y-auto pb-24 absolute inset-0 z-[10005]">
  {/* Header Section */}
  <div className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm border-b p-4 md:p-6 flex justify-between items-center px-6 md:px-20 z-[10020]">
    <button onClick={() => setShowFullArticle(false)} className="flex items-center gap-2 font-bold text-slate-600 hover:text-primary transition-all bg-slate-100 px-4 py-2 rounded-xl">
      <ArrowLeft size={20} /> {isHi ? "पीछे जाएं" : "Go Back"}
    </button>
    
    <h2 className="hidden md:flex font-black text-primary items-center gap-2 tracking-tighter text-xl uppercase italic">Press Release 2026</h2>
    
    <button onClick={closeGallery} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm border border-red-100 flex items-center gap-2 font-bold">
      <X size={20} /> {isHi ? "बंद करें" : "Close"}
    </button>
  </div>

  <div className="max-w-4xl mx-auto px-6 py-16">
    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">27 फरवरी 2026 | भोपाल</span>
    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 leading-tight tracking-tight">भव्य हिंदू नववर्ष मेला महोत्सव 2026: भोपाल में धर्म और संस्कृति का महासंगम</h1>
    
    {/* Quick Info Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-slate-50 p-6 rounded-[2rem] border-2 border-slate-100 flex flex-col gap-2">
        <MapPin className="text-primary" />
        <p className="text-xs font-bold text-slate-400 uppercase">स्थान</p>
        <p className="font-bold text-slate-800">दशहरा मैदान, टी. टी. नगर, भोपाल</p>
      </div>
      <div className="bg-slate-50 p-6 rounded-[2rem] border-2 border-slate-100 flex flex-col gap-2">
        <Calendar className="text-primary" />
        <p className="text-xs font-bold text-slate-400 uppercase">दिनांक</p>
        <p className="font-bold text-slate-800">19 मार्च से 19 अप्रैल 2026</p>
      </div>
      <div className="bg-primary p-6 rounded-[2rem] text-white flex flex-col gap-2 shadow-lg shadow-primary/20">
        <Info className="text-white" />
        <p className="text-xs font-bold text-white/70 uppercase">थीम</p>
        <p className="font-bold italic leading-tight">"एक लोटा जल, हर समस्या का हल"</p>
      </div>
    </div>

    {/* Main Content Area */}
    <div className="prose prose-lg max-w-none text-slate-700 space-y-6 font-medium leading-[1.8]">
      <p>महानगर मेला उत्सव समिति, भोपाल द्वारा दिनांक 27 फरवरी 2026 को हिंदू नव वर्ष के पावन अवसर पर आयोजित किए जा रहे भव्य नववर्ष मेला महोत्सव के संबंध में पत्रकार वार्ता आयोजित की गई।</p>
      
      <p>प्रेस वार्ता में समिति के अध्यक्ष एवं मध्य प्रदेश सरकार के पूर्व मंत्री <strong>श्री उमाशंकर गुप्ता जी</strong> तथा मेला संयोजक <strong>श्री कैलाश मिश्र जी</strong> ने मेले की रूपरेखा, उद्देश्य एवं प्रमुख आकर्षणों की विस्तृत जानकारी साझा की। इस प्रेस वार्ता में मेला सहसंयोजक <strong> वैभव सिंह सिसोदिया, उपाध्यक्ष सुशील वासवानी, कोषाध्यक्ष राकेश जोशी, उपाध्यक्ष चेतन सिंह व अमित अग्रवाल, महासचिव अजय अग्रवाल </strong> मौजूद रहे।</p>

      <div className="bg-slate-50 p-8 rounded-[2.5rem] border-l-8 border-primary">
        <p>चैत्र शुक्ल प्रतिपदा हिंदू नववर्ष 19 मार्च 2026 से भोपाल स्थित टी. टी. नगर दशहरा मैदान में 19 मार्च से एक माह तक भव्य हिंदू नववर्ष मेला महोत्सव आयोजित किया जाएगा। यह मेला केवल मनोरंजन का केंद्र नहीं होगा, बल्कि धर्म, संस्कृति, शिक्षा, रोजगार और व्यापार का पारिवारिक संगम सिद्ध होगा।</p>
      </div>

      <p>मेले का शुभारंभ चैत्र शुक्ल प्रतिपदा के अवसर पर वैदिक मंत्रोच्चार, स्वस्तिवाचन तथा शिवलिंग स्थापना के साथ किया जाएगा। प्रतिदिन मां दुर्गा की विधिवत पूजा एवं संध्या आरती का आयोजन होगा। प्रत्येक मंगलवार एवं शनिवार को सुंदरकांड का सामूहिक पाठ तथा राम नवमी के अवसर पर विशेष हवन-पूजन एवं राम नाम जप कार्यक्रम आयोजित किए जाएंगे। विभिन्न धर्माचार्यों एवं कथावाचकों को आशीर्वचन हेतु आमंत्रित किया जाएगा।</p>

      <h3 className="text-2xl font-black text-slate-900 pt-4">महोत्सव का हर दिन कराएगी एक अलग अनुभूति</h3>
      <ul className="space-y-3 list-none p-0">
        <li className="flex gap-3 items-start"><Star className="text-primary shrink-0 mt-1" size={18} /> महोत्सव का हर एक दिन अलग अनुभूति कराएगी। प्रतिदिन मां दुर्गा की विधिवत पूजा होगी और संध्या आरती का आयोजन किया जाएगा।</li>
        <li className="flex gap-3 items-start"><Star className="text-primary shrink-0 mt-1" size={18} /> प्रत्येक मंगलवार और शनिवार को शाम को सुंदरकांड का सामूहिक पाठ किया जाएगा।</li>
        <li className="flex gap-3 items-start"><Star className="text-primary shrink-0 mt-1" size={18} /> राम नवमी के दिन विशिष्ट सामूहिक हवन-पूजन और राम नाम जाप का आयोजन होगा।</li>
      </ul>

      <div className="bg-slate-900 text-white p-10 rounded-[3rem] my-10 shadow-2xl">
         <h3 className="text-primary font-black mb-6 text-2xl flex items-center gap-3">प्रमुख आकर्षण एवं सुविधाएं</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base opacity-90">
            <div className="space-y-4">
               <p className="flex gap-2"><Users className="text-primary" /> 501 बटुकों द्वारा स्वस्तिवाचन</p>
               <p className="flex gap-2"><Info className="text-primary" /> शिवलिंग स्थापना एवं जलाभिषेक</p>
               <p className="flex gap-2"><Utensils className="text-primary" /> ऑटोमोबाइल, फर्नीचर एवं फूड स्टॉल्स</p>
            </div>
            <div className="space-y-4">
               <p className="flex gap-2"><MapPin className="text-primary" /> 1 एकड़ में विशाल पार्किंग</p>
               <p className="flex gap-2"><Star className="text-primary" /> हिंदू नव वर्ष सेल्फी प्वाइंट</p>
               <p className="flex gap-2"><Music className="text-primary" /> विख्यात कथावाचकों का सानिध्य</p>
            </div>
         </div>
      </div>

      <h3 className="text-2xl font-black text-slate-900">डिजिटल मेला अनुभव</h3>
      <p>कार्यक्रम में शामिल होने वाले लोगों को ई-सर्टिफिकेट दिए जाएंगे। डिजिटल बुकlet, क्यूआर आधारित डिजिटल पत्र प्रदान किए जाएंगे जिन्हें मोबाइल के माध्यम से डाउनलोड किया जा सकेगा। क्यूआर कोड के माध्यम से कार्यक्रम की जानकारी, दैनिक कार्य सूची और लाइव अपडेट दिया जाएगा।</p>

      <div className="pt-10 border-t flex flex-col items-center gap-6">
          <button onClick={closeGallery} className="px-12 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-primary transition-all flex items-center gap-4 shadow-xl">
              <X size={20} /> {isHi ? "गैलरी बंद करें" : "Close Gallery"}
          </button>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Mahanagar Mela Utsav Samiti © 2026</p>
      </div>
    </div>
  </div>
</motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;