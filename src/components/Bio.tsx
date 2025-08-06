import { Card } from "@/components/ui/card";

export const Bio = () => {
  return (
    <div className="text-center space-y-8">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          BILGECAG AYDOGDU
        </h1>
        <p className="text-xl text-white mb-4">
          DATA SCIENCE RESEARCHER & POLICY ANALYST
        </p>
        <div className="text-sm text-white space-y-1">
          <p>bilgecagaydogdu@gmail.com</p>
          <p>+33 7 67 09 88 74</p>
        </div>
      </div>

      <div className="text-left space-y-8 max-w-3xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">PROFESSIONAL PROFILE</h2>
          <p className="text-white leading-relaxed text-lg">
            Recent PhD graduate with 5+ years of experience in data science research for inclusive 
            policy analysis of vulnerable populations. Specialized in publishing in high-impact journals, 
            and leading research in developing analytical models to extract actionable insights for policymakers.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-white mb-4">CORE COMPETENCIES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-white mb-2">TECHNICAL SKILLS:</p>
              <p className="text-white">Python, R, SQL, MATLAB</p>
            </div>
            <div>
              <p className="font-bold text-white mb-2">SPECIALIZATION:</p>
              <p className="text-white">Statistical modeling, Machine learning, Visualization</p>
            </div>
            <div>
              <p className="font-bold text-white mb-2">RESEARCH FOCUS:</p>
              <p className="text-white">Migration patterns, Policy analysis, Big Data</p>
            </div>
            <div>
              <p className="font-bold text-white mb-2">LANGUAGES:</p>
              <p className="text-white">Turkish, English, French, Dutch, German</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">CURRENT FOCUS</h3>
          <p className="text-white leading-relaxed text-lg">
            Seeking consultancy opportunities with international organizations such as UN, OECD, 
            and other policy-focused institutions where I can apply my expertise in data-driven 
            policy analysis and research methodology to address global challenges.
          </p>
        </div>
      </div>
    </div>
  );
};