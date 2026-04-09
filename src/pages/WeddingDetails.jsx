import { ChevronRight } from "lucide-react"

export default function WeddingDetails({ onNavigate }) {
  const items = [
    { label: "RSVP", key: "rsvp" },
    { label: "Dress Code", key: "dresscode" },
    { label: "Live Streaming", key: "streaming" },
    { label: "Travel & Accommodation", key: "travel" },
    { label: "Gallery", key: "moments" },
  ];

  return (
    <div style={{
      minHeight: "80vh",
      background: "#6B1525",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      fontFamily: "'Kugile', serif",
    }}>
      <h2 style={{
        letterSpacing: "0.1em",
        fontFamily: "'Kugile', serif",
        lineHeight: 1,
        fontWeight: 200,
        fontSize: "clamp(1.1rem, 6vw, 1.6rem)",
        marginBottom: "0.5rem",
        textAlign: "center",
        color: "#EDE4D5",
      }}>
        WEDDING DETAILS
      </h2>

      <p className="py-3" style={{
        letterSpacing: "0.1em",
        fontFamily: "'Kugile', serif",
        lineHeight: 1,
        fontWeight: 200,
        fontSize: "clamp(1rem, 6vw, 1rem)",
        textAlign: "center",
        color: "#EDE4D5",
      }}>
        Click any to View
      </p>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        maxWidth: "380px",
      }}>
        {items.map(({ label, key }) => (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#EDE4D5",
              color: "#6B1525",
              border: "none",
              borderRadius: "6px",
              padding: "1rem 1.25rem",
              fontSize: "1rem",
              fontWeight: "bold",
              letterSpacing: "0.05em",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(139,38,53,0.3)",
              transition: "transform 0.15s, box-shadow 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {label}
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        ))}
      </div>
    </div>
  );
}