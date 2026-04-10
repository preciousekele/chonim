import { ArrowBigDown, MousePointerClick } from "lucide-react";

const streams = [
  {
    platform: "Instagram",
    handle: "@choko_gabriel",
    link: "https://www.instagram.com/choko_gabriel?igsh=MXZzbjhqcWw5cjgxNQ==",
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
    link: "https://youtube.com/@chokogabriel?si=M3dbE0fFDJDh47U3",
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
    <div
      className="relative h-full w-full bg-white overflow-hidden flex flex-col items-center justify-center px-6 py-8 md:py-16"
      style={{ paddingBottom: "60px", height: "100vh" }}
    >
      <div
        style={{
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
            fontFamily: "'Kugile', serif",
            fontWeight: 400,
            lineHeight: 0.8,
            letterSpacing: "0.12em",
            fontSize: "clamp(1.1rem, 6vw, 1.6rem)",
            color: "#6B1525",
          }}
        >
          Live Streaming
        </h1>

        {/* Subtext */}
        <p
          className="text-gray-600 text-center mb-20"
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 300,
            fontSize: "clamp(14px, 2vw, 14px)",
            letterSpacing: "0.25em",
          }}
        >
          To all our Family and Friends across the globe who can’t 
          be with us in person, join the celebration via YouTube or Instagram!
        </p>

        {/* Date + Times */}
        <div className="flex flex-col items-center gap-2 mb-20">
          <p
            className="uppercase text-black text-center"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 500,
              fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
              letterSpacing: "0.1em",
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
                    fontSize: "clamp(11px, 1.8vw, 10px)",
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
                    fontSize: "clamp(15px, 1.5vw, 15px)",
                    fontWeight: 500,
                  }}
                >
                  {t.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Click to join CTA */}
        <div className="flex items-center gap-2 mb-3">
          <ArrowBigDown
            size={14}
            strokeWidth={1.5}
            className="text-[#6B1525]"
          />
          <p
            className="uppercase tracking-widest"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 300,
              fontSize: "11px",
              letterSpacing: "0.35em",
              color: "#6B1525",
            }}
          >
            Click to join us live
          </p>
          <ArrowBigDown
            size={14}
            strokeWidth={1.5}
            className="text-[#6B1525]"
          />
        </div>

        {/* Stream Buttons */}
        <div
          className="flex items-center gap-4 mb-18"
          style={{
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
                    fontSize: "clamp(12px, 2.5vw, 13px)",
                    fontWeight: 500,
                  }}
                >
                  {s.platform}
                </p>
                <p
                  className="text-gray-500 tracking-widest"
                  style={{
                    fontSize: "clamp(11px, 2vw, 12px)",
                    fontWeight: 400,
                  }}
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
              fontSize: "13px",
              fontWeight: 300,
              letterSpacing: "0.35em",
            }}
          >
            Wedding Hashtag
          </p>
          <p
            className="text"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 100,
              fontSize: "clamp(1.3rem, 3vw, 2.5rem)",
              letterSpacing: "0.1em",
              fontStyle: "italic",
              color: "#7A520F",
            }}
          >
            #Alovewhichknowsnoending
          </p>
        </div>
      </div>
    </div>
  );
}
