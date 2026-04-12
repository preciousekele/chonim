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
    imageSrc: "/chonim16.jpeg",
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
        className={`flex flex-col md:flex-row items-start gap-0 md:gap-24 w-full max-w-6xl ${
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
          font-size: clamp(1.1rem, 2.5vw, 1.15rem);
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
          font-size: clamp(1.4rem, 2.5vw, 1.5rem);
          font-weight: 500;
          color: #4A0E1A;
          border-left: 2px solid #d4a0a8;
          padding-left: 1rem;
          margin: 1.8rem 0 0.9rem;
          line-height: 1.4;
        }
          .chapter-begining {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.35rem, 2.5vw, 1.5rem);
          font-weight: 500;
          color: #4A0E1A;
          padding-left: .2rem;
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
          font-size: clamp(1.1rem, 2vw, 1rem);
          line-height: 1.75;
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
        <strong style={{ fontStyle: "normal", fontWeight: "500", color: "#4A0E1A", fontSize: "clamp(1.4rem, 2vw, 1rem)" }}>
          "In the most ordinary moment, God was writing something beautiful."
        </strong>
      </p>

      <div className="story-divider" />

      <p className="story-p">It was the morning of 17th September 2024. I was heading back to the UK from Nigeria after my immediate elder sister's wedding. The whole trip had been filled with fun, food, love, and celebration with family and friends. Then suddenly, it was time to return to work and life in the UK.</p>
      <p className="story-p">By the time we landed in London that evening, my mind was on one thing. I just wanted to get through immigration, pick up my bags, and continue my journey. And if I'm being honest, I was not looking my best at all. I wore whatever I could find that morning. No effort, no coordination, just survival. I honestly was not looking "toastable" 😂</p>
      <p className="story-p">At the Heathrow airport baggage carousel, something caught my attention. I saw Apostle Joshua Selman, Pastor Kayode, and a few familiar faces from Koinonia. I became excited immediately. Imagine being on the same flight and only realising after landing. But I was too shy to go and greet them. So I just stood there, waiting for my bags.</p>
      <p className="story-p">The crowd began to reduce. One by one, people picked up their bags and left until only a few of us remained. Then a young man walked up to me and said jokingly:</p>
      <span className="dialogue-line">"It seems they left our bags in Abuja."</span>
      <p className="story-p">I replied immediately</p>
      <span className="dialogue-line">"Please oh, Nigeria cannot happen to us."</span>
      <p className="story-p">We both laughed, and just like that, we started talking...</p>

      <div className="story-divider" />
      <div className="chapter-head">Just a conversation, or so I thought.</div>

      <p className="story-p">I asked if he lived in the UK. He said no. He told me he had come for a conference. I said I lived in the UK, but had travelled to Nigeria and returned early for a conference called Sound of Revival UK. When I told him I had only gone for my sister's wedding and was already heading back, he was surprised. He said that was barely three days.</p>
      <p className="story-p">I explained that I had responsibilities. I was part of the medical workforce in Koinonia UK and had already been placed on the rota. I did not want to cancel or let anyone down. Besides, this was service to God and should not be trivialised. He simply said, <em>"Oh wow."</em></p>
      <p className="story-p">Then we realised we were both attending the same conference. At that point, it became: <em>"Oh my brother! Oh my sister!"</em> There was an instant ease. It felt familiar. It felt like home.</p>
      <p className="story-p">I remember talking excitedly about how I had seen Apostle Joshua Selman and others I recognised from service. I was just talking freely, not even aware of what his own role was.</p>
      <p className="story-p">Then our bags came out, and just like that, the moment was ending. But something in me did not want it to just pass. So we decided to exchange numbers. Nothing serious. I just wanted to make sure he got to where he was staying safely, since he was only visiting the UK. We said our goodbyes with a simple hope:</p>
      <span className="dialogue-line">"See you at the conference."</span>

      <div className="story-divider" />
      <div className="chapter-head">A second meeting and an unexpected surprise.</div>

      <p className="story-p">The next morning, I sent him a message just to check on him. He replied, <em>"I'm well, and you?"</em> At the conference later that day, we saw each other briefly. We exchanged pleasantries, just hello and hi, nothing deep.</p>
      <p className="story-p">Then on the last day, while I was carrying out my duties, patrolling the gallery and ensuring everyone was safe, I looked up and saw him on the keyboard. I paused. I was shocked. I said to myself, <em>what is this guy doing there?</em></p>
      <p className="story-p">So I messaged him after service:</p>
      <span className="dialogue-line">"Surprise, surprise. I just saw you on the keyboard. I didn't know you were into music, interesting." <span className="aside-text">(I still did not put two and two together that he was Apostle's keyboardist.)</span></span>
      <p className="story-p">I even teased him and said I would not have taken him for someone who sings or even likes music. He replied and said I was partially right because he does not sing. I asked:</p>
      <span className="dialogue-line">"So what is the mic doing in front of you?"</span>
      <p className="story-p">He explained… and honestly, that was the end of that conversation. Or so I thought 😁</p>

      <div className="story-divider" />
      <div className="chapter-head">The conversation that changed everything</div>

      <p className="story-p">The next time which was not many days after, I checked in again, at this point they had gotten back to Nigeria. Then he said something simple:</p>
      <span className="dialogue-line">"We didn't even get to talk….."</span>
      <p className="story-p">And it was true. We really didn't. So when he asked if he could call me after work, I said yes.</p>
      <p className="story-p">That call was not a small call, men and brethren 😂😂😂😂. We spoke from around 10pm until 4am, non-stop. That was when I found out, after hours of talking, that he played the keyboard for Apostle Joshua Selman. That midnight call felt easy, natural, and peaceful. We laughed. We talked. We cried. And we truly connected.</p>
      <p className="story-p">And somewhere between 10pm and 4am, something began <span className="chapter-begining">The beginning of Nimechi and Choko.</span> </p>

      <div className="story-divider" />
      {/* <div className="chapter-head" style={{ borderLeft: "none", paddingLeft: 0 }}>The beginning of forever.</div> */}

      <p className="story-p" style={{ textAlign: "center" }}>
        Looking back now, it is funny how it all started.<br />
        A random Monday. An airport.<br />
        A simple joke about our beloved country Nigeria and missing bags.<br />
        Nothing planned. Nothing forced. No flamboyant dress up.<br /><br />
        But somehow, in that very ordinary moment, God was already at work.<br /><br />
        <em>And the rest, as they say, is history 🤍</em><br /><br />
        <span className="aside-text">For more of our journey, connect with us below.</span>
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
