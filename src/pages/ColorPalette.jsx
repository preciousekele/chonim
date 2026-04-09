export default function ColorPalette() {
  const shades = [
    // Taupe family
    { name: "Warm Taupe", hex: "#B5A89A" },
    { name: "Dark Taupe", hex: "#8B7D6B" },
    { name: "Mink", hex: "#6B5E52" },

    // Burgundy family
    { name: "Blush Burgundy", hex: "#C4687A" },
    { name: "Burgundy", hex: "#800020" },
    { name: "Deep Wine", hex: "#5C0017" },

    // Nude family
    { name: "Ivory", hex: "#F8F4E3" },
    { name: "Nude", hex: "#E8C9A0" },
    { name: "Caramel Nude", hex: "#C4A882" },

    // Black & Neutral
    { name: "Charcoal", hex: "#4A4A4A" },
    { name: "Slate", hex: "#2D2D2D" },
    { name: "Black", hex: "#1A1A1A" },
  ];

  const groups = [
    { label: "Taupe", shades: shades.slice(0, 3) },
    { label: "Burgundy", shades: shades.slice(3, 6) },
    { label: "Nude", shades: shades.slice(6, 9) },
    { label: "Black & Neutral", shades: shades.slice(9, 12) },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white px-6 py-10 md:py-18">
      {/* Header */}
      <h1
        className="uppercase text-black text-center mb-4"
        style={{
          fontFamily: "'Kugile', serif",
          fontWeight: 100,
          lineHeight: 0.8,
          letterSpacing: "0.12em",
          fontSize: "clamp(1.1rem, 6vw, 1.6rem)",
        }}
      >
        Dress Code
      </h1>

      <p
        className="text-gray-400 uppercase text-center mb-16"
        style={{
          fontWeight: 300,
          fontSize: "clamp(11px, 1vw, 13px)",
          letterSpacing: "0.3em",
        }}
      >
        Elegantly flamboyant
      </p>

      {/* Groups */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 w-full max-w-5xl">
        {groups.map((group) => (
          <div key={group.label} className="flex flex-col items-center gap-4">
            {/* Swatches */}
            <div className="flex flex-row items-center gap-2">
              {group.shades.map((shade) => (
                <div
                  key={shade.hex}
                  title={shade.name}
                  style={{
                    backgroundColor: shade.hex,
                    width: "clamp(36px, 4vw, 56px)",
                    height: "clamp(80px, 12vw, 140px)",
                    borderRadius: "999px",
                    flexShrink: 0,
                    boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                  }}
                />
              ))}
            </div>

            {/* Group Label */}
            <p
              className="uppercase text-gray-400 text-center"
              style={{
                fontWeight: 300,
                fontSize: "clamp(10px, 0.9vw, 12px)",
                letterSpacing: "0.3em",
              }}
            >
              {group.label}
            </p>
          </div>
        ))}
      </div>
      <p
        className="text-gray-500 text-center mt-16"
        style={{
          // fontFamily: "'SymphonieCalligraphy', cursive",
          fontFamily: "'Playfair Display', serif",

          fontWeight: 400,
          fontSize: "clamp(18px, 2.5vw, 36px)",
          letterSpacing: "0.05em",
          lineHeight: 1.6,
        }}
      >
        Dress in Taupe, Nude shades and Burgundy
        in our rich African Attire
      </p>
    </div>
  );
}
