import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

const workExperience = [
  {
    position: "Data Scientist",
    company: "Turkcell Technology",
    location: "Istanbul, Turkey",
    period: "2021 - 2023", 
    responsibilities: [
      "Developed machine learning models for customer behavior analysis",
      "Conducted research on migration patterns using mobile phone data",
      "Published findings in peer-reviewed journals",
      "Collaborated with academic institutions on social data science projects"
    ]
  },
  {
    position: "Research Assistant",
    company: "DT One (Ding)",
    location: "Dublin, Ireland",
    period: "2020 - 2021",
    responsibilities: [
      "Analyzed mobile money transfer patterns across emerging markets",
      "Developed data visualization tools for business intelligence",
      "Supported policy research initiatives",
      "Contributed to company's research publications"
    ]
  }
];

export const PreviousWork = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          PROFESSIONAL EXPERIENCE
        </h1>
        <p className="text-xl text-white">
          Career highlights and key positions
        </p>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        {workExperience.map((work, index) => (
          <div key={index} className="border-b border-gray-600 pb-6 last:border-b-0">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <h3 className="text-xl font-bold text-white">
                  {work.position}
                </h3>
                <span className="text-white">
                  {work.period}
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <p className="text-lg text-white font-bold">
                  {work.company}
                </p>
                <p className="text-white">
                  {work.location}
                </p>
              </div>
              <div className="space-y-2">
                {work.responsibilities.map((responsibility, idx) => (
                  <p key={idx} className="text-white">
                    • {responsibility}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};