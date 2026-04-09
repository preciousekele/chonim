import { useState } from "react";

const accounts = [
  {
    country: "Nigeria",
    currency: "(₦)",
    name: "Choko & Nimechi",
    number: "0123456789",
    bank: "First Bank of Nigeria",
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
        <span
          className="uppercase tracking-widest"
          style={{ fontSize: "11px", fontWeight: 300, color: "#b08fa0" }}
        >
          Copied
        </span>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
      <p
        className="text-xs uppercase tracking-widest text-gray-700 mb-1"
        style={{ fontWeight: 300 }}
      >
        {label}
      </p>
      <div className="flex items-center gap-3">
        <p
          className="text-gray-900 text-md tracking-widest"
          style={{ fontWeight: 400 }}
        >
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
      {/* Country & Currency */}
      <div>
        <p
          className="text-sm uppercase tracking-widest text-gray-700 mb-1"
          style={{ fontWeight: 300 }}
        >
          {account.country} {account.currency}
        </p>
      </div>

      <div className="w-76 border-t -mt-2 border-gray-300" />

      {/* Name */}
      <Field label="Name" value={account.name} copyable={false} />

      {/* Account Number / Email */}
      <Field
        label={isPayPal ? "Email" : "Account No."}
        value={account.number}
        copyable={true}
      />

      {/* UK-only: Sort Code */}
      {account.sortCode && (
        <Field label="Sort Code" value={account.sortCode} copyable={false} />
      )}

      {/* UK-only: Swift / BIC */}
      {account.swift && (
        <Field label="Swift / BIC" value={account.swift} copyable={true} />
      )}

      {/* UK-only: IBAN */}
      {account.iban && (
        <Field label="IBAN" value={account.iban} copyable={true} />
      )}

      {/* Bank */}
      <Field label="Bank" value={account.bank} copyable={false} />
    </div>
  );
}

export default function Registry() {
  return (
    <div
      className="flex flex-col items-center justify-center px-6 py-8 md:py-32"
      style={{
        background: "linear-gradient(to top right, #FFFFF0, #E8DCC8)",
      }}
    >
      {/* Heading */}
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
        GIFTINGS
      </h1>

      {/* Subtext */}
      <p
        className="text-gray-600 tracking-widest text-center mb-16"
        style={{
          fontWeight: 300,
          fontSize: "clamp(14px, 1vw, 13px)",
          letterSpacing: "0.2em",
        }}
      >
        We are deeply grateful to celebrate this special day with you. Your presence means everything to us. For those who wish to give, we would kindly prefer a cash gift rather than physical items, as we start our journey together
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full max-w-3xl">
        {accounts.map((acc) => (
          <AccountCard key={acc.number} account={acc} />
        ))}
      </div>
    </div>
  );
}