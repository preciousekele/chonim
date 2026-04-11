import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-center h-14 bg-white/80 backdrop-blur-sm">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="text-black"
        style={{
          // fontFamily: 'SymphonieCalligraphy, cursive',
          // fontFamily: "'Playfair Display', serif",
          fontFamily: "'Kugile', serif",
          letterSpacing: "0.08em",
          fontWeight: 100,
          fontSize: "clamp(26px, 1.8vw, 27px)",
        }}
      >
        Nimechi &amp; Choko
      </motion.p>
    </header>
  );
};

export default Header;