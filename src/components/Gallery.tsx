"use client";

import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const images = [
    { src: "/lovable-uploads/ee31250f-77e1-4ef4-9c20-017d220619d6.png", alt: "Gildesalen, innredet for selskap", category: "gildesalen" },
    { src: "/lovable-uploads/9664c9e0-24d8-4a26-8caa-43143ed756de.png", alt: "Grisehuset eksteriør", category: "grisehuset" },
    { src: "/lovable-uploads/e121b0a5-3fbd-4bc1-b30b-77ec795420da.png", alt: "Tradisjonelt gårdsmiljø", category: "gildesalen" },
    { src: "/lovable-uploads/d21b9ac7-9ce5-45e5-9eae-860aa7a09d45.png", alt: "Historisk bilde fra gården", category: "gildesalen" },
    { src: "/lovable-uploads/5f16316b-2f82-427d-a822-701bdb6c99ed.png", alt: "Gården gjennom tiden", category: "gildesalen" },
    { src: "/lovable-uploads/fefc77d2-ff55-4178-affb-c82cac29ec44.png", alt: "Arkivbilde fra Myraunet", category: "gildesalen" },
    { src: "/lovable-uploads/02e53cf1-81be-43b0-acda-0603c8aabe14.png", alt: "Myraunet Gård, oversiktsbilde", category: "natur" },

    { src: "/myraunet-gallery/natur/1.jpg", alt: "Sommer på Myraunet Gård", category: "natur" },
    { src: "/myraunet-gallery/natur/2.jpg", alt: "Naturlandskap rundt gården", category: "natur" },
    { src: "/myraunet-gallery/natur/3.jpg", alt: "Utsikt over Myraunet", category: "natur" },
    { src: "/myraunet-gallery/natur/4.jpg", alt: "Frodig sommer på Frosta", category: "natur" },
    { src: "/myraunet-gallery/natur/5.jpg", alt: "Gårdsomgivelser i grønt", category: "natur" },
    { src: "/myraunet-gallery/natur/6.jpg", alt: "Stille sommerstemning", category: "natur" },

    { src: "/myraunet-gallery/vinter/1.jpg", alt: "Vinterlandskap på Myraunet", category: "vinter" },
    { src: "/myraunet-gallery/vinter/2.jpg", alt: "Snødekt gård", category: "vinter" },
    { src: "/myraunet-gallery/vinter/3.jpg", alt: "Myraunet Gård i vinterdrakt", category: "vinter" },
    { src: "/myraunet-gallery/vinter/4.jpg", alt: "Klar vinterdag på gården", category: "vinter" },
  ];

  const categories = [
    { id: "all", label: "Alle" },
    { id: "gildesalen", label: "Gildesalen" },
    { id: "grisehuset", label: "Grisehuset" },
    { id: "natur", label: "Natur" },
    { id: "vinter", label: "Vinter" },
  ];

  const filteredImages =
    activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-4 md:mb-6 text-foreground">
            Galleri
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            La deg inspirere av våre vakre lokaler og stemningsfulle arrangement
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 min-h-[44px] ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card/50 backdrop-blur-sm text-foreground hover:bg-card hover:scale-105"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer min-h-[44px]"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-6">
                  <p className="text-white text-sm md:text-lg font-serif">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-primary transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt="Fullscreen"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
