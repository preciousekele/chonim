import { motion } from "framer-motion";

import photo1 from "/chonim11.jpeg";
import photo2 from "/chonim2.jpg";
import photo3 from "/chonim8.jpeg";
import photo4 from "/chonim4.jpeg";

const myPhotos = [photo1, photo2, photo3, photo4];

const slots = [
  {
    id: 1,
    layer: "back",
    startLeft: "3%",
    delay: 0,
    duration: 5,
    horizontalMove: 450,
    rotation: 360,
  },
  {
    id: 2,
    layer: "front",
    startLeft: "18%",
    delay: 1.5,
    duration: 7,
    horizontalMove: -450,
    rotation: -360,
  },
  {
    id: 3,
    layer: "back",
    startLeft: "35%",
    delay: 0.5,
    duration: 6,
    horizontalMove: 100,
    rotation: 360,
  },
  {
    id: 4,
    layer: "front",
    startLeft: "50%",
    delay: 2,
    duration: 9,
    horizontalMove: -450,
    rotation: -360,
  },
  {
    id: 5,
    layer: "back",
    startLeft: "65%",
    delay: 1,
    duration: 4,
    horizontalMove: 450,
    rotation: 360,
  },
  {
    id: 6,
    layer: "front",
    startLeft: "78%",
    delay: 2,
    duration: 6,
    horizontalMove: -120,
    rotation: -360,
  },
  {
    id: 7,
    layer: "back",
    startLeft: "88%",
    delay: 0.8,
    duration: 4,
    horizontalMove: 160,
    rotation: 360,
  },
  {
    id: 8,
    layer: "front",
    startLeft: "10%",
    delay: 2,
    duration: 8,
    horizontalMove: -140,
    rotation: -360,
  },
  {
    id: 9,
    layer: "back",
    startLeft: "55%",
    delay: 1.5,
    duration: 6,
    horizontalMove: 110,
    rotation: 360,
  },
  {
    id: 10,
    layer: "front",
    startLeft: "42%",
    delay: 2.5,
    duration: 7,
    horizontalMove: -160,
    rotation: -360,
  },
  {
    id: 11,
    layer: "back",
    startLeft: "20%",
    delay: 0,
    duration: 5,
    horizontalMove: 160,
    rotation: 360,
  },
];

const photoSizes = {
  0: "clamp(60px, 8vw, 100px)",
  1: "clamp(60px, 8vw, 100px)",
  2: "clamp(110px, 14vw, 160px)",
  3: "clamp(80px, 10vw, 120px)",
};

function FallingPhoto({ slot, src, size }) {
  const zIndex = slot.layer === "front" ? 30 : 10;

  return (
    <motion.div
      initial={{ y: "-15vh", x: 0, opacity: 1, rotate: 0 }}
      animate={{
        y: "115vh",
        x: slot.horizontalMove,
        opacity: 1,
        rotate: [0, slot.rotation * 0.5, slot.rotation],
      }}
      transition={{
        duration: slot.duration,
        delay: slot.delay,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        x: {
          duration: slot.duration,
          repeat: Infinity,
          repeatType: "loop",
          delay: slot.delay,
          ease: "easeInOut",
        },
        rotate: {
          times: [0, 0.5, 1],
          duration: slot.duration,
          repeat: Infinity,
          repeatType: "loop",
          delay: slot.delay,
          ease: "linear",
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: slot.startLeft,
        zIndex,
        pointerEvents: "none",
        willChange: "transform",
        mixBlendMode: "multiply",
      }}
    >
      <div
        style={{
          width: size,
          aspectRatio: "3/4",
          background: "#ffffff",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
        }}
      >
        <img
          src={src}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            mixBlendMode: "multiply",
          }}
        />
      </div>
    </motion.div>
  );
}

const streams = [
  {
    platform: "Instagram",
    handle: "@choko_gabriel",
    link: "https://instagram.com/live",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#igGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <defs>
          <linearGradient id="igGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="#dc2743" stroke="none" />
      </svg>
    ),
  },
  {
    platform: "YouTube",
    handle: "@chokogabriel",
    link: "https://youtube.com/live",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FF0000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="#FF0000"
          stroke="none"
        />
      </svg>
    ),
  },
];

