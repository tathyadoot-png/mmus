import { Calendar, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const InfoStrip = ({ lang }: { lang: "hi" | "en" }) => {
    const isHi = lang === "hi";

    return (
        <section className="relative w-full -mt-10 mb-10 z-30 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] border border-white/10">

                    {/* Animated Background Glows */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#f48220]/20 blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2d8a3c]/20 blur-[100px] translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12">

                        {/* DATE SECTION */}
                        <div className="lg:col-span-5 p-8 md:p-12 flex items-center gap-6 border-b lg:border-b-0 lg:border-r border-white/5 hover:bg-white/[0.02] transition-colors group">
                            <div className="relative">
                                <div className="p-5 bg-gradient-to-br from-[#f48220] to-[#ff9d47] rounded-[1.5rem] text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Calendar size={32} strokeWidth={2.5} />
                                </div>
                                <Sparkles className="absolute -top-2 -right-2 text-orange-300 size-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="space-y-1">
                                <p className="text-[#f48220] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                                    {isHi ? "मेला अवधि" : "Festival Dates"}
                                </p>
                                <h4 className="text-2xl md:text-3xl font-black text-white font-[Gotu] tracking-tight">
                                    19 मार्च<span className="text-white/30">—</span> 18 अप्रैल 2026
                                </h4>
                            </div>
                        </div>

                        {/* VENUE SECTION */}
                        <div className="lg:col-span-5 p-8 md:p-12 flex items-center gap-6 hover:bg-white/[0.02] transition-colors group">
                            <div className="p-5 bg-gradient-to-br from-[#2d8a3c] to-[#45b657] rounded-[1.5rem] text-white shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-500">
                                <MapPin size={32} strokeWidth={2.5} />
                            </div>

                            <div className="space-y-1">
                                <p className="text-[#2d8a3c] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                                    {isHi ? "आयोजन स्थल" : "The Venue"}
                                </p>
                                <h4 className="text-xl md:text-2xl font-bold text-white font-[Poppins]">
                                    {isHi ? "दशहरा मैदान, टी.टी. नगर" : "Dussehra Maidan, T.T. Nagar"}
                                    <span className="block text-sm text-white/50 font-medium">{isHi ? "भोपाल, मध्य प्रदेश" : "Bhopal, MP"}</span>
                                </h4>
                            </div>
                        </div>

                        {/* CTA / STATUS SECTION */}
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Dussehra+Maidan+Bhopal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lg:col-span-2 bg-white/[0.03] p-8 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-white/5 group cursor-pointer hover:bg-white/[0.06] transition-all"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-center"
                            >
                                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-3 mx-auto group-hover:border-[#f48220] group-hover:bg-[#f48220]/10 transition-all duration-500 shadow-lg group-hover:shadow-[#f48220]/20">
                                    <ArrowUpRight className="text-white group-hover:text-[#f48220] transition-colors w-6 h-6" />
                                </div>

                                <p className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                    {isHi ? "रास्ता देखें" : "Get Directions"}
                                </p>

                                {/* छोटा सा 'Open Maps' हिंट */}
                                <span className="text-[8px] text-[#f48220] opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                                    Google Maps
                                </span>
                            </motion.div>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoStrip;