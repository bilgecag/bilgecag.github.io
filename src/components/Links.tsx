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
    title: "LinkedIn",
    description: "Professional network and career updates",
    url: "#",
    icon: Linkedin,
    color: "hover:bg-blue-50 hover:text-blue-600",
  },
  {
    title: "GitHub", 
    description: "Open source projects and code repositories",
    url: "#",
    icon: Github,
    color: "hover:bg-gray-50 hover:text-gray-800",
  },
  {
    title: "Twitter",
    description: "Thoughts, insights, and industry discussions",
    url: "#",
    icon: Twitter,
    color: "hover:bg-blue-50 hover:text-blue-500",
  },
  {
    title: "Email",
    description: "Get in touch for collaborations",
    url: "mailto:your.email@example.com",
    icon: Mail,
    color: "hover:bg-red-50 hover:text-red-600",
  },
  {
    title: "Personal Website",
    description: "Portfolio and additional projects",
    url: "#",
    icon: Globe,
    color: "hover:bg-green-50 hover:text-green-600",
  },
  {
    title: "Resume/CV",
    description: "Download my latest resume",
    url: "#",
    icon: FileText,
    color: "hover:bg-purple-50 hover:text-purple-600",
  },
];

export const Links = () => {
  return (
    <section id="links" className="min-h-screen py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Connect With Me
          </h2>
          <p className="text-muted-foreground text-lg">
            Find me across the web and get in touch
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Card 
                key={index} 
                className={`p-6 transition-all duration-300 hover:shadow-elegant cursor-pointer ${link.color}`}
                onClick={() => window.open(link.url, '_blank')}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Let's Collaborate
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              I'm always interested in new opportunities, interesting projects, 
              and meaningful connections. Don't hesitate to reach out!
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Send Message
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};