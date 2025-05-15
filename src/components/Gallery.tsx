
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/lovable-uploads/341e8010-e1d2-4703-a27a-db94a76da716.png",
    "/lovable-uploads/4e82c70f-08cc-4f5b-8808-2b8d9d2126b9.png",
    "/lovable-uploads/c8e3a652-fb57-42d4-8f76-d08f75c08c7c.png",
    "/lovable-uploads/b94f808e-ec50-4f62-a3b6-2a4097a86fc8.png",
    "/lovable-uploads/8870a062-97fa-4658-859b-1f754f03d544.png",
    "/lovable-uploads/1145064b-4add-4936-b64d-8eb378622169.png",
    "/lovable-uploads/0d05f0e7-3597-45b2-a573-a3d955b33d55.png",
    "/lovable-uploads/58fdada3-06c8-499c-bda2-c6ae1529c2fd.png",
    "/lovable-uploads/IMG-20250420-WA0018.jpg",
    "/lovable-uploads/IMG-20250420-WA0019.jpg",
    "/lovable-uploads/IMG-20250420-WA0020.jpg",
    "/lovable-uploads/IMG-20250420-WA0023.jpg",
    "/lovable-uploads/IMG-20250420-WA0024.jpg",
    "/lovable-uploads/IMG-20250420-WA0025.jpg",
    "/lovable-uploads/IMG-20250420-WA0026.jpg",
    "/lovable-uploads/IMG-20250420-WA0027.jpg",

  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-12 animate-on-scroll opacity-0">
            Our Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={image}
                className="relative aspect-square overflow-hidden cursor-pointer animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`EMWOODS project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 z-50"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={goToPrev}
            className="absolute left-4 text-white p-2 z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-4xl max-h-[80vh] mx-auto">
            <img
              src={images[currentImageIndex]}
              alt={`EMWOODS project ${currentImageIndex + 1}`}
              className="max-h-[80vh] max-w-full object-contain"
            />
          </div>
          
          <button
            onClick={goToNext}
            className="absolute right-4 text-white p-2 z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
