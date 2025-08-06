import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Code, Camera, Music, Book, Plane } from "lucide-react";

const interests = [
  {
    title: "RESEARCH",
    icon: Book,
    description: "Migration Studies, Policy Analysis, Urban Computing, Social Data Science"
  },
  {
    title: "DATA SCIENCE", 
    icon: Code,
    description: "Machine Learning, Statistical Modeling, Big Data Analytics, Visualization"
  },
  {
    title: "POLICY",
    icon: Heart,
    description: "International Development, Humanitarian Research, Public Policy, Social Impact"
  }
];

export const Interests = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          RESOURCES
        </h1>
        <p className="text-xl text-white">
          Areas of focus and expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {interests.map((interest, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center">
              <interest.icon className="w-8 h-8 text-yellow-900" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {interest.title}
            </h3>
            <p className="text-white">
              {interest.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};