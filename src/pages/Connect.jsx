import { useEffect, useRef } from "react";

const profiles = [
  {
    name: "CHOKO",
    side: "left",
    imageSrc: "/chonim5.jpeg",
    igLink: "https://www.instagram.com/choko_gabriel?igsh=MXZzbjhqcWw5cjgxNQ==",
    description: <ChokoStory />,
    connectLabel: "Connect with Choko",
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
              ? "pb-10 md:pb-0"
              : "-mt-12 md:pt-0"
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

          {/* DESKTOP ONLY – name ABOVE image (right card) */}
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

          {/* MOBILE ONLY – right card: name above image */}
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

          {/* MOBILE ONLY – CHOKO: name below image */}
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
          <div
            className="leading-relaxed text-lg md:text-3xl"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              color: "#EDE4D5",
            }}
          >
            {profile.description}
          </div>

          <a
            href={profile.igLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-base tracking-widest border-b pb-0.5 w-fit hover:text-gray-200 hover:border-gray-200 transition-colors duration-300"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              color: "#d4a0a8",
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

function ChokoStory() {
  return (
    <div className="flex flex-col gap-0 w-full">
      <style>{`
        .choko-dialogue-line {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(1.1rem, 2.5vw, 1.15rem);
          font-weight: 300;
          color: #EDE4D5;
          border-left: 1.5px solid #d4a0a8;
          padding-left: 1rem;
          margin: 0.6rem 0;
          display: block;
        }
          .choko-dialogue-line-her{
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(1.1rem, 2.5vw, 1.15rem);
          font-weight: 300;
          color: #eae8e4;
          border-left: 1.5px solid #d4a0a8;
          padding-left: 1rem;
          margin: 0.6rem 0;
          display: block;
        }
        .choko-chapter-head {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(1.4rem, 2.5vw, 1.5rem);
          font-weight: 500;
          color: #f5d5d9;
          border-left: 2px solid #d4a0a8;
          padding-left: 1rem;
          margin: 1.8rem 0 0.9rem;
          line-height: 1.4;
        }
        .choko-chapter-beginning {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.35rem, 2.5vw, 1.5rem);
          font-weight: 500;
          color: #f5d5d9;
          padding-left: .2rem;
          line-height: 1.4;
        }
        .choko-story-divider {
          width: 50px;
          height: 1px;
          background: #d4a0a8;
          margin: 1.5rem 0;
        }
        .choko-story-p {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: clamp(1.1rem, 2vw, 1rem);
          line-height: 1.75;
          color: #EDE4D5;
          margin-bottom: 0.75rem;
          text-align: justify;
        }
        .choko-aside-text { color: #c9a8ae; }
        @media (max-width: 640px) {
          .choko-story-p { text-align: left; }
        }
      `}</style>

      {/* Opening */}
      <p className="choko-story-p" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}>
        <strong style={{ fontStyle: "normal", fontWeight: "500", color: "#f5d5d9", fontSize: "clamp(1.4rem, 2vw, 1rem)" }}>
          "When God wants to write your story, even airport delays become divine arrangements."
        </strong>
      </p>

      <div className="choko-story-divider" />

      <p className="choko-story-p">On the 16th of September 2024, I was on a trip, not just any trip, but a very serious Kingdom assignment. Destination: United Kingdom. <br />Reason: Sound of Revival.</p>
      <p className="choko-story-p">I was travelling with my Father, Apostle Joshua Selman, and other team members, so you can imagine my mindset; focused, serious, zero distractions. Love? Romance? Not even in my prayer points. I was never even a fan of distance relationships, neither did I ever love the idea of living outside Abuja.</p>

      <div className="choko-story-divider" />
      <div className="choko-chapter-head">Abuja Airport — The First Glance</div>

      <p className="choko-story-p">At the British Airways counter in Abuja, I noticed a lady on another queue, checking in for the same flight. Did I approach her? No. Did I think anything of it? Absolutely not. To me, she was just another passenger. Mission first. Always.</p>
      <p className="choko-story-p">On the flight, I boarded, sat down, looked around and yes, I saw her again. Still nothing. No spark. No <em>"this could be my wife."</em> Just vibes, in-flight announcements, and a plan to sleep all through the flight.</p>

      <div className="choko-story-divider" />
      <div className="choko-chapter-head">Heathrow — Where Destiny Began to Speak</div>

      <p className="choko-story-p">After landing at Heathrow, I went through immigration and headed straight to the carousel. Simple plan: pick my bags, leave the airport, and focus on the assignment. But Heaven had other plans.</p>
      <p className="choko-story-p">I waited… and waited… and waited. Everyone from my team had collected their bags. Mine? Nowhere to be found. At this point, I was probably having a quiet <em>"Lord, why me?"</em> moment. Then I noticed standing right beside me, the same lady from Abuja.</p>

      <div className="choko-story-divider" />
      <div className="choko-chapter-head">The Conversation</div>

      <span className="choko-dialogue-line">Me: Hi, how are you? Hope the trip was a good one?</span>
      <span className="choko-dialogue-line-her">Her: I'm great. Yes, the trip was fine.</span>
      <span className="choko-dialogue-line">Me: Have you gotten any of your bags?</span>
      <span className="choko-dialogue-line-her">Her: No, I haven't. I'm still waiting for them.</span>
      <span className="choko-dialogue-line">Me: Ahhh, that's fine. We're in the same boat now oh. If your bags come out, you'll have to wait for mine! <span className="choko-aside-text">(We both laughed.)</span></span>

      <p className="choko-story-p">We talked. She told me she lived in the UK, had rushed back from her sister's wedding in Nigeria, barely two days after the event. When I asked why the rush, she said she had a workers' meeting and didn't want to let anyone down. It was service to God, and that should never be trivialised.</p>
      <p className="choko-story-p">Then she mentioned the conference she was returning for. Sound of Revival. With Apostle Joshua Selman. She was excited, she said she had seen Daddy, Mr. Victor, Pastor Kayode, and Lekan at the airport. And I simply responded: <em>"Yes, I saw them too."</em></p>
      <p className="choko-story-p"><span className="choko-aside-text">(Meanwhile inside me: "They don't even know me like this…" 😅)</span></p>
      <p className="choko-story-p">Now, I've learnt from Daddy the power of relationships. So I thought: <em>well, this is my Koinonia UK sister. Let me collect contact.</em> But also: <em>make them not catch me scoping woman on Kingdom assignment o…</em> 😂</p>
      <p className="choko-story-p">So what did I do? I gave her my number. Smooth. Strategic. Sharp. In my mind: <em>if she likes, she will text… if she doesn't, life goes on.</em></p>

      <div className="choko-story-divider" />
      <div className="choko-chapter-head">05:40AM — Destiny Sends a Message</div>

      <p className="choko-story-p">The next morning, at exactly 05:40am, a message came in. She reached out. And just like that, a conversation started. A connection formed. A story began.</p>
      <p className="choko-story-p">We saw each other briefly at the conference; just pleasantries, hello and hi. Then on the last day, while she was carrying out her duties in the gallery, she looked up and saw me on the keyboard. She messaged me after service:</p>
      <span className="choko-dialogue-line">"Surprise, surprise. I just saw you on the keyboard. I didn't know you were into music, interesting."</span>
      <p className="choko-story-p"><span className="choko-aside-text">(She still had not put two and two together that I was Apostle's keyboardist 😄)</span></p>
      <p className="choko-story-p">She even teased that she would not have taken me for someone who sings. I told her I do not sing. She asked what the mic was doing in front of me. I explained. And honestly, that was the end of that conversation. Or so I thought.</p>

      <div className="choko-story-divider" />
      <div className="choko-chapter-head">The Call That Changed Everything</div>

      <p className="choko-story-p">Not many days after, I checked in on her. Then I said something simple:</p>
      <span className="choko-dialogue-line">"We didn't even get to talk….."</span>
      <p className="choko-story-p">And it was true. So I asked if I could call her after work. She said yes.</p>
      <p className="choko-story-p">That call was not a small call, men and brethren 😂😂😂😂. We spoke from around 10pm until 4am, non-stop. We laughed. We talked. We cried. We truly connected. And somewhere between 10pm and 4am, something began — <span className="choko-chapter-beginning">The beginning of Choko and Nimechi.</span></p>

      <div className="choko-story-divider" />

      <p className="choko-story-p" style={{ textAlign: "center" }}>
        The "passenger on the same flight."<br />
        The "lady at the carousel."<br />
        The "Koinonia UK sister."<br />
        Is now my wife-to-be.<br /><br />
        Never underestimate delayed luggage.<br />
        British Airways might just be doing matchmaking ministry.<br /><br />
        When God wants to write your story,<br />
        even airport delays become divine arrangements.<br /><br />
        <em>Truly, God is the Master Orchestrator of our Life's Music. 🤍</em><br /><br />
        <span className="choko-aside-text">For more of our journey, connect with us below.</span>
      </p>
    </div>
  );
}

export default function Connect() {
  return (
    <main className="bg-[#3D0A14] min-h-screen pt-2 md:pt-14 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400&display=swap');
      `}</style>

      <div className="flex justify-center items-center pt-6 md:pt-2 px-4">
        <h2
          className="tracking-widest uppercase font-light text-center"
          style={{
            fontFamily: "'Kugile', serif",
            fontWeight: 400,
            letterSpacing: "0.12em",
            color: "#EDE4D5",
          }}
        >
          <span
            className="block mb-4"
            style={{
              fontSize: "clamp(0.55rem, 4.7vw, 1.7rem)",
              lineHeight: 1.4,
            }}
          >
            Our Journey to
          </span>
          <span
            className="block -mb-4 md:-mb-2"
            style={{
              fontSize: "clamp(1.75rem, 5.5vw, 2.9rem)",
              lineHeight: 1.2,
            }}
          >
            #ALoveUnending
          </span>
        </h2>
      </div>

      {profiles.map((profile, i) => (
        <ProfileCard key={profile.name} profile={profile} index={i} />
      ))}
    </main>
  );
}