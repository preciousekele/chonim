// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// export default function VideoHero() {
//   const CARD_WIDTH = "80vw";
//   const CARD_HEIGHT = "80vh";
//   const CLOUD = "da9ttdyye";

//   const [isMobile, setIsMobile] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const mq = window.matchMedia("(max-width: 768px)");
//     setIsMobile(mq.matches);
//     const handler = (e) => setIsMobile(e.matches);
//     mq.addEventListener("change", handler);
//     return () => mq.removeEventListener("change", handler);
//   }, []);

//   // Use streaming-friendly Cloudinary flags instead of q_100
//   const videoSrc = isMobile
//     ? `https://res.cloudinary.com/${CLOUD}/video/upload/q_auto,f_auto,vc_auto/bgMobile_zby2cb.mp4`
//     : `https://res.cloudinary.com/${CLOUD}/video/upload/q_auto,f_auto,vc_auto/bgvid_gvf00c.mp4`;

//   // Force play imperatively — React's autoPlay is unreliable on iOS Safari
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;
//     video.muted = true; // must be set before .play() on iOS
//     const playPromise = video.play();
//     if (playPromise !== undefined) {
//       playPromise.catch(() => {
//         // Autoplay was prevented — silently fail, video stays paused
//       });
//     }
//   }, [videoSrc]); // re-trigger when source switches mobile ↔ desktop

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         height: "100svh",
//         overflow: "hidden",
//         background: "#000",
//       }}
//     >
//       <video
//         ref={videoRef}
//         key={videoSrc}
//         muted
//         loop
//         playsInline
//         // Add webkit attribute for older iOS versions
//         webkit-playsinline="true"
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           objectFit: "cover",
//           zIndex: 1,
//           width: isMobile ? "100%" : CARD_WIDTH,
//           height: isMobile ? "100%" : CARD_HEIGHT,
//           borderRadius: isMobile ? "0" : "1rem",
//           marginTop: isMobile ? "0" : "45px",
//         }}
//       >
//         <source src={videoSrc} type="video/mp4" />
//       </video>

//       <div
//         style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)", zIndex: 2 }}
//       />

//       <motion.div
//         initial={{ opacity: 0, y: 24 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
//         style={{
//           position: "absolute",
//           inset: 0,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           zIndex: 3,
//         }}
//       >
//         <h1
//           style={{
//             fontFamily: "'Kugile', serif",
//             fontWeight: 100,
//             color: "white",
//             textAlign: "center",
//             textShadow: "0 4px 32px rgba(0,0,0,0.6)",
//             letterSpacing: "0.05em",
//             fontSize: isMobile ? "clamp(27px, 12vw, 12px)" : "clamp(36px, 5vw, 72px)",
//             lineHeight: isMobile ? 1.8 : 1.4,
//           }}
//         >
//           We are getting Married!!!
//         </h1>
//       </motion.div>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function VideoHero() {
  const CARD_WIDTH = "80vw";
  const CARD_HEIGHT = "80vh";

  const [isMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
  const video = videoRef.current;
  if (!video) return;
  video.muted = true;

  const tryPlay = () => {
    video.play().catch(() => {});
  };

  video.addEventListener("canplay", tryPlay, { once: true });

  tryPlay();

  return () => video.removeEventListener("canplay", tryPlay);
}, [videoSrc]);

  const videoSrc = isMobile ? "/bgMobile_opt.mp4" : "/bgvid_opt.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, [videoSrc]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100svh", overflow: "hidden", background: "#000" }}>
      <video
        ref={videoRef}
        key={videoSrc}
        muted
        loop
        playsInline
        webkit-playsinline="true"
        preload="auto"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
          zIndex: 1,
          width: isMobile ? "100%" : CARD_WIDTH,
          height: isMobile ? "100%" : CARD_HEIGHT,
          borderRadius: isMobile ? "0" : "1rem",
          marginTop: isMobile ? "0" : "45px",
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)", zIndex: 2 }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <h1
          style={{
            fontFamily: "'Kugile', serif",
            fontWeight: 100,
            color: "white",
            textAlign: "center",
            textShadow: "0 4px 32px rgba(0,0,0,0.6)",
            letterSpacing: "0.05em",
            ...(isMobile
              ? { fontSize: "clamp(27px, 12vw, 12px)", lineHeight: 1.8 }
              : { fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.4 }),
          }}
        >
          We are getting Married!!!
        </h1>
      </motion.div>
    </div>
  );
}
