import { useEffect, useRef } from "react";

const profiles = [
  {
    name: "CHOKO",
    side: "left",
    imageSrc: "/chonim5.jpeg",
    igLink: "https://instagram.com/choko",
    description:
      "Choko is a loving and audacious soul, with a heart deeply rooted in faith. A natural leader who brings people together, his adventurous spirit balances with a deep, compassionate love that makes him the rock for his family.",
    connectLabel: "Connect with Choko",
  },
  {
    name: "NIMECHI",
    side: "right",
    imageSrc: "/chonim9.jpeg",
    igLink: "https://instagram.com/nimechi",
    description:
      "Nimechi is the embodiment of kindness, faith, and creativity. With a passion for interiors and design, she transforms spaces into reflections of beauty. Her warm spirit and compassionate heart are a source of joy to everyone she meets.",
    connectLabel: "Connect with Nimechi",
  },
];

function ProfileCard({ profile, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current?.classList.add("opacity-100", "translate-y-0");
          cardRef.current?.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.15 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = profile.side === "left";

  return (
    <section
      ref={cardRef}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out flex items-center justify-center ${
        isLeft ? "pt-12 pb-8" : "pt-16 pb-2"
      } md:py-18 px-5 md:px-16`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`flex flex-col md:flex-row items-center gap-0 md:gap-24 w-full max-w-6xl ${
          !isLeft ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* ── Image Block ── */}
        <div
          className={`relative flex-shrink-0 w-full md:w-[430px] ${
            isLeft
              ? "pb-10 md:pb-0" /* CHOKO  mobile: space below for name | desktop: no padding */
              : "-mt-12 md:pt-0" /* NIMECHI mobile: space above for name | desktop: no padding */
          }`}
        >
          {/* DESKTOP ONLY – name BELOW image (left / CHOKO card) */}
          {isLeft && (
            <div className="hidden md:block absolute -bottom-13 left-32 z-10 pointer-events-none">
              <span
                className="select-none leading-none"
                style={{
                  fontFamily: "'Vonique64', serif",
                  fontSize: "clamp(3rem, 8vw, 5.5rem)",
                  fontWeight: 300,
                  color: "#d4a0a8",
                  letterSpacing: "0.12em",
                }}
              >
                {profile.name}
              </span>
            </div>
          )}

          {/* DESKTOP ONLY – name ABOVE image (right / NIMECHI card) */}
          {!isLeft && (
            <div className="hidden md:block absolute -top-10 right-22 z-10 pointer-events-none">
              <span
                className="select-none leading-none"
                style={{
                  fontFamily: "'Vonique64', serif",
                  fontSize: "clamp(3rem, 8vw, 5.5rem)",
                  fontWeight: 300,
                  color: "#d4a0a8",
                  letterSpacing: "0.12em",
                }}
              >
                {profile.name}
              </span>
            </div>
          )}

          {/* MOBILE ONLY – NIMECHI: name sits in the padded space ABOVE the image */}
          {!isLeft && (
            <div className="md:hidden absolute top-0 -mt-6 left-2 z-10 pointer-events-none -ml-6">
              <span
                className="select-none leading-none"
                style={{
                  fontFamily: "'Vonique64', serif",
                  fontSize: "clamp(2.8rem, 13vw, 3.8rem)",
                  fontWeight: 300,
                  color: "#d4a0a8",
                  letterSpacing: "0.08em",
                }}
              >
                {profile.name}
              </span>
            </div>
          )}

          {/* Photo card */}
          <div className="rounded-[8px] md:rounded-xl overflow-hidden shadow-xl w-full aspect-[3/4] bg-gray-100">
            <img
              src={profile.imageSrc}
              alt={profile.name}
              className="w-full h-full object-cover scale-125"
            />
          </div>

          {/* MOBILE ONLY – CHOKO: name sits in the padded space BELOW the image */}
          {isLeft && (
            <div className="md:hidden absolute bottom-1 right-2 z-10 pointer-events-none -mr-6">
              <span
                className="select-none leading-none"
                style={{
                  fontFamily: "'Vonique64', serif",
                  fontSize: "clamp(2.8rem, 13vw, 3.8rem)",
                  fontWeight: 300,
                  color: "#d4a0a8",
                  letterSpacing: "0.08em",
                }}
              >
                {profile.name}
              </span>
            </div>
          )}
        </div>

        {/* ── Text Block ── */}
        <div className="flex flex-col gap-5 md:gap-6 w-full max-w-[900px] mt-4 md:mt-0">
          <p
            className="text-gray-900 leading-relaxed text-lg md:text-3xl text-justify"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
          >
            {profile.description}
          </p>

          <a
            href={profile.igLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base tracking-widest text-gray-900 border-b border-gray-900 pb-0.5 w-fit hover:text-gray-700 hover:border-gray-900 transition-colors duration-300"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}
          >
            {profile.connectLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Connect() {
  return (
    <main className="bg-[#f9f7f6] min-h-screen pt-2 md:pt-14 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400&display=swap');
      `}</style>

      {profiles.map((profile, i) => (
        <ProfileCard key={profile.name} profile={profile} index={i} />
      ))}
    </main>
  );
}
