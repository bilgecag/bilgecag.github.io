import { Bio } from "./Bio";
import { Publications } from "./Publications";
import { PreviousWork } from "./PreviousWork";
import { Interests } from "./Interests";
import { Links } from "./Links";

interface ContentPageProps {
  activeSection: string;
}

export const ContentPage = ({ activeSection }: ContentPageProps) => {
  const renderContent = () => {
    switch (activeSection) {
      case "professional":
      case "personal":
      case "bio":
        return <Bio />;
      case "publications":
        return <Publications />;
      case "previous-work":
        return <PreviousWork />;
      case "research":
      case "data-science":
      case "policy":
      case "resources":
        return <Interests />;
      case "interest":
        return (
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold text-white mb-4">INTEREST</h2>
            <p className="text-white text-lg">To be modified later...</p>
          </div>
        );
      case "links":
        return <Links />;
      default:
        return null;
    }
  };

  if (!activeSection) return null;

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {renderContent()}
        
        {/* Footer buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-16">
          <button className="w-full md:w-auto bg-yellow-400 border-2 border-yellow-600 px-6 py-3 text-yellow-900 font-bold text-lg hover:bg-yellow-300 transition-colors">
            CONNECT WITH ME
          </button>
          <button className="w-full md:w-auto bg-yellow-400 border-2 border-yellow-600 px-6 py-3 text-yellow-900 font-bold text-lg hover:bg-yellow-300 transition-colors">
            LET'S COLLABORATE
          </button>
        </div>
      </div>
    </div>
  );
};