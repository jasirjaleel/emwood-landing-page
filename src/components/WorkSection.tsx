import { ArrowRight } from "lucide-react";

const WorkSection = () => {
  const projects = [
    {
      title: "Modern Villa Interior",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200"
    }
  ];

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-light mb-12 animate-on-scroll opacity-0">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden aspect-[4/3] animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 opacity-0 group-hover:opacity-70" />
              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-sm uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="font-display text-xl font-light mb-2">{project.title}</h3>
                <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          ))}
          
          {/* Coming Soon Placeholders */}
          {[1, 2, 3].map((_, index) => (
            <div
              key={`coming-soon-${index}`}
              className="group relative overflow-hidden aspect-[4/3] animate-on-scroll opacity-0 bg-neutral-cream"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-display text-neutral-dark/50">Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;