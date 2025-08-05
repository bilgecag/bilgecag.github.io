import { Navigation } from "@/components/Navigation";
import { Bio } from "@/components/Bio";
import { Publications } from "@/components/Publications";
import { PreviousWork } from "@/components/PreviousWork";
import { Interests } from "@/components/Interests";
import { Links } from "@/components/Links";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Bio />
      <Publications />
      <PreviousWork />
      <Interests />
      <Links />
    </div>
  );
};

export default Index;
