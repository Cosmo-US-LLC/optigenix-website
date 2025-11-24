const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="md:text-[48px] text-[32px] font-bold mb-6">About Optigenix</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            We are a team of passionate innovators dedicated to transforming businesses through technology.
          </p>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p>
                At Optigenix, our mission is to empower organizations with innovative technology solutions
                that drive growth, efficiency, and success. We believe in creating lasting partnerships
                with our clients and delivering exceptional value through our expertise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h2>
              <p>
                We envision a future where technology seamlessly integrates with business operations,
                enabling organizations to reach their full potential. Our goal is to be the trusted
                partner that businesses turn to for their most critical technology challenges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Values</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Innovation: We constantly push boundaries and explore new possibilities</li>
                <li>Excellence: We deliver high-quality solutions that exceed expectations</li>
                <li>Integrity: We operate with honesty and transparency in all our dealings</li>
                <li>Collaboration: We work closely with our clients to achieve shared success</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

