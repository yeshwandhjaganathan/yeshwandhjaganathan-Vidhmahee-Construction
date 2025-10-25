import { useState, useEffect } from "react";
import { EntryAnimation } from "@/components/EntryAnimation";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrainingSection } from "@/components/TrainingSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [showEntry, setShowEntry] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setShowEntry(false);
      setShowContent(true);
    }
  }, []);

  const handleEntryComplete = () => {
    sessionStorage.setItem("hasSeenIntro", "true");
    setShowEntry(false);
    setTimeout(() => setShowContent(true), 300);
  };

  return (
    <>
      {showEntry && <EntryAnimation onComplete={handleEntryComplete} />}
      
      {showContent && (
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ServicesSection />
            <TrainingSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
