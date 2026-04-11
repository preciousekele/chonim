import { useEffect, useRef } from "react";

const profiles = [
  //   {
  //     name: "CHOKO",
  //     side: "left",
  //     imageSrc: "/chonim5.jpeg",
  //     igLink: "https://instagram.com/choko",
  //     description:
  //       "Choko is a loving and audacious soul, with a heart deeply rooted in faith. A natural leader who brings people together, his adventurous spirit balances with a deep, compassionate love that makes him the rock for his family.",
  //     connectLabel: "Connect with Choko",
  //   },
  {
    name: "NIMECHI",
    side: "right",
    imageSrc: "/chonim6.jpeg",
    igLink:
      "https://www.instagram.com/anomnimechi?igsh=NWdmYzBwM3Npdngy&utm_source=qr",
    connectLabel: "Connect with Nimechi",
    description: <NimechiStory />,
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
              className="w-full h-full object-cover scale-100"
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
            className="leading-relaxed text-lg md:text-3xl text-justify"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              color: "#6B1525",
            }}
          >
            {profile.description}
          </p>

          <a
            href={profile.igLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base tracking-widest border-b border-gray-900 pb-0.5 w-fit hover:text-gray-700 hover:border-gray-900 transition-colors duration-300"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              color: "#a0666f",
              borderColor: "#d4a0a8",
            }}
          >
            {profile.connectLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

function NimechiStory() {
  return (
    <div className="flex flex-col gap-0 w-full">
      <style>{`
        .dialogue-line {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          font-weight: 300;
          color: #6B1525;
          border-left: 1.5px solid #d4a0a8;
          padding-left: 1rem;
          margin: 0.6rem 0;
          display: block;
        }
        .chapter-head {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(1.05rem, 2.5vw, 1.3rem);
          font-weight: 500;
          color: #6B1525;
          border-left: 2px solid #d4a0a8;
          padding-left: 1rem;
          margin: 1.8rem 0 0.9rem;
          line-height: 1.4;
        }
        .story-divider {
          width: 50px;
          height: 1px;
          background: #d4a0a8;
          margin: 1.5rem 0;
        }
        .story-p {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: clamp(0.9rem, 2vw, 1rem);
          line-height: 1.95;
          color: #5a1020;
          margin-bottom: 0.75rem;
          text-align: justify;
        }
        .aside-text { color: #6d4148; }
        @media (max-width: 640px) {
          .story-p { text-align: left; }
        }
      `}</style>

      {/* Opening */}
      <p className="story-p" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>
        <strong style={{ fontStyle: "normal", color: "#6B1525" }}>"In the most ordinary moment… God was writing something extraordinary."</strong>
      </p>

      <div className="story-divider" />

      <p className="story-p">It was a Monday morning — the 17th of September, 2024. I was heading back to the UK from Nigeria, fresh from my immediate elder sister's wedding. The whole trip had been full — love, family, celebration… and then suddenly, it was over.</p>
      <p className="story-p">By the time we landed in London that evening, my mind was on one thing: cross immigration, pick my bags, and continue my journey. Nothing fancy. No expectations.</p>
      <p className="story-p">And let me be honest — <span className="aside-text">I was not looking my stunning self at all. I didn't look like a lady ready to be toasted 😩🤣.</span> I wore whatever I could find that morning. No effort, no coordination… just survival mode.</p>
      <p className="story-p">At the baggage carousel, something caught my attention. I saw Apostle Joshua Selman, Pastor Kayode, Lekan, and a few familiar Koinonia faces. Immediately, my energy changed — imagine being on the same flight and only realising after landing! So there I stood, too shy to even go and greet Apostle.</p>
      <p className="story-p">One by one, the crowd reduced. Then this young man walked up to me and said, jokingly:</p>
      <span className="dialogue-line">"It seems they left our bags in Abuja."</span>
      <p className="story-p">I didn't even think twice —</p>
      <span className="dialogue-line">"Please oh! Nigeria cannot happen to us."</span>
      <p className="story-p">We both laughed. And just like that… a conversation started.</p>

      <div className="story-divider" />
      <div className="chapter-head">From small talk… to something more.</div>

      <p className="story-p">I asked if he lived in the UK — he said no, he had come for a conference. I told him I live here, but had come back only for my sister's wedding and was already heading back early for Sound of Revival. He was surprised. <span className="aside-text">(As a doctor, when you cancel last minute, it disrupts everyone's day… how much more the house of God? But of course, he didn't know all that about me yet.)</span></p>
      <p className="story-p">And then we realised — we were both there for the same conference. That instant ease. That familiar feeling.</p>
      <p className="story-p">Then our bags came out. The moment was ending. But something in me didn't want it to just pass like that. So I asked for his number — just to make sure he got to where he was staying safely. We said our goodbyes with a simple hope: <em>"See you at the conference".</em></p>

      <div className="story-divider" />
      <div className="chapter-head">A second look… and a surprise.</div>

      <p className="story-p">The next morning, I sent a quick check-in. He replied kindly. At the conference, we saw each other briefly — just a "hello, hi." Until the last day.</p>
      <p className="story-p">I was doing my patrol medical duties, minding my business, when I looked up — and there he was. On the keyboard. I actually paused. <em>Wait… what is He doing there???</em></p>
      <span className="dialogue-line">"Surprise surprise… I just saw you on the keyboard. I didn't know you were 'Apostle's Keyboardist' 🤣🤣🤣 — I would not even pass you for someone that sings or likes music 😂😂😂."</span>
      <p className="story-p">He replied, laughing, saying I was partially right — he doesn't even sing. I said:</p>
      <span className="dialogue-line">"So what is the mic doing in front of you then???"</span>
      <p className="story-p">He explained… and honestly, that was the end of that conversation. Or so I thought.</p>

      <div className="story-divider" />
      <div className="chapter-head">The conversation that changed everything.</div>

      <p className="story-p">The next day, I checked in again. And he said something simple… but it stayed with me:</p>
      <span className="dialogue-line">"We didn't even get to talk…"</span>
      <p className="story-p">And it was true. So when he asked if he could call me after work, I said okay.</p>
      <p className="story-p">That call… was not a small call. We spoke from around 10pm till 4am. Non-stop. I still can't fully explain it, but it just felt easy. Natural. Peaceful. Like something was aligning without effort. We laughed. We talked. We cried — oh yes we did! We connected… properly this time.</p>
      <p className="story-p">And somewhere between 10pm and 4am… God quietly began writing our story.</p>

      <div className="story-divider" />
      <div className="chapter-head" style={{ borderLeft: "none", paddingLeft: 0 }}>The beginning of forever.</div>

      <p className="story-p" style={{ textAlign: "center" }}>
        A random Monday. An airport. A joke about missing bags.<br />
        Nothing planned. Nothing staged.<br />
        But somehow, in that very ordinary moment… God was already at work.<br /><br />
        <em>And the rest, as they say, is history 🤍</em>
      </p>
    </div>
  );
}


export default function ConnectNim() {
  return (
    <main className="bg-[#EDE4D5] min-h-screen pt-8 md:pt-16 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400&display=swap');
      `}</style>

      {profiles.map((profile, i) => (
        <ProfileCard key={profile.name} profile={profile} index={i} />
      ))}
    </main>
  );
}
