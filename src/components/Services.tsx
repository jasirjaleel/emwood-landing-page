
import React from "react";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Premium Wooden Flooring & Wall Paneling",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200"
    },
    {
      title: "Custom Wooden Interiors & Furniture",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
    },
    {
      title: "Bespoke Wooden Doors & Windows",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200"
    },
    {
      title: "Handcrafted Staircases & Railings",
      image: "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?q=80&w=1200"
    },
    {
      title: "Wood Finishing & Restoration",
      image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1200"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-light mb-12 animate-on-scroll opacity-0">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, image }, index) => (
            <div
              key={title}
              className="group relative overflow-hidden aspect-square animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-70" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-display text-xl font-light mb-2">{title}</h3>
                <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
