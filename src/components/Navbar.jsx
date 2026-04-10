export default function Navbar() {
  return (
    <nav className="fixed top-14 left-0 w-full z-50 hidden md:flex items-center justify-center gap-10 py-5 backdrop-blur-sm">
      {[
        { label: "Home", to: "home" },
        { label: "Our Story", to: "our-journey" },
        // { label: "Giftings", to: "giftings" },
        { label: "Wedding Details", to: "wedding-details" },
      ].map((link) => (
        <a
          key={link.to}
          href={`#${link.to}`}
          className="text-xs tracking-[0.3em] uppercase font-medium transition-colors duration-300 text-gray-400 hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
