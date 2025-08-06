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
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          PUBLICATIONS & RESEARCH
        </h1>
        <p className="text-xl text-white">
          Academic contributions and research output
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {publications.map((publication, index) => (
          <div key={index} className="border-b border-gray-600 pb-6 last:border-b-0">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white leading-tight">
                {publication.title}
              </h3>
              <p className="text-white">
                <strong>AUTHORS:</strong> {publication.authors}
              </p>
              <p className="text-white">
                <strong>JOURNAL:</strong> {publication.journal} ({publication.year})
              </p>
              <p className="text-white leading-relaxed">
                {publication.abstract}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};