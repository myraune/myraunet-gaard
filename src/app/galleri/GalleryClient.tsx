"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { galleryCategories, galleryImages } from "@/lib/content";

export default function GalleryClient() {
  const [category, setCategory] = useState("alle");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images =
    category === "alle"
      ? galleryImages
      : galleryImages.filter((image) => image.category === category);

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
      if (event.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (event.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + images.length) % images.length,
        );
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, images.length]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-border pb-6">
        {galleryCategories.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setCategory(item.id);
              setOpenIndex(null);
            }}
            className={`min-h-[44px] px-5 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors ${
              category === item.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden"
            aria-label={`Åpne bilde: ${image.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && images[openIndex] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-dark/97 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Lukk"
            onClick={() => setOpenIndex(null)}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center text-cream hover:text-white md:right-8 md:top-8"
          >
            <X className="h-7 w-7" />
          </button>

          <figure
            className="max-h-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              className="max-h-[80vh] w-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/70">
              {images[openIndex].alt} ({openIndex + 1} av {images.length})
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
