const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: "🌐",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
      features: ["Cross-Platform", "Native Performance", "Offline Support"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      icon: "☁️",
      features: ["AWS & Azure", "Auto-Scaling", "Cost Optimization"]
    },
    {
      title: "Consulting",
      description: "Strategic technology consulting to guide your digital transformation.",
      icon: "💼",
      features: ["Architecture Design", "Tech Stack Selection", "Best Practices"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love.",
      icon: "🎨",
      features: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      title: "DevOps",
      description: "Streamlined deployment pipelines and infrastructure automation.",
      icon: "⚙️",
      features: ["CI/CD", "Monitoring", "Container Orchestration"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive technology solutions tailored to your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg hover:shadow-lg transition-all hover:border-primary"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-muted-foreground">
                  <span className="mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

