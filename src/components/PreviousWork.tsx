import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

const workExperience = [
  {
    role: "Senior Position",
    company: "Company Name",
    location: "City, Country",
    period: "2022 - Present",
    description: "Led key initiatives and managed important projects. Achieved significant results and contributed to organizational growth.",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    link: "#",
  },
  {
    role: "Previous Role",
    company: "Another Company",
    location: "City, Country", 
    period: "2020 - 2022",
    description: "Developed and implemented solutions that improved efficiency. Collaborated with cross-functional teams to deliver results.",
    technologies: ["Tool A", "Tool B", "Framework C"],
    link: "#",
  },
];

export const PreviousWork = () => {
  return (
    <section id="previous-work" className="min-h-screen py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Previous Work
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional experience and career highlights
          </p>
        </div>

        <div className="space-y-8">
          {workExperience.map((work, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-1">
                        {work.role}
                      </h3>
                      <p className="text-lg font-medium text-primary">
                        {work.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {work.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {work.period}
                    </div>
                  </div>

                  <p className="text-foreground leading-relaxed mb-4">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="shrink-0">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};