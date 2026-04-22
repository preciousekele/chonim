import { useState } from "react";
import { useNavigate } from "react-router-dom";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzGF0hNV3t_d8H_N21yGxP85HwWFKVjHU7mU3gWfCDLQCEc9HxkAaS2dncFXDiAXD5y/exec";

// ── Fixed Back Button ────────────────────────────────────────────
function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "6px 4px",
        fontFamily: "'Jost', sans-serif",
        fontWeight: 300,
        fontSize: "12px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#7B1A2A",
        opacity: 0.75,
        transition: "opacity 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.75)}
    >
      {/* Left arrow SVG */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#7B1A2A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
      Back
    </button>
  );
}

// ── Main RSVP Component ──────────────────────────────────────────
export default function Rsvp() {
  const [form, setForm] = useState({ fullName: "", email: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [gemstone, setGemstone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const fullName = form.fullName.trim();
    const email = form.email.trim();

    if (!fullName || !email) {
      setErrorMsg("Please fill in both fields.");
      setStatus("error");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const payload = JSON.stringify({ fullName, email });
      const url = `${APPS_SCRIPT_URL}?data=${encodeURIComponent(payload)}`;

      const res = await fetch(url, { method: "GET" });
      const data = await res.json();

      if (data.success) {
        setGemstone(data.gemstone);
        setAlreadyRegistered(data.alreadyRegistered);
        setStatus("success");
      } else {
        setErrorMsg(data.message || "Something went wrong.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Could not connect. Please try again.");
      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm({ fullName: "", email: "" });
    setStatus("idle");
    setGemstone("");
    setErrorMsg("");
    setAlreadyRegistered(false);
  };

  const firstName = form.fullName.trim().split(" ")[0];

  // ── Success screen ─────────────────────────────────────────────
  if (status === "success") {
    return (
      <>
        <BackButton />
        <div
          className="flex flex-col items-center justify-center px-6"
          style={{
            background: "#EDE4D5",
            paddingTop: "60px",
            paddingBottom: "60px",
            minHeight: "100vh",
            height: "auto",
          }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "13px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#b08fa0",
              marginBottom: "16px",
            }}
          >
            Your event identity
          </p>

          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "clamp(22px, 8vw, 56px)",
              letterSpacing: "0.08em",
              color: "#6B1525",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            {gemstone}
          </p>

          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              color: "#aaa",
              letterSpacing: "0.04em",
              textAlign: "center",
              maxWidth: "340px",
              marginBottom: "48px",
            }}
          >
            {alreadyRegistered
              ? `Welcome back, ${firstName}. You're already registered.`
              : `Welcome, ${firstName}. This is your unique event identity for access into the event, keep it handy.`}
          </p>

          <button
            onClick={handleReset}
            style={{
              fontFamily: "'Jost', sans-serif",
              background: "transparent",
              border: "1px solid #7B1A2A",
              color: "#7B1A2A",
              padding: "10px 28px",
              borderRadius: "12px",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Register another guest
          </button>
        </div>
      </>
    );
  }

  // ── Form screen ────────────────────────────────────────────────
  return (
    <>
      <BackButton />
      <div
        className="flex flex-col items-center justify-center px-6"
        style={{
          background: "#EDE4D5",
          paddingTop: "60px",
          paddingBottom: "60px",
          minHeight: "100vh",
          height: "auto",
        }}
      >
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(16px, 2vw, 22px)",
            letterSpacing: "0.05em",
            lineHeight: 1.6,
            color: "#4e2038",
            textAlign: "center",
            marginBottom: "48px",
          }}
        >
          As a people of honor, we are very grateful to you for taking time to come
          for our event. <br /> It means so much to us to have you celebrate with us. <br />
          Please confirm your attendance and kindly check your email for important
          details regarding the day.
        </p>

        <div className="w-full" style={{ maxWidth: "380px" }}>
          {/* Full Name */}
          <div className="mb-8">
            <label
              className="block mb-2 tracking-widest"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              style={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid #ccc",
                background: "transparent",
                paddingBottom: "8px",
                fontSize: "15px",
                fontFamily: "'Jost', sans-serif",
                color: "#444",
                outline: "none",
              }}
            />
          </div>

          {/* Email */}
          <div className="mb-8">
            <label
              className="block mb-2 tracking-widest"
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid #ccc",
                background: "transparent",
                paddingBottom: "8px",
                fontSize: "15px",
                fontFamily: "'Jost', sans-serif",
                color: "#444",
                outline: "none",
              }}
            />
          </div>

          {/* Error message */}
          {status === "error" && (
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "13px",
                color: "#c94a4a",
                marginBottom: "16px",
                letterSpacing: "0.03em",
              }}
            >
              {errorMsg}
            </p>
          )}

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={status === "loading"}
            className="mx-auto block"
            style={{
              fontFamily: "'Jost', sans-serif",
              backgroundColor: "#6B1525",
              color: "#fff",
              padding: "12px 32px",
              borderRadius: "12px",
              border: "none",
              fontSize: "13px",
              fontWeight: 300,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: status === "loading" ? "not-allowed" : "pointer",
              opacity: status === "loading" ? 0.6 : 1,
              transition: "opacity 0.2s",
            }}
          >
            {status === "loading" ? "Confirming..." : "Proceed"}
          </button>
        </div>
      </div>
    </>
  );
}