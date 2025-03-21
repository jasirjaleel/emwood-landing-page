import React from "react";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Premium Wooden Flooring & Wall Paneling",
      image: "/photos/wood_flooring_1.jpg"
    },
    {
      title: "Custom Wooden Interiors & Furniture",
      image: "/photos/wood_furniture_1.jpg"
    },
    {
      title: "Bespoke Wooden Doors & Windows",
      image: "/photos/wood_door_1.jpg"
    },
    {
      title: "Handcrafted Staircases & Railings",
      image: "/photos/wood_stairs_1.jpg"
      
    },
    {
      title: "Wood Finishing & Restoration",
      image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1200"
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-8">
        <h2 className="font-display text-4xl md:text-5xl font-light mb-16 animate-on-scroll opacity-0 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map(({ title, image }, index) => (
            <div
              key={title}
              className="group relative overflow-hidden aspect-square animate-on-scroll opacity-0 rounded-lg shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-70" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="font-display text-xl font-light mb-3">{title}</h3>
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
