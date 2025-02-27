
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import { ArrowRight, Phone, Mail, MapPin, Instagram } from "lucide-react";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Optimized scroll handler with debouncing
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add("animate-fade-up");
        }
      });
    };

    // Use requestAnimationFrame for smoother performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    
    // Run once on initial load
    handleScroll();
    
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400"
            alt="Interior Design"
            className="w-full h-full object-cover"
            loading="eager" // Load this image immediately as it's above the fold
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 h-screen flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-6xl md:text-8xl font-light text-white mb-6 animate-fade-up max-w-4xl">
              Contemporary Living Spaces
            </h1>
            <p className="text-xl text-white/90 max-w-2xl animate-fade-up font-light" style={{ animationDelay: "0.2s" }}>
              At EMWOODS, we turn your dreams into reality. From the initial spark of inspiration to the final touches that bring your space to life.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 animate-on-scroll opacity-0">
              Modern Style, <br />Timeless Charm
            </h2>
            <p className="text-lg text-gray-600 mb-6 animate-on-scroll opacity-0 font-light">
              At EMWOODS, we believe that the essence of a home lies in its details, and nothing speaks to warmth and elegance like the timeless appeal of wood. Rooted in a passion for craftsmanship, EMWOODS has emerged as a trusted name in the wooden interior sector.
            </p>
            <p className="text-lg text-gray-600 animate-on-scroll opacity-0 font-light">
              From classic designs to contemporary styles, our collections are curated with an eye for quality and sustainability. With a deep commitment to excellence, we work closely with our clients to bring their dreams to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-12 animate-on-scroll opacity-0">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Interior work",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200"
              },
              {
                title: "Custom wooden furniture",
                image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
              },
              {
                title: "Wooden Flooring",
                image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200"
              },
              {
                title: "Doors & windows",
                image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200"
              },
              {
                title: "Wooden Wall Cladding",
                image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200"
              },
              {
                title: "Wall pannelling",
                image: "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?q=80&w=1200"
              },
              {
                title: "Doom works",
                image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1200"
              },
              {
                title: "Custom wooden stairs",
                image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1200"
              },
            ].map(({ title, image }, index) => (
              <div
                key={title}
                className="group relative overflow-hidden aspect-square animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy" // Add lazy loading for images
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

      {/* Process Section */}
      <section id="process" className="py-20 bg-neutral-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light mb-12 animate-on-scroll opacity-0">
            Our Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {[
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
            ].map((step, index) => (
              <div
                key={step.title}
                className="flex gap-8 items-start animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-4xl font-light text-brand-primary">0{index + 1}</span>
                <div>
                  <h3 className="text-2xl font-light mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <WorkSection />

      {/* Contact Section */}
      <Footer />

    </div>
  );
};

export default Index;
