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
        .choko-dialogue-line-her {
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
          {/* "When God wants to write your story, even airport delays become divine arrangements." */}
          How it All Began…
        </strong>
      </p>

      <div className="choko-story-divider" />

      <p className="choko-story-p">On the 16th of September 2024, I was on a trip— not just any trip, but a very serious Kingdom assignment.<br />Destination: United Kingdom. <br /> Reason: Sound of Revival.</p>
      <p className="choko-story-p">I was traveling with my Father, Apostle Joshua Selman, and other team members, so you can imagine my mindset — focused, serious, zero distractions. Love? Romance? "Woman dey where?" Not even in my prayer points because I was never even a fan of distance relationships neither did I ever love the idea of living outside Abuja.</p>

      <div className="choko-story-divider" />
      <div className="choko-chapter-head">Abuja Airport — The First Glance</div>

      <p className="choko-story-p">At the British Airways counter in Abuja, I noticed a lady on another queue checking in for the same flight.<br />Did I approach her? No.<br />Did I think anything of it? Absolutely not.<br />To me, she was just another passenger on the flight. <br /> Mission first. Always.</p>

      <div className="choko-chapter-head">On the Flight</div>
      <p className="choko-story-p">Boarded. Sat down. Looked around.<br />And yes… I saw her again.<br />Still nothing.<br />No spark. No "this could be my wife." Just vibes, in-flight announcements and a plan to sleep all through the flight.</p>

      <div className="choko-story-divider" />
      <div className="choko-chapter-head">Heathrow — Where Destiny Began to Speak…</div>

      <p className="choko-story-p">After landing at Heathrow, I went through immigration and headed straight to the carousel to get my luggage. I remember walking to Daddy just to greet him before going to the carousel.</p>
      <p className="choko-story-p">Simple plan: Pick my bags, leave the airport and focus on the assignment…</p>
      <p className="choko-story-p">But… Heaven had other plans.</p>

      <div className="choko-chapter-head">The Delay That Changed Everything</div>
      <p className="choko-story-p">I waited… And waited… And waited…<br />Everyone from my team had collected their bags. Mine? Nowhere to be found.<br />At this point, I was probably having a quiet "Lord, why me?" moment.<br />Then I noticed…<br />Standing right beside me…<br />The same lady from Abuja.</p>

      <div className="choko-story-divider" />
      <div className="choko-chapter-head">The Conversation</div>

      <span className="choko-dialogue-line">Me: Hi, how are you? Hope the trip was a good one?</span>
      <span className="choko-dialogue-line-her">Her: I'm great. Yes, the trip was fine.</span>
      <span className="choko-dialogue-line">Me: Have you gotten any of your bags?</span>
      <span className="choko-dialogue-line-her">Her: No, I haven't. I'm still waiting for them.</span>
      <span className="choko-dialogue-line">Me: Ahhh, that's fine. I haven't gotten mine too. We're in the same boat now oh. If your bags come out, you'll have to wait for mine! <span className="choko-aside-text">(We both laughed.)</span></span>
      <span className="choko-dialogue-line">Me: Do you live in the UK?</span>
      <span className="choko-dialogue-line-her">Her: Yes, I do.</span>
      <span className="choko-dialogue-line">Me: That's nice. So why did you go to Nigeria?</span>
      <span className="choko-dialogue-line-her">Her: I came for my sister's wedding.</span>
      <span className="choko-dialogue-line">Me: Oh nice! How was it? When was the wedding?</span>
      <span className="choko-dialogue-line-her">Her: It was great. It was just last Saturday.</span>
      <span className="choko-dialogue-line">Me: You mean just two days ago? Why the rush back to the UK? Normally people use that kind of trip to do plenty things…</span>
      <span className="choko-dialogue-line-her">Her: Yes, I rushed back for a conference.</span>
      <span className="choko-dialogue-line">Me: Oh, I see. What conference is that?</span>
      <span className="choko-dialogue-line-her">Her: Sound of Revival with Apostle Joshua Selman.</span>
      <span className="choko-dialogue-line">Me: Wow, that's lovely. <span className="choko-aside-text">(Looking at her like "you should recognize me")</span> But why are you here this early? The conference starts on Thursday.</span>
      <span className="choko-dialogue-line-her">Her: There's a workers' meeting I need to attend. I'm a worker.</span>
      <span className="choko-dialogue-line">Me: Oh, I see. That's great.</span>
      <span className="choko-dialogue-line-her">Her: Do you live in the UK too?</span>
      <span className="choko-dialogue-line">Me: No, I'm based in Abuja.</span>
      <span className="choko-dialogue-line-her">Her: So what brought you to the UK?</span>
      <span className="choko-dialogue-line">Me: I came for a conference too.</span>
      <span className="choko-dialogue-line-her">Her: Hmm… what conference?</span>
      <span className="choko-dialogue-line">Me: Sound of Revival.</span>
      <span className="choko-dialogue-line-her">Her: Wow! Are you serious? Are you also a Koinonia member?</span>
      <span className="choko-dialogue-line">Me: I'm very serious. That's why I came. <span className="choko-aside-text">(Meanwhile, inside me I was like, "Koinonia member ke? Nothing bad, but if you're a worker… you're the real deal!" )</span></span>
      <span className="choko-dialogue-line-her">Her: That's nice oh…</span>

      <p className="choko-story-p">She then went on to excitedly mention how she saw Daddy, Mr. Victor, Pastor Kayode, and Lekan at the airport. And I simply responded: <em>"Yes, I saw them too."</em></p>
      <p className="choko-story-p"><span className="choko-aside-text">Meanwhile inside me: "Them no sabi me like this…"</span></p>

      <p className="choko-story-p">Now, I've learnt from Daddy the power of relationships. So I thought: <br /> <em>"Well… this is my Koinonia UK sister. Let me collect contact."</em> But also: <em>"Make dem no catch me say I dey scope woman for airport on Kingdom assignment o…"</em> 😅</p>
      <p className="choko-story-p">So what did I do? I gave her my number. Smooth. Strategic. Sharp! In my mind: <em>"If she likes, she will text… if she doesn't, life goes on."</em></p>

      <div className="choko-story-divider" />
      <div className="choko-chapter-head">05:40AM — Destiny Sends a Message</div>

      <p className="choko-story-p">The next morning… <br />At exactly 05:40am thereabout… <br />Message received. <br />She reached out. <br />And just like that… <br /> A conversation started, a connection formed, a story began.</p>

      <div className="choko-story-divider" />
      <div className="choko-chapter-head">The Plot Twist Nobody Saw Coming</div>

      <p className="choko-story-p">Fast forward to today… <br />The "passenger on the same flight"… <br />The "lady at the carousel"… The "Koinonia UK sister"… Is now my wife-to-be.</p>

      <div className="choko-story-divider" />

      <p className="choko-story-p" style={{ textAlign: "center" }}>
        Never underestimate delayed luggage.<br />
        British Airways might just be doing matchmaking ministry.<br />
        When God wants to write your story, even airport delays become divine arrangements.<br /><br />
        Truly, God is the Master Orchestrator of our Life's Music.<br />
        What looked like inconvenience… Was actually divine alignment.<br />
        <em>And for this beautiful story, I give all the glory to Him. 🤍</em><br /><br />
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