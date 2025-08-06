import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe,
  FileText,
  MessageCircle
} from "lucide-react";

const links = [
  {
    platform: "LINKEDIN",
    handle: "bilgecag-aydogdu",
    url: "https://linkedin.com/in/bilgecag-aydogdu",
    icon: Linkedin
  },
  {
    platform: "EMAIL",
    handle: "bilgecagaydogdu@gmail.com",
    url: "mailto:bilgecagaydogdu@gmail.com",
    icon: Mail
  },
  {
    platform: "GITHUB",
    handle: "bilgecagaydogdu",
    url: "https://github.com/bilgecagaydogdu",
    icon: Github
  },
  {
    platform: "WEBSITE",
    handle: "bilgecagaydogdu.github.io",
    url: "https://bilgecagaydogdu.github.io",
    icon: Globe
  }
];

export const Links = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          LINKS
        </h1>
        <p className="text-xl text-white">
          Professional networks and contact information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {links.map((link, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-yellow-400 border-2 border-yellow-600 flex items-center justify-center">
              <link.icon className="w-8 h-8 text-yellow-900" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                {link.platform}
              </h3>
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors text-lg"
              >
                {link.handle}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};