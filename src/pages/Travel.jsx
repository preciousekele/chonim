import React from "react";

const hotels = [
  {
    name: "Transcorp Hilton Abuja",
    location: "1 Aguiyi Ironsi Street, Maitama, Abuja",
    area: "Maitama, Abuja",
    website: "https://www.hilton.com/en/hotels/abuhitw-transcorp-hilton-abuja/",
  },
  {
    name: "Fraser Suites Abuja",
    location: "Plot 294, Leventis Close, Central Business District, Abuja",
    area: "Central Business District",
    website: "https://www.frasershospitality.com/en/nigeria/abuja/fraser-suites-abuja/",
  },
  {
    name: "Wali's Suites",
    location: "21 Monrovia Street, Wuse 2, Abuja",
    area: "Wuse 2, Abuja",
    website: "https://walisng.com/",
  },
  {
    name: "Centurion Apartments",
    location: "30 Kitwe Street, Wuse Zone 4, Abuja",
    area: "Wuse Zone 4, Abuja",
    website: "https://centurionapartments.ng/",
  },
  {
    name: "Citilodge Hotel",
    location: "Plot 595, Durumi Road, Area 1, Near Old Secretariat, Abuja",
    area: "Area 1, Abuja",
    website: "https://citilodgehotel.com/",
  },
  {
    name: "Wali's Suites",
    location: "21 Monrovia Street, Wuse 2, Abuja",
    area: "Wuse 2, Abuja",
    website: "https://walisng.com/",
  },
];

function HotelCard({ hotel }) {
  return (
    <div className="flex flex-col gap-5 px-10 py-10 border border-gray-400 w-full max-w-xs">
      {/* Area */}
      <div>
        <p
          className="text-sm uppercase tracking-widest text-gray-700 mb-1"
          style={{ fontWeight: 300 }}
        >
          {hotel.area}
        </p>
      </div>

      <div className="w-full border-t -mt-2 border-gray-300" />

      {/* Hotel Name */}
      <div>
        <p
          className="text-xs uppercase tracking-widest text-gray-700 mb-1"
          style={{ fontWeight: 300 }}
        >
          Hotel
        </p>
        <p
          className="text-gray-900 text-md tracking-wide"
          style={{ fontWeight: 400 }}
        >
          {hotel.name}
        </p>
      </div>

      {/* Location */}
      <div>
        <p
          className="text-xs uppercase tracking-widest text-gray-700 mb-1"
          style={{ fontWeight: 300 }}
        >
          Address
        </p>
        <p
          className="text-gray-900 text-md tracking-wide"
          style={{ fontWeight: 400 }}
        >
          {hotel.location}
        </p>
      </div>

      {/* Book Link */}
      <div>
        <a
          href={hotel.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest transition-colors duration-200"
          style={{
            fontWeight: 300,
            color: "#6B1525",
            letterSpacing: "0.3em",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#6B1525")}
          onMouseLeave={(e) => (e.target.style.color = "#6B1525")}
        >
          View & Book →
        </a>
      </div>
    </div>
  );
}

export const Travel = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-8 md:py-32"
      style={{
        background: "linear-gradient(to top right, #5d4c29, #FFFFF0, #5d4c29)",
      }}
    >
      {/* Heading */}
      <h1
        className="uppercase text-center mb-4"
        style={{
          fontFamily: "'Kugile', serif",
          fontWeight: 100,
          lineHeight: 0.8,
          letterSpacing: "0.02em",
          fontSize: "clamp(.5rem, 5vw, 9rem)",
          color: "#6B1525",
        }}
      >
        Travel & Accommodation
      </h1>

      {/* Subtext */}
      <p
        className="text-gray-900 uppercase tracking-widest text-center mb-16"
        style={{
          fontWeight: 300,
          fontSize: "clamp(11px, 1vw, 13px)",
          letterSpacing: "0.3em",
        }}
      >
        Recommended stays near the venue
      </p>

      {/* Hotel Cards */}
      <div className="flex flex-wrap items-stretch justify-center gap-8 w-full max-w-6xl">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.name} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};