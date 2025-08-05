import { Card } from "@/components/ui/card";

export const Bio = () => {
  return (
    <section id="bio" className="min-h-screen flex items-center justify-center py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
            Your Name
          </h1>
          <p className="text-xl text-muted-foreground">
            Professional Title or Role
          </p>
        </div>

        <Card className="p-8 shadow-elegant">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed mb-6">
              Welcome to my personal page. I'm passionate about creating meaningful work and 
              contributing to projects that make a difference. With a background in [your field], 
              I bring expertise in [key skills/areas].
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Throughout my career, I've focused on [your focus areas] and have been involved 
              in [types of projects/work]. I believe in [your philosophy/approach] and am 
              always eager to connect with like-minded professionals and explore new opportunities.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};