
import React from "react";

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="animate-on-scroll opacity-0">
            <div className="text-5xl font-light mb-2">100+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="animate-on-scroll opacity-0">
            <div className="text-5xl font-light mb-2">20+</div>
            <div className="text-gray-600">Expert Designes</div>
          </div>
          <div className="animate-on-scroll opacity-0">
            <div className="text-5xl font-light mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
