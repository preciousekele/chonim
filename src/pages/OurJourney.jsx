"use client";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    year: "How We Met",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/chonim10.jpeg",
  },
  {
    year: "Engagement",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/chonim2.jpg",
  },
  {
    year: "Times Together",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/chonim1.jpg",
  },
];

const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
const total = extendedSlides.length;

export default function OurJourney() {
  const [index, setIndex] = useState(1);
  const [animated, setAnimated] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isDraggingState, setIsDraggingState] = useState(false);
  // Mobile: track which image is being touched for color reveal
  const [touchedImage, setTouchedImage] = useState(null);
  const intervalRef = useRef(null);
  const dragStartX = useRef(null);
  const dragStartY = useRef(null);
  const isDragging = useRef(false);
  const indexRef = useRef(index);
  // We need the viewport height for mobile slide sizing
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    updateVh();
    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    if (index === 0) {
      const timer = setTimeout(() => {
        setAnimated(false);
        setIndex(slides.length);
      }, 1200);
      return () => clearTimeout(timer);
    }
    if (index === total - 1) {
      const timer = setTimeout(() => {
        setAnimated(false);
        setIndex(1);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    if (!animated) {
      const timer = setTimeout(() => setAnimated(true), 50);
      return () => clearTimeout(timer);
    }
  }, [animated]);

  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 8000);
  };

  const stopAutoScroll = () => clearInterval(intervalRef.current);

  useEffect(() => {
    if (!isHovering) startAutoScroll();
    else stopAutoScroll();
    return () => stopAutoScroll();
  }, [isHovering]);

  const goTo = (newIndex) => {
    stopAutoScroll();
    setAnimated(true);
    setIndex(newIndex);
    if (!isHovering) startAutoScroll();
  };

  const handleMouseDown = (e) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
    setIsDraggingState(true);

    const handleMouseUp = (upEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      setIsDraggingState(false);
      const delta = upEvent.clientX - dragStartX.current;
      if (Math.abs(delta) > 40) {
        goTo(delta < 0 ? indexRef.current + 1 : indexRef.current - 1);
      }
      dragStartX.current = null;
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mouseup", handleMouseUp);
  };

  // ── Mobile touch handlers (attached to the slide strip, not the section) ──
  const handleMobileTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
    dragStartY.current = e.touches[0].clientY;
  };

  const handleMobileTouchMove = (e) => {
    if (dragStartX.current === null) return;
    const dx = Math.abs(e.touches[0].clientX - dragStartX.current);
    const dy = Math.abs(e.touches[0].clientY - dragStartY.current);
    // If horizontal movement dominates, prevent vertical scroll
    if (dx > dy && dx > 8) {
      e.preventDefault();
    }
  };

  const handleMobileTouchEnd = (e) => {
    if (dragStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - dragStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(delta < 0 ? indexRef.current + 1 : indexRef.current - 1);
    }
    dragStartX.current = null;
    dragStartY.current = null;
  };

  // Desktop touch (kept as-is for completeness)
  const handleTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (dragStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - dragStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(delta < 0 ? indexRef.current + 1 : indexRef.current - 1);
    }
    dragStartX.current = null;
  };

  // Mobile slide strip ref — needed to attach passive:false touch listeners
  const mobileStripRef = useRef(null);
  useEffect(() => {
    const el = mobileStripRef.current;
    if (!el) return;
    el.addEventListener("touchstart", handleMobileTouchStart, { passive: true });
    el.addEventListener("touchmove", handleMobileTouchMove, { passive: false });
    el.addEventListener("touchend", handleMobileTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", handleMobileTouchStart);
      el.removeEventListener("touchmove", handleMobileTouchMove);
      el.removeEventListener("touchend", handleMobileTouchEnd);
    };
  }, []);

  // Use a fixed pixel height for mobile slides so the strip layout is rock-solid
  const mobileSlideH = vh || 700;

  return (
    <>
      {/* ── MOBILE & TABLET (hidden on md+) ── */}
      <section
        className="relative w-full bg-[#6B1525] overflow-hidden select-none md:hidden"
        style={{ height: mobileSlideH }}
      >
        {/* OUR JOURNEY header — pinned above the strip, always visible */}
        <div className="absolute top-8 left-6 z-30 pointer-events-none">
          <h2
            className="text-gray-700 tracking-widest font-light"
            style={{
              letterSpacing: "0.1em",
              // fontFamily: "'Vonique64', serif",
              fontFamily: "'Kugile', serif",
              lineHeight: 1,
              fontWeight: 200,
              fontSize: "clamp(1.1rem, 6vw, 1.6rem)",
              color: "#EDE4D5",
            }}
          >
            OUR STORY 
          </h2>
        </div>

        {/* Slide strip — touch events attached via ref for passive:false */}
        <div
          ref={mobileStripRef}
          style={{
            display: "flex",
            width: `${total * 100}%`,
            height: "100%",
            transform: `translateX(-${(index * 100) / total}%)`,
            transition: animated
              ? "transform 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)"
              : "none",
            willChange: "transform",
          }}
        >
          {extendedSlides.map((s, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                width: `${100 / total}%`,
                flexShrink: 0,
                height: mobileSlideH,
              }}
            >
              {/* Divider */}
              {i < total - 1 && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    height: "100%",
                    width: "0.5px",
                    background: "#9ca3af",
                    zIndex: 20,
                  }}
                />
              )}

              {/* Text content */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  paddingTop: "5rem",
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                  paddingBottom: "1rem",
                  flexShrink: 0,
                }}
              >
                {/* Year */}
                <div
                  style={{
                    fontSize: "clamp(1rem, 18vw, 1rem)",
                    color: "#b08fa0",
                    letterSpacing: "-0.02em",
                    // fontFamily: "'Vonique64', serif",
                    fontFamily: "'Kugile', serif",
                    lineHeight: 0.88,
                    fontWeight: 80,
                    foontStyle: "italic",
                    textAlign: "right",
                  }}
                >
                  {s.year}
                </div>

                <div style={{ height: "1.25rem" }} />

                {/* Text */}
                <p
                  style={{
                    color: "#EDE4D5",
                    fontFamily: "neue-sans, sans-serif",
                    fontSize: "clamp(0.95rem, 4vw, 1.2rem)",
                    fontWeight: 100,
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {s.text}
                </p>

                <div style={{ height: "1.5rem" }} />
              </div>

              {/* Image — touch to reveal colour */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  marginLeft: "1.5rem",
                  marginRight: "1.5rem",
                  marginBottom: "2rem",
                  flexGrow: 1,
                  borderRadius: "24px",
                }}
                onTouchStart={() => setTouchedImage(i)}
                onTouchEnd={() => setTouchedImage(null)}
              >
                <img
                  src={s.image}
                  alt={`Our Journey ${s.year}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: touchedImage === i ? "none" : "grayscale(100%)",
                    transition: "filter 0.5s ease",
                    userSelect: "none",
                    WebkitUserDrag: "none",
                    borderRadius: "24px",
                  }}
                  draggable={false}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "black",
                    opacity: touchedImage === i ? 0 : 0.35,
                    transition: "opacity 0.5s ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DESKTOP (hidden below md) — untouched ── */}
      <section
        className="relative w-full bg-[#111] overflow-hidden select-none hidden md:block"
        style={{ height: "100vh", cursor: isDraggingState ? "grabbing" : "grab" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          isDragging.current = false;
          setIsDraggingState(false);
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full"
          style={{
            width: `${total * 100}%`,
            transform: `translateX(-${(index * 100) / total}%)`,
            transition: animated
              ? "transform 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)"
              : "none",
            willChange: "transform",
          }}
        >
          {extendedSlides.map((s, i) => (
            <div
              key={i}
              className="relative flex flex-row h-full"
              style={{ width: `${100 / total}%`, flexShrink: 0 }}
            >
              {i < total - 1 && (
                <div
                  className="absolute right-0 top-0 h-full z-20"
                  style={{ width: "0.5px", background: "#9ca3af" }}
                />
              )}

              <div className="absolute top-12 left-12 z-30 pointer-events-none">
                <h2
                  className="text-white tracking-widest font-light"
                  style={{
                    letterSpacing: "0.02em",
                    fontFamily: "'Vonique64', serif",
                    lineHeight: 0.8,
                    fontWeight: 200,
                    fontSize: "clamp(.5rem, 3vw, 3rem)",
                  }}
                >
                  OUR STORY
                </h2>
              </div>

              <div
                className="flex w-1/2 h-full items-center"
                style={{
                  paddingLeft: "11.5rem",
                  paddingRight: "1.5rem",
                  paddingTop: "4.5rem",
                  paddingBottom: "4rem",
                }}
              >
                <div
                  className="flex flex-col justify-center w-full"
                  style={{ height: "60vh" }}
                >
                  <div
                    style={{
                      fontSize: "clamp(2rem, 10vw, 4rem)",
                      color: "#b08fa0",
                      letterSpacing: "-0.02em",
                      fontFamily: "'Vonique64', serif",
                      lineHeight: 0.88,
                      fontWeight: 80,
                    }}
                  >
                    {s.year}
                  </div>

                  <div style={{ height: "clamp(1.5rem, 3vh, 3rem)" }} />

                  <p
                    className="text-white leading-snug"
                    style={{
                      fontFamily: "neue-sans, sans-serif",
                      fontSize: "clamp(1.2rem, 2.2vw, 2.3rem)",
                      maxWidth: "580px",
                      fontWeight: 200,
                    }}
                  >
                    {s.text}
                  </p>
                </div>
              </div>

              <div
                className="flex w-1/2 h-full items-end"
                style={{
                  paddingRight: "3rem",
                  paddingBottom: "4rem",
                  paddingTop: "2.5rem",
                  paddingLeft: "5.8rem",
                }}
              >
                <div
                  className="relative overflow-hidden w-full"
                  style={{ height: "82vh", maxWidth: "550px" }}
                >
                  <img
                    src={s.image}
                    alt={`Our Journey ${s.year}`}
                    className="w-full h-full object-cover"
                    draggable={false}
                    style={{
                      filter: isHovering ? "none" : "grayscale(100%)",
                      transition: "filter 0.5s ease",
                    }}
                  />
                  <div
                    className="absolute inset-0 bg-black transition-opacity duration-500"
                    style={{ opacity: isHovering ? 0 : 0.4 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}