import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function VideoHero() {
  const CARD_WIDTH = "80vw";
  const CARD_HEIGHT = "80vh";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);

    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const videoSrc = isMobile ? "/bgMobile.mp4" : "/bgvid.mp4";

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      {/* VIDEO */}
      <video
        key={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
          zIndex: 1,
          // Mobile: true fullscreen, no card
          width: isMobile ? "100%" : CARD_WIDTH,
          height: isMobile ? "100%" : CARD_HEIGHT,
          borderRadius: isMobile ? "0" : "1rem",
          marginTop: isMobile ? "0" : "45px",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* OVERLAY — desktop only */}
      {!isMobile && (
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.25)", zIndex: 2 }}
        />
      )}

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 3 }}
      >
        <h1
          className="uppercase text-white whitespace-nowrap"
          style={{
            fontSize: "clamp(24px, 8vw, 98px)",
            fontFamily: "'Vonique64', serif",
            fontWeight: 200,
            lineHeight: 1,
            letterSpacing: "0.02em",
            textShadow: "0 4px 32px rgba(0,0,0,0.6)",
          }}
        >
          We Are Getting Married
        </h1>
      </motion.div>
    </div>
  );
}
