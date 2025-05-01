// src/app/page.tsx

import HeroSection from "../pages/HeroSection";
import Navbar from "../pages/Navbar";
import ProjectGrid from "../pages/ProjectGrid";
import ContactPreviewBanner from "../pages/ContactPreviewBanner";
import FooterCTA from "../pages/FooterCTA";
import Footer from "../pages/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectGrid />
      <ContactPreviewBanner />
      <FooterCTA />
      <Footer />
    </div>
  );
}
