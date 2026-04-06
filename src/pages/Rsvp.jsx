import { useState } from "react";

export default function Rsvp() {
  const [form, setForm] = useState({ fullName: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("RSVP submitted:", form);
  };

  return (
  <div className="p-10 flex flex-col items-center justify-center bg-[#f5f5f5] px-6">

    {/* Wide intro text — independent of form width */}
    <p
      style={{
        fontFamily: "'Jost', sans-serif",
        fontWeight: 300,
        fontSize: "clamp(16px, 2vw, 22px)",
        letterSpacing: "0.05em",
        lineHeight: 1.2,
        color: "#c58fab",
        textAlign: "center",
        maxWidth: "920px",   
        marginBottom: "48px",
      }}
    >
      As a people of honor, we are very grateful to you for taking time to
      come for our event. Kindly confirm your attendance as we are making
      plans to ensure you have a very wonderful guest experience during our event.
    </p>

    {/* Form — its own narrower width */}
    <div className="w-full" style={{ maxWidth: "380px" }}> 

      {/* Full Name */}
      <div className="mb-8">
        <label
          className="block text-gray-700 mb-2 text-ml tracking-widest"
          style={{ fontWeight: 500 }}
        >
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="w-full border-0 border-b border-gray-300 focus:outline-none focus:border-gray-600 pb-2 text-gray-800 bg-transparent transition-colors duration-300"
          style={{ fontSize: "15px" }}
        />
      </div>

      {/* Email */}
      <div className="mb-8">
        <label
          className="block text-gray-700 mb-2 text-ml tracking-widest"
          style={{ fontWeight: 500 }}
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border-0 border-b border-gray-300 focus:outline-none focus:border-gray-600 pb-2 text-gray-800 bg-transparent transition-colors duration-300"
          style={{ fontSize: "15px" }}
        />
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="px-8 py-3 text-white text-sm uppercase tracking-widest transition-opacity duration-300 hover:opacity-80 mx-auto block"
        style={{
          backgroundColor: "#b08fa0",
          fontWeight: 300,
          letterSpacing: "0.2em",
          borderRadius: "12px",
        }}
      >
        Proceed
      </button>
    </div>
  </div>
);
}
