import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "bio", label: "Bio" },
  { id: "publications", label: "Publications" },
  { id: "previous-work", label: "Previous Work" },
  { id: "interests", label: "Interests" },
  { id: "links", label: "Links" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:fixed md:top-8 md:left-8 md:flex md:flex-col md:gap-2 md:z-50">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection(section.id)}
            className="justify-start text-muted-foreground hover:text-primary hover:bg-accent transition-[var(--transition-bounce)] rounded-lg"
          >
            {section.label}
          </Button>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-card shadow-soft rounded-lg border-2 hover:shadow-elevated transition-[var(--transition-bounce)]"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>

        {isOpen && (
          <div className="absolute top-12 right-0 bg-card rounded-lg shadow-elevated border p-2 min-w-[140px] z-50 backdrop-blur-sm">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(section.id)}
                className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-accent/50 transition-[var(--transition-bounce)] rounded-lg"
              >
                {section.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};