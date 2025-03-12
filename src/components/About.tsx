
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-neutral-cream">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-12 animate-on-scroll opacity-0">
            Modern Style, <br />Timeless Charm
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-on-scroll opacity-0 font-light">
            At EMWOODS, we create bespoke wooden interiors that blend artistry with functionality. Our handcrafted furniture and luxury designs transform spaces into elegant masterpieces.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed animate-on-scroll opacity-0 font-light">
            From classic designs to contemporary styles, our collections are curated with an eye for quality and sustainability. With a deep commitment to excellence, we work closely with our clients to bring their dreams to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
