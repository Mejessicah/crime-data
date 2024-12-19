import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center gradient-dark overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Unveiling the Power of <span className="text-gradient">Crime Analytics</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Your gateway to real-time crime data and predictive insights.
            Transform raw data into actionable intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-all flex items-center justify-center gap-2">
              Schedule a Demo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;