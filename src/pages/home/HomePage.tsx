import { useOutletContext } from "react-router-dom";
import type { Lang } from "@/layouts/MainLayout";
import HeroSection from "./sections/home/HeroSection";
import AboutSection from "./sections/about/AboutSection";
import JourneySection from "./sections/journey/JourneySection";
import ContributionsSection from "./sections/contributions/ContributionsSection";
import AchievementsSection from "./sections/achievements/AchievementsSection";
import LeadershipSection from "./sections/leadership/LeadershipSection";
import GallerySection from "./sections/gallery/GallerySection";
import ContactSection from "./sections/contact/ContactSection";
import AudioVideoSection from "./sections/AudioVideo/AudioVideoSection";
import InfoStrip from "./sections/InfoStrip/InfoStrip";
import CulturalSection from "./sections/CulturalSection/CulturalSection";
import FeaturesSection from "./sections/FeaturesSection/FeaturesSection";
// import HeroSection from "./sections/hero/HeroSection";

const HomePage = () => {
  const { lang } = useOutletContext<{ lang: Lang }>();

  return (
    <>
      <section id="home">
        <HeroSection lang={lang} />
      </section>
      <section id="about">
        <AboutSection lang={lang} />
      </section>
      <InfoStrip lang={lang} />
      <section id="features">
        <FeaturesSection lang={lang} />
      </section>
      <section id="cultural">
        <CulturalSection lang={lang} />
      </section>

      {/* <section id="leadership">
  <LeadershipSection lang={lang} />
</section>

<section id="media">
  <GallerySection  />
</section> */}
      {/* <section id="media2">
  <AudioVideoSection lang={lang} />
</section> */}
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
};

export default HomePage;
