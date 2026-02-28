import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/13.jpg";
import img5 from "@/assets/img5.jpg";
import img6 from "@/assets/img6.jpg";
import img7 from "@/assets/img7.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";
import img10 from "@/assets/img10.jpg";
import img11 from "@/assets/img11.jpg";
import img12 from "@/assets/img12.jpg";
import img13 from "@/assets/img13.jpg";
import img14 from "@/assets/img14.jpg";
import img15 from "@/assets/img15.jpg";
import img16 from "@/assets/img16.jpg";
import img17 from "@/assets/img17.jpg";
import img22 from "@/assets/img22.jpeg";
import img24 from "@/assets/img24.jpeg";
import img25 from "@/assets/img25.jpeg";
import img26 from "@/assets/img26.jpeg";
import img27 from "@/assets/img27.jpeg";
import img28 from "@/assets/img28.jpeg";
import img29 from "@/assets/img29.jpeg";
import img30 from "@/assets/img30.jpeg";

export interface GalleryCategory {
  id: string;
  type: "image" | "press"; 
  date?: string;           
  titleHi: string;
  titleEn: string;
  thumbnail: string;
  images: string[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: "press-meet-2026",
    type: "press", 
    date: "27 Feb 2026",
    titleHi: "भव्य नववर्ष मेला महोत्सव: प्रेस वार्ता एवं रूपरेखा",
    titleEn: "Grand New Year Fair Festival: Press Conference",
    thumbnail: img13, 
    images: [img13, img14, img15, img16, img17] 
  },
  {
    id: "development",
    type: "image",
    date: "Jan 2026",
    titleHi: "विकास कार्य",
    titleEn: "Development",
    thumbnail: img8,
    images: [img8, img9, img10, img11, img12]
  },
  {
    id: "cultural",
    type: "image",
    date: "Dec 2025",
    titleHi: "सांस्कृतिक",
    titleEn: "Cultural",
    thumbnail: img6,
    images: [ img5, img6, img7, img10, img11, img12]
  },
  {
    id: "youth",
    type: "image",
    date: "Nov 2025",
    titleHi: "संघर्ष से संकल्प तक",
    titleEn: "From Determination to Destiny",
    thumbnail: img27,
    images: [img22, img24, img25, img26, img27, img28, img29, img30]
  }
];