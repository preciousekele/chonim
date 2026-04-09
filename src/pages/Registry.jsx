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
  },
  {
    country: "United Kingdom",
    currency: "(£)",
    name: "Anomnimechi Nneoma Ugorji",
    number: "anomnimechiugorji@gmail.com",
    bank: "PayPal Bank",
  },
];

function AccountCard({ account }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(account.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      <div>
        <p
          className="text-xs uppercase tracking-widest text-gray-700 mb-1"
          style={{ fontWeight: 300 }}
        >
          Name
        </p>
        <p
          className="text-gray-900 text-md tracking-wide"
          style={{ fontWeight: 400 }}
        >
          {account.name}
        </p>
      </div>

      {/* Account Number */}
      {/* Account Number / Email */}
      <div>
        <p
          className="text-xs uppercase tracking-widest text-gray-700 mb-1"
          style={{ fontWeight: 300 }}
        >
          {account.bank === "Paypal Bank" ? "Email" : "Account No."}
        </p>
        <div className="flex items-center gap-3">
          <p
            className="text-gray-900 text-md tracking-widest"
            style={{ fontWeight: 400 }}
          >
            {account.number}
          </p>
          <button
            onClick={handleCopy}
            className="text-gray-400 hover:text-gray-700 transition-colors duration-200 flex items-center gap-1"
            title="Copy account number"
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
        </div>
      </div>

      {/* Bank */}
      <div>
        <p
          className="text-xs uppercase tracking-widest text-gray-700 mb-1"
          style={{ fontWeight: 300 }}
        >
          Bank
        </p>
        <p
          className="text-gray-900 text-md tracking-wide"
          style={{ fontWeight: 400 }}
        >
          {account.bank}
        </p>
      </div>
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
          color: '#6B1525',
        }}
      >
        GIFTINGS
      </h1>

      {/* Subtext */}
      <p
        className="text-gray-600 uppercase tracking-widest text-center mb-16"
        style={{
          fontWeight: 300,
          fontSize: "clamp(11px, 1vw, 13px)",
          letterSpacing: "0.2em",
        }}
      >
        No gifts — just finance
      </p>

      {/* Two Cards */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 w-full max-w-3xl">
        {accounts.map((acc) => (
          <AccountCard key={acc.country} account={acc} />
        ))}
      </div>
    </div>
  );
}
