import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

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

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-cream">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/57921786-ea7c-43c4-b279-c4ccd2e0ecd6.png"
            alt="Interior Design"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-cream/80 to-neutral-cream/95" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 animate-fade-up">
            Dream, develop,{" "}
            <span className="text-brand-primary font-normal">decor.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            At EMWOODS, we turn your dreams into reality. From the initial spark of inspiration to the final touches that bring your space to life.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-8 animate-on-scroll opacity-0">
              About <span className="text-brand-primary">us</span>
            </h2>
            <p className="text-gray-600 mb-6 animate-on-scroll opacity-0">
              At EMWOODS, we believe that the essence of a home lies in its details, and nothing speaks to warmth and elegance like the timeless appeal of wood. Rooted in a passion for craftsmanship, EMWOODS has emerged as a trusted name in the wooden interior sector, transforming spaces with our exquisite range of products.
            </p>
            <p className="text-gray-600 animate-on-scroll opacity-0">
              From classic designs to contemporary styles, our collections are curated with an eye for quality and sustainability. With a deep commitment to excellence, we work closely with our clients to bring their dreams to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-neutral-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center animate-on-scroll opacity-0">
            Our <span className="text-brand-primary">services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Interior work",
              "Custom wooden furniture",
              "Wooden Flooring",
              "Doors & windows",
              "Wooden Wall Cladding",
              "Wall pannelling",
              "Doom works",
              "Custom wooden stairs",
            ].map((service, index) => (
              <div
                key={service}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-medium mb-2">{service}</h3>
                <ArrowRight className="text-brand-primary mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center animate-on-scroll opacity-0">
            Our <span className="text-brand-primary">process</span>
          </h2>
          <div className="max-w-4xl mx-auto">
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
                className="mb-8 last:mb-0 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center animate-on-scroll opacity-0">
            Contact <span className="text-brand-primary">us</span>
          </h2>
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-brand-primary" />
                  <span>+91 95 62 4203 59</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-brand-primary" />
                  <span>emwoods@gmai.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-brand-primary" />
                  <span>Chentrappinni, Thrissur</span>
                </div>
              </div>
              <div>
                <img
                  src="/lovable-uploads/6aba4b4e-7f2e-4fea-96ec-7e34abec2cf0.png"
                  alt="EMWOODS"
                  className="h-16 mb-4"
                />
                <p className="text-gray-600">
                  Transform your space with EMWOODS. Contact us today to begin your journey towards exceptional interior design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
