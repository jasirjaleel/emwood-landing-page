
import React from "react";

const Process = () => {
  const steps = [
    {
      title: "Consultation",
      description: "We begin by understanding your needs, preferences, and vision. Our team listens closely to your ideas and provides expert advice to guide the project.",
    },
    {
      title: "Design & Planning",
      description: "Our designers work closely with you to create detailed plans and visualizations, ensuring that every aspect of the design aligns with your expectations.",
    },
    {
      title: "Material Selection",
      description: "With a commitment to quality and sustainability, we help you choose the finest materials that meet both your style and budget.",
    },
    {
      title: "Craftsmanship",
      description: "Once the design is finalized, our skilled artisans bring it to life with highest standards of quality and attention to detail.",
    },
    {
      title: "Installation",
      description: "Our installation team ensures that everything fits perfectly and functions as intended, with minimal disruption to your daily life.",
    },
  ];

  return (
    <section id="process" className="py-32 bg-neutral-cream">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl md:text-5xl font-light mb-20 animate-on-scroll opacity-0 text-center">
          Our Process
        </h2>
        <div className="max-w-4xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-10 items-start animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-5xl font-light text-brand-primary">0{index + 1}</span>
              <div>
                <h3 className="text-2xl font-light mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
