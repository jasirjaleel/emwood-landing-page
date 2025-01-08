import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const projectImages = [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200",
    "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-neutral-dark hover:text-brand-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <h1 className="font-display text-4xl md:text-5xl font-light mb-4">
          Modern Villa Interior
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl font-light">
          A sophisticated residential project that seamlessly blends contemporary design with timeless elegance. 
          Our team transformed this villa into a modern sanctuary, focusing on clean lines, natural materials, 
          and thoughtful spatial planning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectImages.map((image, index) => (
            <div 
              key={index}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={image}
                alt={`Modern Villa Interior - Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;