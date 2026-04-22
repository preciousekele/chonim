import { useState } from "react";
import { useNavigate } from "react-router-dom";

const accounts = [
  {
    country: "Nigeria",
    currency: "(₦)",
    name: "Ekele Gabriel O.",
    number: "0025008398",
    bank: "GTBANK",
  },
  {
    country: "United Kingdom",
    currency: "(£)",
    name: "Anomnimechi Nneoma Ugorji",
    number: "83430847",
    bank: "Barclays Bank",
    sortCode: "20-76-92",
    swift: "BUKBGB22",
    iban: "GB56 BUKB 2076 9283 4308 47",
  },
  {
    country: "United Kingdom",
    currency: "(£)",
    name: "Anomnimechi Nneoma Ugorji",
    number: "anomnimechiugorji@gmail.com",
    bank: "PayPal Bank",
  },
];

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
        color: "#120205",
        opacity: 0.75,
        transition: "opacity 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.75)}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#120205" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
      Back
    </button>
  );
}

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-gray-400 hover:text-gray-700 transition-colors duration-200 flex items-center gap-1"
      title="Copy"
    >
      {copied ? (
        <span className="uppercase tracking-widest" style={{ fontSize: "11px", fontWeight: 300, color: "#b08fa0" }}>
          Copied
        </span>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}

function Field({ label, value, copyable }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-gray-700 mb-1" style={{ fontWeight: 300 }}>
        {label}
      </p>
      <div className="flex items-center gap-3">
        <p className="text-gray-900 text-md tracking-widest" style={{ fontWeight: 400 }}>
          {value}
        </p>
        {copyable && <CopyButton value={value} />}
      </div>
    </div>
  );
}

function AccountCard({ account }) {
  const isPayPal = account.bank === "PayPal Bank";
  return (
    <div className="flex flex-col gap-5 px-10 py-10 border border-gray-400 w-full max-w-sm">
      <div>
        <p className="text-sm uppercase tracking-widest text-gray-700 mb-1" style={{ fontWeight: 300 }}>
          {account.country} {account.currency}
        </p>
      </div>
      <div className="w-76 border-t -mt-2 border-gray-300" />
      <Field label="Name" value={account.name} copyable={false} />
      <Field label={isPayPal ? "Email" : "Account No."} value={account.number} copyable={true} />
      {account.sortCode && <Field label="Sort Code" value={account.sortCode} copyable={false} />}
      {account.swift && <Field label="Swift / BIC" value={account.swift} copyable={true} />}
      {account.iban && <Field label="IBAN" value={account.iban} copyable={true} />}
      <Field label="Bank" value={account.bank} copyable={false} />
    </div>
  );
}

export default function Registry() {
  return (
    <>
      <BackButton />
      <div
        className="flex flex-col items-center justify-center px-6 py-8 md:py-32"
        style={{ background: "linear-gradient(to top right, #FFFFF0, #E8DCC8)" }}
      >
        <h1
          className="uppercase text-center mb-4"
          style={{
            fontFamily: "'Kugile', serif",
            fontWeight: 400,
            lineHeight: 0.8,
            letterSpacing: "0.12em",
            fontSize: "clamp(1.1rem, 6vw, 1.6rem)",
            color: "#6B1525",
          }}
        >
          GIFTS
        </h1>

        <p
          className="text-gray-800 tracking-widest text-center mb-16"
          style={{ fontWeight: 300, fontSize: "clamp(16px, 1vw, 16px)", letterSpacing: "0.08em", textAlign: "center" }}
        >
          Your love, presence, and prayers mean the world to us, and we are truly grateful to celebrate this special moment with you. <br />
          If you would like to give us a gift, we would sincerely appreciate it in monetary form. <br />
          Kindly make use of any of the bank details below. <br />
          Thank you so much for your generosity. May God replenish and bless you.
        </p>

        <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full max-w-3xl">
          {accounts.map((acc) => (
            <AccountCard key={acc.number} account={acc} />
          ))}
        </div>
      </div>
    </>
  );
}