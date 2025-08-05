import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Code, Camera, Music, Book, Plane } from "lucide-react";

const interests = [
  {
    category: "Research Areas",
    icon: Code,
    items: ["Migration Studies", "Policy Analysis", "Urban Computing", "Social Data Science"],
    color: "bg-primary/10 text-primary",
  },
  {
    category: "Data Science", 
    icon: Camera,
    items: ["Machine Learning", "Statistical Modeling", "Big Data Analytics", "Visualization"],
    color: "bg-primary/10 text-primary",
  },
  {
    category: "Policy & Development",
    icon: Heart,
    items: ["International Development", "Humanitarian Research", "Public Policy", "Social Impact"],
    color: "bg-primary/10 text-primary",
  },
  {
    category: "Academic",
    icon: Book,
    items: ["Peer Review", "Conference Speaking", "Research Collaboration", "Teaching"],
    color: "bg-primary/10 text-primary",
  },
];

export const Interests = () => {
  return (
    <section id="interests" className="min-h-screen py-20 bg-accent/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interests
          </h2>
          <p className="text-muted-foreground text-lg">
            Things I'm passionate about beyond work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
                <div className="text-center mb-4">
                  <div className={`inline-flex p-3 rounded-full ${interest.color} mb-3`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {interest.category}
                  </h3>
                </div>

                <div className="space-y-2">
                  {interest.items.map((item, itemIndex) => (
                    <Badge 
                      key={itemIndex} 
                      variant="secondary" 
                      className="block text-center py-1"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Current Focus
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing opportunities in international development and policy consulting, 
              with a focus on applying data science methodologies to address global challenges. 
              Particularly interested in positions with organizations like the United Nations, 
              OECD, and other international bodies working on migration, development, and social policy.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};