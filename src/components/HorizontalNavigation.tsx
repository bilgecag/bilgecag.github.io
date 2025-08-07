import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  subItems?: { id: string; label: string }[];
}

const navItems: NavItem[] = [
  {
    id: "bio",
    label: "ABOUT ME",
    subItems: [
      { id: "professional", label: "PROFESSIONAL" },
      { id: "personal", label: "PERSONAL" }
    ]
  },
  { id: "publications", label: "PUBLICATIONS" },
  { id: "previous-work", label: "PREVIOUS WORK" },
  {
    id: "resources",
    label: "RESOURCES",
    subItems: [
      { id: "research", label: "RESEARCH" },
      { id: "data-science", label: "DATA SCIENCE" },
      { id: "policy", label: "POLICY" }
    ]
  },
  { id: "interest", label: "INTEREST" },
  { id: "links", label: "LINKS" }
];

interface HorizontalNavigationProps {
  onNavigate: (sectionId: string) => void;
}

export const HorizontalNavigation = ({ onNavigate }: HorizontalNavigationProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleItemClick = (item: NavItem) => {
    if (item.subItems) {
      setActiveDropdown(activeDropdown === item.id ? null : item.id);
    } else {
      onNavigate(item.id);
      setActiveDropdown(null);
      setMobileMenuOpen(false);
    }
  };

  const handleSubItemClick = (subItemId: string) => {
    onNavigate(subItemId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center gap-1 p-4">
        {navItems.map((item) => (
          <div key={item.id} className="relative">
            <button
              onClick={() => handleItemClick(item)}
              className="bg-yellow-400 border-2 border-yellow-600 px-4 py-2 text-yellow-900 font-bold text-sm hover:bg-yellow-300 transition-colors flex items-center gap-1"
            >
              {item.label}
              {item.subItems && <ChevronDown className="w-4 h-4" />}
            </button>
            
            {item.subItems && activeDropdown === item.id && (
              <div className="absolute top-full left-0 bg-yellow-600 border-2 border-yellow-600 min-w-full z-50">
                {item.subItems.map((subItem) => (
                  <button
                    key={subItem.id}
                    onClick={() => handleSubItemClick(subItem.id)}
                    className="block w-full text-left px-4 py-2 text-yellow-900 font-bold text-sm hover:bg-yellow-500 transition-colors border-b border-yellow-700 last:border-b-0"
                  >
                    {subItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Toggle Button */}
        <div className="flex justify-center p-4">
          <button
            onClick={toggleMobileMenu}
            className="bg-yellow-400 border-2 border-yellow-600 px-6 py-4 text-yellow-900 font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            {mobileMenuOpen ? "CLOSE MENU" : "MENU"}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm z-50 max-h-screen overflow-y-auto">
            <div className="flex flex-col items-center gap-2 p-4">
              {navItems.map((item) => (
                <div key={item.id} className="w-full max-w-xs">
                  <button
                    onClick={() => handleItemClick(item)}
                    className="w-full bg-yellow-400 border-2 border-yellow-600 px-6 py-4 text-yellow-900 font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                  >
                    {item.label}
                    {item.subItems && <ChevronDown className="w-5 h-5" />}
                  </button>
                  
                  {item.subItems && activeDropdown === item.id && (
                    <div className="w-full bg-yellow-600 border-2 border-yellow-600 border-t-0">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => handleSubItemClick(subItem.id)}
                          className="block w-full text-center px-6 py-3 text-yellow-900 font-bold text-base hover:bg-yellow-500 transition-colors border-b border-yellow-700 last:border-b-0"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Close Menu Button at Bottom */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-xs bg-red-500 border-2 border-red-600 px-6 py-4 text-red-900 font-bold text-lg hover:bg-red-400 transition-colors mt-4"
              >
                CLOSE MENU
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};