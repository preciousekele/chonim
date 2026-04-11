import { useState } from "react";

const images = [
  {
    id: 1,
    src: "/gallery3.jpeg",
    alt: "Family moment under pergola",
  },
  {
    id: 2,
    src: "/chonim2.jpg",
    alt: "Couple portrait outdoors",
  },
  {
    id: 3,
    src: "/gallery11.jpeg",
    alt: "Elegant portrait with keyboard",
  },
  {
    id: 4,
    src: "/chonim12.jpeg",
    alt: "Studio portrait with flower",
  },
  {
    id: 5,
    src: "/gallery8.jpeg",
    alt: "Couple close portrait",
  },
  {
    id: 6,
    src: "/gallery10.jpeg",
    alt: "Portrait outdoors",
  },
  {
    id: 7,
    src: "/gallery6.jpeg",
    alt: "Romantic embrace outdoors",
  },
  {
    id: 8,
    src: "/gallery14.jpeg",
    alt: "Candid laughter moment",
  },
  {
    id: 9,
    src: "/gallery12.jpeg",
    alt: "Sunset couple portrait",
  },
  {
    id: 10,
    src: "/gallery13.jpeg",
    alt: "Elegant wedding attire",
  },
  {
    id: 11,
    src: "/gallery9.jpeg",
    alt: "Hands intertwined",
  },
  {
    id: 12,
    src: "/chonim10.jpeg",
    alt: "Joyful celebration",
  },
  {
    id: 13,
    src: "/gallery15.jpeg",
    alt: "Joyful celebration",
  },
  {
    id: 13,
    src: "/gallery5.jpeg",
    alt: "Joyful celebration",
  },
  {
    id: 13,
    src: "/gallery16.jpeg",
    alt: "Joyful celebration",
  },
];

export default function Moments() {
  const [lightbox, setLightbox] = useState(null);

  const currentIndex = lightbox
    ? images.findIndex((i) => i.id === lightbox.id)
    : -1;

  const goPrev = (e) => {
    e.stopPropagation();
    setLightbox(images[(currentIndex - 1 + images.length) % images.length]);
  };

  const goNext = (e) => {
    e.stopPropagation();
    setLightbox(images[(currentIndex + 1) % images.length]);
  };

  return (
    <div
      className="min-h-screen bg-neutral-950"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@100;200;300&display=swap');
      `}</style>

      {/* ── Header ── */}
      <div className="flex flex-col items-center pt-8 pb-6 px-6">
        <h1
          className="text-gray-300 font-light leading-none uppercase tracking-[0.18em] text-6xl md:text-8xl"
          style={{
                  letterSpacing: "0.02em",
                  fontFamily: "'Vonique64', serif",
                  lineHeight: 0.8,
                  fontWeight: 100,
                  fontSize: "clamp(.5rem, 5vw, 9rem)",
                }}
        >
          Moments
        </h1>

        <div className="w-10 h-px bg-white/30 mt-2" />
      </div>

      {/* ── Gallery Grid ── */}
      {/*
        Mobile  : 1 column
        Desktop : 3 columns × 2 rows
        Gap     : 1px — achieved with gap-px + bg-neutral-950 on the grid
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px] bg-neutral-950">
        {images.map((img) => (
          <div
            key={img.id}
            role="button"
            tabIndex={0}
            aria-label={`View ${img.alt}`}
            onClick={() => setLightbox(img)}
            onKeyDown={(e) => e.key === "Enter" && setLightbox(img)}
            className="relative overflow-hidden cursor-pointer h-106 md:h-130 group"
          >
            {/* Photo */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Hover veil */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* ── Footer ── */}
      <div className="py-8 text-center">
        <p
          className="text-white/20 uppercase tracking-[0.35em] text-[10px]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Every frame, a story
        </p>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            aria-label="Close lightbox"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-6 text-white/50 hover:text-white text-4xl font-thin leading-none transition-colors duration-200"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ×
          </button>

          {/* Prev arrow */}
          <button
            aria-label="Previous image"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl px-3 py-2 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all duration-200"
          >
            ‹
          </button>

          {/* Main image */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] object-contain"
          />

          {/* Next arrow */}
          <button
            aria-label="Next image"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl px-3 py-2 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all duration-200"
          >
            ›
          </button>

          {/* Counter */}
          <p
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 uppercase tracking-[0.35em] text-[9px]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </div>
  );
}