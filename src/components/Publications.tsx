import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

const publications = [
  {
    title: "Sample Publication Title",
    journal: "Journal Name",
    year: "2024",
    authors: "Your Name, Co-Author Name",
    abstract: "Brief description of the publication content and key findings...",
    link: "#",
  },
  {
    title: "Another Research Paper",
    journal: "Conference Proceedings",
    year: "2023",
    authors: "Your Name, Another Author",
    abstract: "Summary of research methodology and conclusions...",
    link: "#",
  },
];

export const Publications = () => {
  return (
    <section id="publications" className="min-h-screen py-20 bg-accent/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Publications
          </h2>
          <p className="text-muted-foreground text-lg">
            Research papers, articles, and academic contributions
          </p>
        </div>

        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {pub.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="font-medium">{pub.journal}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {pub.year}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Authors:</strong> {pub.authors}
                  </p>
                  
                  <p className="text-foreground leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>
                
                <Button variant="outline" size="sm" className="shrink-0">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};