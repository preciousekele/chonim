import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.8;

    const handleInteraction = () => {
      audio.muted = false;
      audio.play().catch(() => {});

      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);  // ← mobile touch
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);  // ← mobile touch
    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("scroll", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);

  return <audio ref={audioRef} src="/music/background.mp3" loop />;
}