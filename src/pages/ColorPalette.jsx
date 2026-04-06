export default function ColorPalette() {
  const shades = [
      { name: "Espresso", hex: "#3E1C08" },
      { name: "Walnut", hex: "#6B3410" },
      { name: "Chestnut", hex: "#8B4513" },
      { name: "Toffee", hex: "#A66B2E" },
      { name: "Caramel", hex: "#C4874A" },
      { name: "Sand", hex: "#D4A574" },
      { name: "Linen", hex: "#E8C9A0" },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white px-6 py-10 md:py-18">
      {/* Header */}
      <h1
        className="uppercase text-black text-center mb-16"
        style={{
          fontFamily: "'Vonique64', serif",
          fontWeight: 100,
          lineHeight: 0.8,
          letterSpacing: "0.02em",
          fontSize: "clamp(.5rem, 5vw, 9rem)",
        }}
      >
        Dress Code
      </h1>

      {/* Palette row + text */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl">
        {/* Swatches */}
        <div className="flex flex-row items-center gap-3">
          {shades.map((shade) => (
            <div
              key={shade.hex}
              title={shade.name}
              style={{
                backgroundColor: shade.hex,
                width: "clamp(36px, 5vw, 64px)",
                height: "clamp(80px, 12vw, 140px)",
                borderRadius: "999px",
                flexShrink: 0,
                boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
              }}
            />
          ))}
        </div>

        {/* Caption */}
       <p
  className="text-gray-400 uppercase text-left truncate"
  style={{
    fontFamily: "sans-serif",
    fontWeight: 300,
    fontSize: "clamp(12px, 1vw, 19px)",
    letterSpacing: "0.3em",
    lineHeight: 1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // Only apply on mobile
    display: "block",
    "@media (min-width: 769px)": {
      display: "none",
    },
  }}
>
  Come styled in any shade of brown
</p>
      </div>
    </div>
  );
}
