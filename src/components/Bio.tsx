import { Card } from "@/components/ui/card";

export const Bio = () => {
  return (
    <section id="bio" className="min-h-screen flex items-center justify-center py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Bilgecag Aydogdu
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Data Science Researcher & Policy Analyst
          </p>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>bilgecagaydogdu@gmail.com</p>
            <p>+33 7 67 09 88 74</p>
          </div>
        </div>

        <Card className="p-8 shadow-soft border-border/50 hover:shadow-elevated transition-[var(--transition-bounce)] rounded-2xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Profile</h2>
              <p className="text-foreground leading-relaxed">
                Recent PhD graduate with 5+ years of experience in data science research for inclusive 
                policy analysis of vulnerable populations. Specialized in publishing in high-impact journals, 
                and leading research in developing analytical models to extract actionable insights for policymakers.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Core Competencies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-foreground">Technical Skills:</p>
                  <p className="text-muted-foreground">Python, R, SQL, MATLAB</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Specialization:</p>
                  <p className="text-muted-foreground">Statistical modeling, Machine learning, Visualization</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Research Focus:</p>
                  <p className="text-muted-foreground">Migration patterns, Policy analysis, Big Data</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Languages:</p>
                  <p className="text-muted-foreground">Turkish, English, French, Dutch, German</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};