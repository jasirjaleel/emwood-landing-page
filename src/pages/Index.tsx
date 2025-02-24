import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import WorkSection from "@/components/WorkSection";
import { ArrowRight, Phone, Mail, MapPin, Instagram } from "lucide-react";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
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

    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", scrollHandler);
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
          <h2 className="font-display text-6xl md:text-7xl text-neutral-dark font-light mb-12 animate-on-scroll opacity-0">
            OUR SERVICES
          </h2>
          <h3 className="text-3xl md:text-4xl text-brand-primary mb-12 animate-on-scroll opacity-0">
            COMPLETE CUSTOMIZATION OF WOODEN INTERIOR
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 animate-on-scroll opacity-0">
              <img
                src="/lovable-uploads/1ebc95f6-bf61-4f87-b4ac-89d029254bf8.png"
                alt="Wooden Panneling"
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
              <h4 className="text-xl font-light">WOODEN PANNELING</h4>
            </div>
            <div className="space-y-4 animate-on-scroll opacity-0">
              <img
                src="/lovable-uploads/af3d9a13-4590-48cb-a2b2-f9e796874668.png"
                alt="Wooden Wardrobses"
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
              <h4 className="text-xl font-light">WOODEN WARDROBSES</h4>
            </div>
            <div className="space-y-4 animate-on-scroll opacity-0">
              <img
                src="/lovable-uploads/7e86397f-7ac8-410a-b04f-4de74d8428db.png"
                alt="Wooden Flooring"
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
              <h4 className="text-xl font-light">WOODEN FLOORING</h4>
            </div>
            <div className="space-y-4 animate-on-scroll opacity-0">
              <img
                src="/lovable-uploads/038e46a6-e8b8-417f-a256-46de3ef141c9.png"
                alt="Custom Doors & Windows"
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
              <h4 className="text-xl font-light">CUSTOM DOORS & WINDOWS</h4>
            </div>
          </div>
          <div className="mt-16 text-2xl text-brand-primary animate-on-scroll opacity-0">
            TREATED & NON-TREATED WOODS
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

      {/* Vision Section */}
      <section className="py-20 bg-neutral-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-6xl md:text-7xl text-neutral-dark font-light mb-12 animate-on-scroll opacity-0">
            OUR VISION
          </h2>
          <div className="max-w-4xl">
            <p className="text-xl leading-relaxed animate-on-scroll opacity-0">
              Emwoods is not just a business—it's a movement. In a few years, this name will stand among the biggest brands in the industry. The craftsmanship, the passion, and the vision we bring will make Emwoods a symbol of excellence. Today, we build with our hands—but soon, the world will recognize our work. This is just the beginning
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Footer />

    </div>
  );
};

export default Index;
