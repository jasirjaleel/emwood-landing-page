
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400"
          alt="Interior Design"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 h-screen flex items-center">
        <div className="container mx-auto px-8">
          <h1 className="font-display text-6xl md:text-8xl font-light text-white mb-8 animate-fade-up max-w-4xl">
            Contemporary Living Spaces
          </h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-up font-light" style={{ animationDelay: "0.2s" }}>
            At EMWOODS, we turn your dreams into reality. From the initial spark of inspiration to the final touches that bring your space to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
