import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

const publications = [
  {
    title: "A novel activity space approach to discover displacement patterns via mobile phone data: An analysis of the 2023 Türkiye-Syria Earthquakes",
    journal: "Under review for publication",
    year: "2025",
    authors: "Aydogdu, B., Dana, A., Çakır, S., & Salah, A. A.",
    abstract: "A novel activity space approach to analyze migrant population displacement patterns using mobile phone data in earthquake contexts.",
    link: "#",
  },
  {
    title: "Combining Twitter and mobile phone data to observe biotic push-the Turkish-European border opening",
    journal: "Journal of Computational Social Science",
    year: "2023",
    authors: "Apicella-Selvitano, C., Aydogdu, B., Illican, T., Gindolla, B., Öner, Ö., Salah, A. A., & Şirma, A.",
    abstract: "Research combining social media and mobile phone data to analyze migration patterns and border dynamics.",
    link: "#",
  },
  {
    title: "Machine learning for Urban Computing in architecture and urban design",
    journal: "Wiley",
    year: "2022",
    authors: "Aydogdu, B., A. A. Salah, A. A. Erçelik, T.",
    abstract: "Temporal and spatial analysis of data to draw implications on segregation of Syrian refugees in Turkey with mobile phone data.",
    link: "#",
  },
  {
    title: "Fine-Grained Mapping of Migrants in Istanbul Using Mobile Imagery and Neural Networks",
    journal: "IEEE 30th Signal Processing and Communications Applications Conference",
    year: "2022",
    authors: "Aydogdu, B., Bolek, C., Gürer, S., Momert, R., & Salah, A. A.",
    abstract: "Analysis of urban migration patterns using machine learning and mobile imagery data.",
    link: "#",
  },
  {
    title: "Analysing the social aspects of minorities and migrants with mobility",
    journal: "International Journal of Data Science and Analytics",
    year: "2023",
    authors: "Aydogdu, B., Samet, H., Bal, S., Abkead, S., Cerants, I., & Salah, A. A.",
    abstract: "Comprehensive analysis of social aspects affecting minority and migrant communities through mobility data.",
    link: "#",
  },
];

export const Publications = () => {
  return (
    <section id="publications" className="min-h-screen py-20 bg-accent/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Publications & Research
          </h2>
          <p className="text-muted-foreground text-lg">
            Research contributions in data science, migration analysis, and policy research
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