
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WorkSection = () => {
  const projects = [
    {
      title: "Luxury Villa Interior",
      category: "Residential",
      image: "/lovable-uploads/4864b2ce-baa1-440f-a436-fabb00aa1ee5.png",
      slug: "modern-villa"
    },
    {
      title: "Modern Staircase",
      category: "Interior",
      image: "/lovable-uploads/68691944-df17-4438-9a10-bffe40b0a7be.png",
      slug: "modern-staircase"
    },
    {
      title: "Contemporary Design",
      category: "Residential",
      image: "/lovable-uploads/1036c223-a137-40d6-9aba-4ce1b9d3570f.png",
      slug: "contemporary-design"
    },
    {
      title: "Elegant Stairway",
      category: "Interior",
      image: "/lovable-uploads/e8d269a3-ff02-4038-8703-31d1b6ab1a7f.png",
      slug: "elegant-stairway"
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
            <Link
              to={`/project/${project.slug}`}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
