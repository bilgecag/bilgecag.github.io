import { useState } from "react";
import { HorizontalNavigation } from "@/components/HorizontalNavigation";
import { WelcomePage } from "@/components/WelcomePage";
import { ContentPage } from "@/components/ContentPage";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen">
      <HorizontalNavigation onNavigate={handleNavigate} />
      {activeSection ? (
        <ContentPage activeSection={activeSection} />
      ) : (
        <WelcomePage />
      )}
    </div>
  );
};

export default Index;