export default function Streaming() {
  return (
    <div className="relative w-full bg-white overflow-hidden flex flex-col items-center justify-center px-6 py-8 md:py-16">
      {/* LAYER 1 — photos behind content */}
      {slots
        .filter((s) => s.layer === "back")
        .map((slot) => {
          const photoIndex = (slot.id - 1) % myPhotos.length;
          return (
            <FallingPhoto
              key={slot.id}
              slot={slot}
              src={myPhotos[photoIndex]}
              size={photoSizes[photoIndex]}
            />
          );
        })}

      {/* LAYER 2 — original content, untouched, z-index 20 */}
      <div
        style={{
          zIndex: 20,
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Header */}
        <h1
          className="uppercase text-black text-center mb-4"
          style={{
            fontFamily: "'Vonique64', serif",
            fontWeight: 100,
            lineHeight: 0.8,
            letterSpacing: "0.02em",
            fontSize: "clamp(1.8rem, 5vw, 9rem)",
          }}
        >
          Live Streaming
        </h1>

        {/* Subtext */}
        <p
          className="text-gray-400 text-center mb-20"
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 300,
            fontSize: "clamp(10px, 2vw, 14px)",
            letterSpacing: "0.25em",
          }}
        >
          Join us live wherever you are
        </p>

        {/* Date + Times */}
        <div className="flex flex-col items-center gap-2 mb-20">
          <p
            className="uppercase text-black text-center"
            style={{
              fontFamily: "'Vonique64', serif",
              fontWeight: 600,
              fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
              letterSpacing: "0.15em",
            }}
          >
            Saturday, 25th JULY 2026
          </p>

          <div className="flex flex-row items-center gap-4 mt-4">
            {[
              { label: "West Africa Time", time: "00:00 WAT" },
              { label: "United Kingdom", time: "00:00 BST" },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-1">
                <span
                  className="uppercase text-gray-400 tracking-widest"
                  style={{
                    fontSize: "clamp(7px, 1.8vw, 10px)",
                    fontWeight: 300,
                    letterSpacing: "0.3em",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {t.label}
                </span>
                <span
                  className="text-gray-800 tracking-widest"
                  style={{
                    fontSize: "clamp(11px, 1.5vw, 15px)",
                    fontWeight: 500,
                  }}
                >
                  {t.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stream Buttons */}
        <div
          className="flex items-center gap-4 mb-18"
          style={{
            position: "relative",
            zIndex: 70,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {streams.map((s) => (
            <a
              key={s.platform}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-200 hover:border-gray-400 transition-colors duration-300 group"
              style={{
                padding: "clamp(8px, 2vw, 16px) clamp(12px, 3vw, 40px)",
              }}
            >
              <span className="text-gray-400 group-hover:text-gray-700 transition-colors duration-300">
                {s.icon}
              </span>
              <div>
                <p
                  className="uppercase text-gray-900 tracking-widest"
                  style={{
                    fontSize: "clamp(10px, 2.5vw, 13px)",
                    fontWeight: 500,
                  }}
                >
                  {s.platform}
                </p>
                <p
                  className="text-gray-500 tracking-widest"
                  style={{ fontSize: "clamp(9px, 2vw, 12px)", fontWeight: 400 }}
                >
                  {s.handle}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Hashtag */}
        <div className="flex flex-col items-center gap-2 border-t border-gray-100 pt-10 w-full max-w-xs text-center">
          <p
            className="uppercase text-gray-400 tracking-widest"
            style={{
              fontSize: "10px",
              fontWeight: 300,
              letterSpacing: "0.35em",
            }}
          >
            Wedding Hashtag
          </p>
          <p
            className="text-black"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 100,
              fontSize: "clamp(1.2rem, 3vw, 2.5rem)",
              letterSpacing: "0.1em",
              fontStyle: "italic",
            }}
          >
            #ChokoWedsNimechi
          </p>
        </div>
      </div>

      {/* LAYER 3 — photos in front of content */}
      {slots
        .filter((s) => s.layer === "front")
        .map((slot) => {
          const photoIndex = (slot.id - 1) % myPhotos.length;
          return (
            <FallingPhoto
              key={slot.id}
              slot={slot}
              src={myPhotos[photoIndex]}
              size={photoSizes[photoIndex]}
            />
          );
        })}
    </div>
  );
}
