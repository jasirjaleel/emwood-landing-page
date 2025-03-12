
import React from "react";

const Stats = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center max-w-5xl mx-auto">
          <div className="animate-on-scroll opacity-0 py-6">
            <div className="text-6xl font-light mb-4 text-brand-primary">100+</div>
            <div className="text-gray-600 text-lg tracking-wide">Projects Completed</div>
          </div>
          <div className="animate-on-scroll opacity-0 py-6">
            <div className="text-6xl font-light mb-4 text-brand-primary">20+</div>
            <div className="text-gray-600 text-lg tracking-wide">Expert Designers</div>
          </div>
          <div className="animate-on-scroll opacity-0 py-6">
            <div className="text-6xl font-light mb-4 text-brand-primary">15+</div>
            <div className="text-gray-600 text-lg tracking-wide">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
