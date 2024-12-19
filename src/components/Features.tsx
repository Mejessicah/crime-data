import { BarChart3, PieChart, Map, Shield, Database, LineChart } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor and analyze crime data as it happens with our powerful real-time dashboard."
  },
  {
    icon: PieChart,
    title: "Pattern Recognition",
    description: "Identify crime patterns and trends using advanced statistical analysis."
  },
  {
    icon: Map,
    title: "Geographic Mapping",
    description: "Visualize crime hotspots and patterns with interactive heat maps."
  },
  {
    icon: Shield,
    title: "Predictive Insights",
    description: "Leverage AI to predict potential criminal activities and optimize resource allocation."
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Seamlessly integrate with existing databases and crime reporting systems."
  },
  {
    icon: LineChart,
    title: "Trend Analysis",
    description: "Track long-term crime trends and measure the effectiveness of interventions."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for Crime Analysis
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our comprehensive suite of tools helps law enforcement agencies make data-driven decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;