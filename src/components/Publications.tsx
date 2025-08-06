import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

const publications = [
  {
    title: "A novel activity space approach to discover displacement patterns via mobile phone data: An analysis of the 2023 Türkiye-Syria Earthquakes",
    journal: "EPJ Data Science",
    year: "2025",
    authors: "Aydoğdu, B., Danış, D., Bilgili,  Ö., Yıldızcan, C., Yağcıklı, S. N., Güneş, , S., & Salah, A. A.",
    link: "https://webspace.science.uu.nl/~salah006/aydogdu25epj.pdf",
  },
  {
    title: "Combining Twitter and mobile phone data to observe border rush: the Turkish-European border opening",
    journal: "Journal of Computational Social Science",
    year: "2025",
    authors: "Arcila-Calderón, C., Aydoğdu, B., Bircan, T., Gündüz, B., Önes, O., Salah, A. A., & Sîrbu, A.",
    link: "https://link.springer.com/article/10.1007/s42001-024-00354-8",
  },
  {
    title: "Mobile phone data for anticipating displacements: practices, opportunities, and challenges",
    journal: "Data & Policy",
    year: "2025",
    authors: "Aydoğdu, B., Bilgili,  Ö., Güneş, S., & Salah, A. A.",
    link: "https://www.cambridge.org/core/journals/data-and-policy/article/mobile-phone-data-for-anticipating-displacements-practices-opportunities-and-challenges/3CEF3CA3289EA57100B298FCF203D3A9",
  },
  {
    title: "Analyzing international airtime top-up transfers for migration and mobility",
    journal: "International Journal of Data Science and Analytics",
    year: "2025",
    authors: "Aydoğdu, B., Samad, H., Bai, S., Abboud, S., Gorantis, I., & Salah,.",
    link: "https://link.springer.com/article/10.1007/s41060-023-00396-7",
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
