import React, { useRef } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import SkillsSection from "./SkillsSection";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";

interface HomeProps {
  initialSection?: string;
}

const Home = ({ initialSection = "hero" }: HomeProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const refs = {
      hero: heroRef,
      skills: skillsRef,
      portfolio: portfolioRef,
      contact: contactRef,
    };

    const targetRef = refs[section as keyof typeof refs];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onNavigate={scrollToSection} />

      <div className="pt-20">
        {" "}
        {/* Offset for fixed navigation */}
        <div ref={heroRef}>
          <HeroSection
            onScrollToProjects={() => scrollToSection("portfolio")}
          />
        </div>
        <div ref={skillsRef}>
          <SkillsSection />
        </div>
        <div ref={portfolioRef}>
          <PortfolioSection />
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
