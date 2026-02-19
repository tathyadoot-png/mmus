import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6"; // X के लिए FaXTwitter बेस्ट है
import { motion } from "framer-motion";

const StickySocial = () => {
  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/share/17G8ZiAHdx/", color: "text-[#1877F2]" },
    { icon: Instagram, href: "https://www.instagram.com/officeofgs", color: "text-[#E4405F]" },
    { icon: FaXTwitter, href: "#", color: "text-black" }, // X (Twitter) का नया लोगो और ब्लैक कलर
    { icon: Youtube, href: "#", color: "text-[#FF0000]" },
    // { icon: FaWhatsapp, href: "https://whatsapp.com/channel/0029VaC2vxOI7BeLB9xjC43u", color: "text-[#25D366]" },
  ];

  return (
    <div className="fixed z-[999] bottom-6 left-6 md:left-auto md:right-6 md:top-1/2 md:-translate-y-1/2 md:bottom-auto">
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex flex-row md:flex-col gap-2 p-1.5 bg-white/70 backdrop-blur-xl border border-white/50 rounded-full md:rounded-[2.5rem] shadow-lg ring-1 ring-black/5"
      >
        {socials.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="h-8 w-8 md:h-11 md:w-11 flex items-center justify-center rounded-full bg-white shadow-sm transition-transform"
          >
            <item.icon className={`w-4 h-4 md:w-5 md:h-5 ${item.color}`} />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default StickySocial;